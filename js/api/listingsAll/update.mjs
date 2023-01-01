import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Lets user update avatar on profile
 */

export async function updateAvatar(avatarData) {
  const userInfo = storage.load("profile");
  const { name } = userInfo;
  const action = `/profiles/${name}/media`;
  const method = "put";

  const updateAvatarUrl = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(updateAvatarUrl, {
    method,
    body: JSON.stringify(avatarData),
  });

  if (response.ok) {
    location.reload();
  } else {
    alert("Something went wrong");
  }
}
