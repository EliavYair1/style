var VoucherSwiper = new Swiper(".VoucherSwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
initCustomPagination(VoucherSwiper, 6);

// * mobile swiper
var vouchermobileSwiper = new Swiper(".vouchermobileSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {},
    1600: {},
  },
  direction: "horizontal",
});
initCustomPagination(vouchermobileSwiper, 7);
