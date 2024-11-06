var productSwiper = new Swiper(".SaleSwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
initCustomPagination(productSwiper, 4);

// * mobile swiper
var salemobileSwiper = new Swiper(".salemobileSwiper", {
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
initCustomPagination(salemobileSwiper, 5);
