const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const signup = document.querySelector(".sign-up");
open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
signup.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
