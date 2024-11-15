// /src/js/api/profile.js

const API_BASE_URL = 'https://v2.api.noroff.dev';

export async function getProfile() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/profile`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
}
