export function getLastBid(bids) {
  let latestBid = bids[0];

  for (let i = 0; i < bids.length; i++) {
    const latestBidDate = new Date(latestBid.created);
    const currentBidDate = new Date(bids[i].created);

    if (currentBidDate > latestBidDate) {
      latestBid = bids[i];
    }
  }
  return latestBid;
}
