
let closetab = document.querySelector("#closetab");
let button = document.querySelector(".button");
let msg = document.querySelector(".expand");
let fullPageButton = document.querySelector(".fullPageButton");

button.addEventListener("click", () => {
  console.log("button");
  msg.classList.toggle("reveal");
  fullPageButton.classList.toggle("reveal");
});

closetab.addEventListener("click", () => {
  console.log("button");
  msg.classList.toggle("reveal");
});
