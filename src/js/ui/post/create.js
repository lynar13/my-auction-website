// /src/js/ui/post/create.js

import { createPost } from '/src/js/api/post.js';
import { displayError } from '/src/js/utilities/errorHandler.js';
import { validateListingData } from '/src/js/utilities/validation.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createPostForm');
  
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());
      postData.startingBid = parseFloat(postData.startingBid);

      const validationError = validateListingData(postData);
      if (validationError) {
        displayError(validationError);
        return;
      }

      try {
        const post = await createPost(postData);
        window.location.href = `/post/view.html?id=${post.id}`;
      } catch (error) {
        console.error('Error creating post:', error);
        displayError('Failed to create post. Please try again later.');
      }
    });
  }
});
