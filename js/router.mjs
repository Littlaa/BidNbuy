import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/index.html") {
  listeners.setCreatePostFormListener();
} else if (path === "/profile.html") {
  listeners.setUpdatePostListener();
}
