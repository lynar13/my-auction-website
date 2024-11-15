// /src/js/api/listings.js

const API_BASE_URL = 'https://v2.api.noroff.dev';

export async function getAllListings() {
  const response = await fetch(`${API_BASE_URL}/listings`);
  if (!response.ok) throw new Error('Failed to load listings');
  return response.json();
}

export async function readPost(id) {
  const response = await fetch(`${API_BASE_URL}/listings/${id}`);
  if (!response.ok) throw new Error('Failed to load listing');
  return response.json();
}

export async function createListing(data) {
  const response = await fetch(`${API_BASE_URL}/listings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create listing');
  return response.json();
}
