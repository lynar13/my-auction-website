// /src/js/ui/profile/edit.js

import { getProfile, updateProfile } from '/src/js/api/profile.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const profile = await getProfile();
    document.getElementById('name').value = profile.name;
    document.getElementById('email').value = profile.email;

    // Handle form submission
    const form = document.getElementById('editProfileForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const updatedData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
      };
      try {
        await updateProfile(updatedData);
        alert('Profile updated successfully');
        window.location.href = '/profile/index.html';
      } catch (error) {
        console.error('Failed to update profile:', error);
      }
    });
  } catch (error) {
    console.error('Error loading profile:', error);
  }
});
