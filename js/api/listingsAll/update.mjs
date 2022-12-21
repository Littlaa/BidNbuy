import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "put";

/**
 * Lets user update a post
 */

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Update requires a postID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
