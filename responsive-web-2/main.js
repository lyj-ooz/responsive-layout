const moreBtn = document.querySelector(".titleAndButton .moreBtn");
const title = document.querySelector(".info .titleAndButton .title");

moreBtn.addEventListener("click", function () {
  this.classList.toggle("up");
  title.classList.toggle("more");
});
