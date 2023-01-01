import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const avatar = "/media";
const method = "put";

const user = load("profile");

const updateAvatarUrl = `${API_AUCTION_URL}${action}/${user.name}${avatar}`;

/**
 * Lets user update avatar on profile
 */

export async function updateAvatar(avatarData) {
  if (!user) {
    throw new console.error("Need a user");
  }

  const response = await authFetch(updateAvatarUrl, {
    method,
    body: JSON.stringify(avatarData),
  });

  return await response.json();
}
