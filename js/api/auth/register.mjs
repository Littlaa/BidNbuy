import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Lets user register
 */

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You are now registered");
  return result;
}
