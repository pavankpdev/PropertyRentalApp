// constants representing navbar icons
const cross = "times";
const menu = "bars";

// tracking variable
let menuTrack = true;

// variables refering to DOM
let navbarIcon = document.querySelector(".navbar-icon");

//event lister to toggle the navbar dropdown
navbarIcon.addEventListener("click", () => {
  let navbarDrodown = document.querySelector(".navbar-dropdown");
  navbarDrodown.classList.toggle("hidden");
  if (menuTrack) {
    navbarIcon.classList.remove("fa-bars");
    menuTrack = false;
    navbarIcon.classList.add("fa-times");
  } else {
    navbarIcon.classList.remove("fa-times");
    menuTrack = true;
    navbarIcon.classList.add("fa-bars");
  }
});
