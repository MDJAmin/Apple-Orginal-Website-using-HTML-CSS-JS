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
    delay: 3000,       
    disableOnInteraction: false, 
  },
  pagination: {
    el: '.swiper-pagination',   
    clickable: true,            
  },
});
