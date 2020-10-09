const body = document.querySelector("body");

const navbar = document.querySelector("#navbar");

const navClose = document.querySelector("#nav-toggler-close");
const navOpen = document.querySelector("#nav-toggler");

// Nav bar Toggling
navOpen.addEventListener("click", (evt) => {
  body.classList.toggle("mobile-view");
});

navClose.addEventListener("click", (evt) => {
  body.classList.toggle("mobile-view");
});

// Sticky Navbar
window.addEventListener("scroll", (evt) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("y-scrolling");
  } else {
    navbar.classList.remove("y-scrolling");
  }
});
