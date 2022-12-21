import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { load } from "../storage/index.mjs";

const user = load("profile");
const userName = user.name;

const action = "/profiles";
const list = "/listings";
const method = "GET";

const url = `${API_AUCTION_URL}${action}/${userName}${list}`;
const listContainer = document.querySelector(".profileListing");

console.log(url);

export async function getProfileListing() {
  try {
    const response = await authFetch(url, { method });
    const infoListing = await response.json();

    listContainer.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4 box-margin">
        <div class="col">
          <div class="card h-100">
            <img src="${infoListing.media}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${infoListing.title}</h5>
              <p class="card-text">${infoListing.description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        </div>`;

    console.log(infoListing);
  } catch (error) {
    console.log(error);
  }
}

getProfileListing();
