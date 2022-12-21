import { createListing } from "../api/listingsAll/index.mjs";

/**
 * Lets user create a listing
 */

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      createListing(listing);
      alert("Listing was created");
    });
  }
}
