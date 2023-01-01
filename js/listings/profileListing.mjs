import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { load } from "../storage/index.mjs";

const user = load("profile");

const action = "/profiles";
const list = "/listings";
const method = "GET";

const url = `${API_AUCTION_URL}${action}/${user.name}${list}`;
const listContainer = document.querySelector(".profileListing");

export async function getProfileListing() {
  try {
    const response = await authFetch(url, { method });
    const infoListing = await response.json();

    for (let i = 0; i < infoListing.length; i++) {
      listContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${infoListing[i].media}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${infoListing[i].title}</h5>
              <p class="card-text">${infoListing[i].description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Ends at - ${infoListing[i].endsAt}</small>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getProfileListing();
