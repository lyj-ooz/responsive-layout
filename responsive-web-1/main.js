const openBtn = document.querySelector(".navbar .open-btn");
const navMenu = document.querySelector(".navbar nav");

openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
