// /src/js/ui/listings/listings.js

import { getAllListings } from '/src/js/api/listings.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const listings = await getAllListings();
    const listingsContainer = document.getElementById('listingsContainer');
    listingsContainer.innerHTML = ''; // Clear existing listings

    listings.forEach(listing => {
      const listingCard = document.createElement('div');
      listingCard.className = 'col-md-4 mb-4';
      listingCard.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${listing.title}</h5>
            <p class="card-text">${listing.description}</p>
            <p class="card-text">Starting Bid: $${listing.startingBid}</p>
            <a href="/post/view.html?id=${listing.id}" class="btn btn-primary">View Listing</a>
          </div>
        </div>
      `;
      listingsContainer.appendChild(listingCard);
    });
  } catch (error) {
    console.error('Error loading listings:', error);
  }
});
