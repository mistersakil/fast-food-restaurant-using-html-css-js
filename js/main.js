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

/* Home slider */
let dots = document.querySelectorAll(".sliderNav .dots .icon");
let sliders = document.querySelectorAll(".slider .slide");
let playPauseBtn = document.querySelector(".sliderNav .sliderActionBtn");
let counter = 0;
let numberOfSlides = sliders.length - 1;
let intervalId;

function slideActiveStatusOn(index = 0) {
  for (let i = 0; i < sliders.length; i++) {
    if (i === index) {
      sliders[index].classList.add("active");
      dots[index].classList.add("active");
    } else {
      sliders[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
  }
}
//dots

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function (event) {
    counter = i;
    this.classList.add("active");
    dotActiveStatusOn(i);
    slideActiveStatusOn(i);
  };
}
function dotActiveStatusOn(index = 0) {
  for (let i = 0; i < dots.length; i++) {
    if (i !== index) {
      dots[i].classList.remove("active");
    }
  }
}

//playPause actions

function playPause(isPlay = true) {
  if (isPlay) {
    intervalId = setInterval(function () {
      if (counter == numberOfSlides) {
        slideActiveStatusOn(0);
      } else {
        slideActiveStatusOn(counter + 1);
      }
      if (counter < 2) {
        counter += 1;
      } else {
        counter = 0;
      }
    }, 5000);
  } else {
    clearInterval(intervalId);
  }
}

playPauseBtn.addEventListener("click", function (event) {
  let icon = this.querySelector(".icon");
  let span = this.querySelector("span");
  icon.classList.toggle("fa-pause");

  if (icon.classList.contains("fa-play")) {
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  } else {
    icon.classList.add("fa-play");
    icon.classList.remove("fa-pause");
  }
  if (span.innerText.toLowerCase() == "play") {
    span.innerHTML = "pause";
    playPause();
  } else {
    span.innerHTML = "play";
    playPause(false);
  }
});
/* Home slider end */
