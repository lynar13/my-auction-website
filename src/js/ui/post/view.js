// /src/js/ui/post/view.js

import { readPost } from '/src/js/api/listings.js';
import { placeBid } from '/src/js/api/bids.js';
import { displayError } from '/src/js/utilities/errorHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
  const postId = new URLSearchParams(window.location.search).get('id');

  if (postId) {
    try {
      const listing = await readPost(postId);
      displayPost(listing);
    } catch (error) {
      console.error('Failed to load listing:', error);
      displayError('Could not load listing. Please try again later.');
    }
  } else {
    displayError('No listing ID provided');
  }
});

// Update this function to include error handling for bids
document.getElementById('bidForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const bidAmount = parseFloat(document.getElementById('bidAmount').value);
  if (!bidAmount || bidAmount <= 0) {
    displayError('Please enter a valid bid amount');
    return;
  }

  try {
    await placeBid(postId, bidAmount);
    alert('Bid placed successfully!');
    window.location.reload();
  } catch (error) {
    console.error('Failed to place bid:', error);
    displayError('Failed to place bid. Please try again.');
  }
});
