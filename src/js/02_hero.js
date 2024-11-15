var heroswiper = new Swiper(".heroSlider", {
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    360: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: true,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
initCustomPagination(heroswiper, 1);
