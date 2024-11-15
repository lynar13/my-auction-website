// /src/js/ui/profile/profile.js

import { getProfile } from '/src/js/api/profile.js';

document.addEventListener('DOMContentLoaded', async () => {
  const profileData = await getProfile();
  document.getElementById('name').textContent = profileData.name;
  document.getElementById('email').textContent = profileData.email;
});
