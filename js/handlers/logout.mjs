import { remove } from "../storage/index.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector("#logoutButton");

  logoutButton.addEventListener("click", () => {
    remove("token");
    remove("profile");
    location.reload();
  });
}
