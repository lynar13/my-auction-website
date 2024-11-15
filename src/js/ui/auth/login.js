// /src/js/ui/auth/login.js

import { login } from '/src/js/api/auth.js';
import { displaySuccess } from '/src/js/utilities/notifications.js';
import { displayError } from '/src/js/utilities/errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const token = await login(email, password);
      localStorage.setItem('token', token);

      // Display success message and redirect
      displaySuccess('Login successful!');
      setTimeout(() => {
        window.location.href = '/profile/index.html';
      }, 1500); // Slight delay for success message to display
    } catch (error) {
      // Use displayError to show error in the error-container div
      displayError('Login failed: ' + error.message);

      // Ensure the error container is visible
      document.getElementById('error-container').classList.remove('d-none');
    }
  });
});
