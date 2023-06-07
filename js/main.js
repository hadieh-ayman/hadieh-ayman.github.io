const hamBtn = document.querySelector(".ham-btn");
const navBar = document.querySelector(".navbar");
var reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", reveal);

let menuOpen = false;
hamBtn.addEventListener("click", () => {
  if (!menuOpen) {
    hamBtn.classList.add("open");
    navBar.classList.add("open");
    menuOpen = true;
  } else {
    hamBtn.classList.remove("open");
    navBar.classList.remove("open");
    menuOpen = false;
  }
});


function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
