import { API_AUCTION_URL } from "../../api/constants.mjs";
import { authFetch } from "../../api/authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";
const bid = "/bids";
const method = "post";

export async function addBid(id, amount) {
  const addBidUrl = `${API_AUCTION_URL}${action}/${id}${bid}`;

  const response = await authFetch(addBidUrl, {
    method,
    body: JSON.stringify({ amount: amount }),
  });

  const { userName } = await response.json();

  if (response.ok) {
    load("profile", userName);
    location.href = `specific.html?listId=${id}`;
    return await response.json();
  } else {
    alert("Your bid must be higher than the current bid, please up your game if you want this item!");
  }

  throw new Error(response);
}
