// /src/js/ui/post/edit.js

import { readPost, updatePost } from '/src/js/api/post.js';
import { displayError } from '/src/js/utilities/errorHandler.js';
import { validateListingData } from '/src/js/utilities/validation.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const form = document.getElementById('editPostForm');

  if (!postId) {
    displayError('No post ID specified.');
    return;
  }

  // Load the existing post data into the form
  try {
    const post = await readPost(postId);

    if (!post || !post.data) {
      throw new Error('Post data not found');
    }

    const postData = post.data;
    document.getElementById('title').value = postData.title || '';
    document.getElementById('description').value = postData.body || '';
    document.getElementById('tags').value = Array.isArray(postData.tags) ? postData.tags.join(', ') : '';
    document.getElementById('startingBid').value = postData.startingBid || 0;
  } catch (error) {
    console.error('Failed to load post data:', error);
    displayError('Failed to load post data. Please try again later.');
  }

  // Handle form submission for updating the post
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const updatedData = Object.fromEntries(formData.entries());
      updatedData.startingBid = parseFloat(updatedData.startingBid);
      updatedData.tags = updatedData.tags ? updatedData.tags.split(',').map(tag => tag.trim()) : [];

      const validationError = validateListingData(updatedData);
      if (validationError) {
        displayError(validationError);
        return;
      }

      try {
        await updatePost(postId, updatedData);
        alert('Listing updated successfully!');
        window.location.href = `/post/view.html?id=${postId}`;
      } catch (error) {
        console.error('Failed to update post:', error);
        displayError('Failed to update listing. Please try again later.');
      }
    });
  }
});
