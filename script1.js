
let expand = document.querySelector("#shopbutton");
let section = document.querySelector(".section2");





shopbutton.addEventListener("click", () => {
  console.log("shopbutton");
  section.classList.toggle("height");

})


fullPageButton.addEventListener("click", () => {
  console.log("shopbutton");
  fullPageButton.classList.toggle("reveal");
  msg.classList.toggle("reveal");
});


/* const animatedELs = document.querySelector(".redcup");

for (const animatedEL of animatedELs) {
  const id = animatedEl.id;
  lottie.loadAnimartion({
    container: document.getElementById(id),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data/${id}.json`,
  });
} */

/* const animatedEls = document.querySelectorAll(".redcup");

for (const animatedEl of animatedEls) {
  const id = animatedEl.id;
  lottie.loadAnimation({
    container: document.getElementById(id),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `https://assets.codepen.io/162656/${id}.json`,
  });
} */

const smilie = document.querySelector(".smilie")


document.querySelector(".smilie").addEventListener("mouseenter", () => smilie.play())

function does() {
  console.log("works")
}