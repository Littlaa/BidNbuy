import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { load } from "../storage/index.mjs";

const user = load("profile");

const action = "/profiles";
const method = "GET";

const url = `${API_AUCTION_URL}${action}/${user.name}`;
const container = document.querySelector(".profileData");

export async function getProfile() {
  try {
    const response = await authFetch(url, { method });
    const info = await response.json();

    container.innerHTML = `<div class="d-flex justify-content-center pt-4">
    <div class="card">
      <img src="${info.avatar}" class="card-img-top" height="300" />
      <div class="card-body">
        <h5 class="card-title mb-2">${info.name}</h5>
        <h6 class="card-title mb-4">${info.email}</h6>
        <p class="text-muted mb-3">Wins: ${info.wins.length}</p>
        <p class="text-muted mb-3">Listings: ${info._count.listings}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Credit - ${info.credits}$</li>
      </ul>
      <ul class="list-group list-group-flush">
      <li class="list-group-item nav-item">
      <a class="nav-link create-button" href="create.html">Create Listing</a>
      <a class="nav-link avatar-button mt-3" href="avatar.html">Update Avatar</a>
      </li>
    </ul>
    </div>
  </div>`;

    addTitle(info);
  } catch (error) {
    console.log(error);
  }
}

function addTitle(info) {
  document.title = "BidNBuy | " + info.name;
}

getProfile();
