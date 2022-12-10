const baseUrl = "https://api.noroff.dev/api/v1/auction/listings";

const results = document.querySelector(".postListings");

async function getListings(url) {
  try {
    const queries = "?_seller=true&_bids=true";
    const response = await fetch(`${url}${queries}`);
    const listings = await response.json();

    for (let i = 0; i < listings.length; i++) {
      results.innerHTML += `<div class="col">
                                    <div class="card h-100">
                                    <img src="${listings[i].media}" class="card-img-top"/>
                                    <div class="card-body">
                                    <h5 class="card-title">${listings[i].title}</h5>
                                    <p class="card-text">${listings[i].description}</p>
                                    <p class="card-text">Sellers name - ${listings[i].seller.name}</p>
                                    <p class="card-text">Last bid - ${getLastBid(listings[i].bids)} $</p>
                                    <p class="card-text">Bidders - ${listings[i]._count.bids}</p>
                                    <a href="specific.html?listId=${
                                      listings[i].id
                                    }" class="btn btn-primary">View listing</a>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Updated - ${listings[i].updated}</small>
                                    </div>
                                    </div>
                                    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
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

getListings(baseUrl);
