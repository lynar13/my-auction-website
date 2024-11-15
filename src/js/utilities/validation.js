// src/js/utilities/validation.js

export function validateBidAmount(amount) {
    if (!amount || isNaN(amount) || amount <= 0) {
      return 'Please enter a valid bid amount.';
    }
    return null;
  }
  
  export function validateListingData(data) {
    if (!data.title || data.title.length < 3) {
      return 'Title must be at least 3 characters long.';
    }
    if (!data.startingBid || isNaN(data.startingBid) || data.startingBid <= 0) {
      return 'Starting bid must be a positive number.';
    }
    return null;
  }
  