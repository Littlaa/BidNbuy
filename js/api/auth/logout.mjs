import { remove } from "../../storage/index.mjs";

export function logout() {
  const buttons = document.querySelectorAll(".logout");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      remove("token");
      remove("profile");
      Location.reload();
    });
  });
}
