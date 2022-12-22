import { save } from "../storage/index.mjs";
import { updateAvatar } from "../api/listingsAll/index.mjs";

export async function setAvatarListener() {
  const form = document.querySelector("#updateAvatar");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      save("avatar", form.avatar.value);

      updateAvatar(avatar);
    });
  }
}
