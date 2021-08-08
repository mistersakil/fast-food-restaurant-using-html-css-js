/* variables */
const body = document.body;
const bars = document.querySelector(".bars .link");
const header = document.querySelector(".header");
const themeChangeBtn = document.querySelector(".themeChangeBtn");
const searchBoxClose = document.querySelector(".searchBoxClose");
const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const navbar = document.querySelectorAll(".nav a");

/* Navbar toggle button  */
bars.onclick = function (event) {
  event.preventDefault();
  this.firstChild.classList.toggle("fa-times");
  if (header.classList.contains("active")) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
};
/* Navbar toggle button end */
/* Close navbar on navItem click */
for (i = 0; i < navbar.length; i++) {
  navbar[i].onclick = function (event) {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      bars.firstChild.classList.toggle("fa-times");
    } else {
      header.classList.add("active");
    }
  };
}
/* Close navbar on navItem click end */

/* Theme change  button  */
if (window.localStorage.getItem("theme") == "light") {
  body.classList.remove("dark");
  themeChangeBtn.firstChild.classList.remove("fa-sun");
} else if (window.localStorage.getItem("theme") == "dark") {
  body.classList.add("dark");
  themeChangeBtn.firstChild.classList.add("fa-sun");
} else {
  window.localStorage.setItem("theme", "light");
}

themeChangeBtn.onclick = function (event) {
  event.preventDefault();
  this.firstChild.classList.toggle("fa-sun");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
  }
};
/* Theme change  button end */
/* searchBox  button */
searchBtn.onclick = function (event) {
  searchBox.classList.add("active");
};
searchBoxClose.onclick = function (event) {
  searchBox.classList.remove("active");
};
/* searchBox  button end */
