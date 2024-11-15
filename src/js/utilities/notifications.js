// src/js/utilities/notifications.js

export function displaySuccess(message) {
    let successContainer = document.getElementById('success-container');
  
    if (!successContainer) {
      successContainer = document.createElement('div');
      successContainer.id = 'success-container';
      successContainer.className = 'alert alert-success mt-4';
      document.body.prepend(successContainer);
    }
  
    successContainer.textContent = message;
    successContainer.style.display = 'block';
  
    setTimeout(() => {
      successContainer.style.display = 'none';
    }, 3000); // Hide after 3 seconds
  }
  