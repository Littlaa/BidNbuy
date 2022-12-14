import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/index.html") {
  listeners.logoutListener();
} else if (path === "/profile.html") {
  listeners.logoutListener();
} else if (path === "/specific.html") {
  listeners.logoutListener();
}
