var lifestyleSwiper = new Swiper(".lifestyleSwiper", {
  spaceBetween: 12,
  slidesPerView: 1.5,
  centeredSlides: true,
  initialSlide: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 12,
      initialSlide: 1,
    },
    1200: {
      slidesPerView: 3,
      pagination: false,
      allowSlideNext: false,
      allowSlidePrev: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3,
      pagination: false,
      allowSlideNext: false,
      allowSlidePrev: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },
  // loop: true,
});
initCustomPagination(lifestyleSwiper, 9);
