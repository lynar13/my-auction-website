// src/js/utilities/errorHandler.js

export function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    
    // Create the error container if it doesn't exist
    if (!errorContainer) {
      const newErrorContainer = document.createElement('div');
      newErrorContainer.id = 'error-container';
      newErrorContainer.className = 'alert alert-danger mt-4';
      document.body.prepend(newErrorContainer); // Add it at the top of the page
    }
  
    // Set the error message and make it visible
    document.getElementById('error-container').textContent = message;
    document.getElementById('error-container').style.display = 'block';
  }
  