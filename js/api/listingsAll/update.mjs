import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const avatar = "/media";
const method = "put";

const user = load("profile");
const userName = user.name;

const updateAvatarUrl = `${API_AUCTION_URL}${action}/${userName}${avatar}`;

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

  window.location.assign("/profile");
  return await response.json();
}
