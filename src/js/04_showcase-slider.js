var showcaseSwiper = new Swiper(".showcaseSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
initCustomPagination(showcaseSwiper, 8);
