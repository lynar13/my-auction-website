// /src/js/api/bids.js

const API_BASE_URL = 'https://v2.api.noroff.dev';

export async function placeBid(listingId, amount) {
  const response = await fetch(`${API_BASE_URL}/listings/${listingId}/bids`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  if (!response.ok) throw new Error('Failed to place bid');
  return response.json();
}
