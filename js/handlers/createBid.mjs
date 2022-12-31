import { addBid } from "../api/listingsAll/index.mjs";

export function setAddBidListener() {
  const form = document.querySelector("#placeBid");

  const params = new URLSearchParams(document.location.search);
  const bidId = params.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const theBid = event.target.amount.value;

      addBid(bidId, Number(theBid));
      console.log(bidId, Number(theBid));
    });
  }
}
