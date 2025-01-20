"use strict"
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
let currentIndex = 0;
let interval;
let isPlaying = false;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });

  slider.style.transform = `translateX(-${index * 100}%)`;
}

function startSlider() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }, 2000);
}

function stopSlider() {
  clearInterval(interval);
}

playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playIcon.textContent = '❚❚';
    startSlider();
  } else {
    playIcon.textContent = '▶';
    stopSlider();
  }
});
showSlide(currentIndex);
