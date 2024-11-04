var showcaseSwiper = new Swiper(".showcaseSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
initCustomPagination(showcaseSwiper, 8);
