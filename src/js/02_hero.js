var heroswiper = new Swiper(".heroSlider", {
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
    1600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  // on: {
  //   slideChange: function () {
  //     initCustomPagination(heroSlider, 2);
  //   },
  // },
});
initCustomPagination(heroswiper, 1);
