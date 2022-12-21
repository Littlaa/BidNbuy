import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

/**
 * Lets user create a post
 */

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
