var productSwiper = new Swiper(".productSwiper", {
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
initCustomPagination(productSwiper, 2);

// * mobile swiper
var mobileSwiper = new Swiper(".mobileSwiper", {
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
initCustomPagination(mobileSwiper, 3);
