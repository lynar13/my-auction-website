// /src/js/ui/auth/register.js

import { register } from '/src/js/api/auth.js';
import { displaySuccess } from '/src/js/utilities/notifications.js';
import { displayError } from '/src/js/utilities/errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await register(name, email, password);
      
      // Display success message and redirect
      displaySuccess('Registration successful!');
      setTimeout(() => {
        window.location.href = '/public/auth/login.html';
      }, 1500); // Slight delay to allow user to see the success message
    } catch (error) {
      // Use displayError to show error in the error-container div
      displayError('Registration failed: ' + error.message);

      // Ensure the error container is visible
      document.getElementById('error-container').classList.remove('d-none');
    }
  });
});
