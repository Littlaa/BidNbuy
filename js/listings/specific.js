const detailListing = document.querySelector(".listingDetails");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const listId = parameter.get("listId");

const url = `https://api.noroff.dev/api/v1/auction/listings/${listId}`;

async function getListing() {
  try {
    const queries = "?_seller=true&_bids=true";
    const response = await fetch(`${url}${queries}`);
    const listing = await response.json();

    detailListing.innerHTML += `<div class="col">
                                    <div class="card h-100">
                                    <img src="${listing.media}" class="card-img-top"/>
                                    <div class="card-body">
                                    <h5 class="card-title">${listing.title}</h5>
                                    <p class="card-text">${listing.description}</p>
                                    <p class="card-text">Sellers name - ${listing.seller.name}</p>
                                    <p class="card-text">Last bid - ${getLastBid(listing.bids)} $</p>
                                    <p class="card-text">Bidders - ${listing._count.bids}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item nav-item">
                                    <a class="nav-link create-button" href="bid.html">Place Bid</a>
                                    </li>
                                    </ul>
                                    <div class="card-footer">
                                    <small class="text-muted">Updated - ${listing.updated}</small>
                                    </div>
                                    </div>
                                    </div>`;

    addTitle(listing);
  } catch (error) {
    console.log(error);
  }
}

function addTitle(listing) {
  document.title = "BidNbuy | " + listing.title;
}

function getLastBid(bids) {
  if (!bids || bids.length == 0) {
    return "No bids";
  }

  let latestBid = bids[0];

  for (let i = 0; i < bids.length; i++) {
    const latestBidDate = new Date(latestBid.created);
    const currentBidDate = new Date(bids[i].created);

    if (currentBidDate > latestBidDate) {
      latestBid = bids[i];
    }
  }
  return latestBid.amount;
}

getListing(url);
