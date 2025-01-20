"use strict"

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Slider 1

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
const slider = document.getElementById('slider');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
let currentIndex = 6;
let interval;
let isPlaying = false;

const images = [
  'assets/Slider 2/1.jpg',
  'assets/Slider 2/2.jpg',
  'assets/Slider 2/3.jpg',
  'assets/Slider 2/4.jpg',
  'assets/Slider 2/131x131SC.DN01.jpg',
  'assets/Slider 2/196x196sr.jpg'
];

function loadImages() {
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('slider-item');
    img.alt = 'Image';
    slider.appendChild(img);
  });

  for (let i = 0; i < 50; i++) {
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.classList.add('slider-item');
      img.alt = 'Image';
      slider.appendChild(img);
    });
  }

  slider.children[6].classList.add('active');
}

function moveSlider() {
  const items = document.querySelectorAll('.slider-item');
  items.forEach(item => {
    item.classList.remove('active');
  });

  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlider() {
  interval = setInterval(moveSlider, 2000);
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

loadImages();
slider.style.transform = `translateX(-${currentIndex * 100}%)`;

// login processes 

document.addEventListener("DOMContentLoaded", () => {
  const authLink = document.getElementById('authLink');
  const token = localStorage.getItem('authToken');

  if (token) {
    authLink.textContent = 'Logout';
    authLink.href = '#';
    authLink.addEventListener('click', () => {
      localStorage.removeItem('authToken');
      alert('Logged out successfully!');
      location.reload();
    });
  } else {
    authLink.textContent = 'Login';
    authLink.href = 'auth/index.html';
  }
});


// copyright date 

document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});
