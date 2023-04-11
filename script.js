const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

const slider = document.querySelector(".slider");

const slides = slider.querySelectorAll(".slide");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let currSlide = 0;

const maxSlide = slides.length;

const goToSlide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

const init = function () {
  goToSlide(0);
};

init();

const form = document.querySelector("form");
let captcha = document.getElementById("captcha");
const button = document.querySelector("button");

button.disabled = true;

form.addEventListener("keyup", () => {
  let validity = form.checkValidity();
  if (validity === true && captcha.value == 4) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
  form.innerHTML =
    "<div class='confirmation'>Hi there! Thank you for looking at my form. This form is currently not connected to any mailscript.</div>";
});

function checkTab(e) {
  if (e.keyCode === 9) {
    button.classList.add("show-outline");
    window.removeEventListener("keydown", checkTab);
  }
}
window.addEventListener("keydown", checkTab);


