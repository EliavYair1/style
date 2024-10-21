var heroswiper = new Swiper(".heroSlider", {
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.02,
      centeredSlides: true,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
