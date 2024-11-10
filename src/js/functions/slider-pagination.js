function initCustomPagination(swiperInstance, swiperId) {
  const paginationElement = document.querySelector(
    `.pagination-swiper-location[data-swiperId="${swiperId}"]`
  );
  if (!paginationElement) {
    console.error(`Pagination element not found for swiperId: ${swiperId}`);
    return;
  }

  const activeEl = paginationElement.querySelector(".pagination-swiper-current");
  const lengthElement = paginationElement.querySelector(".pagination-swiper-length");

  if (!activeEl || !lengthElement) {
    console.error("Required pagination elements are missing.");
    return;
  }

  let swiperLength = swiperInstance.snapGrid.length;
  lengthElement.textContent = swiperLength;

  function updateCustomPagination() {
    let currentSlide =
      Math.floor(swiperInstance.realIndex / swiperInstance.params.slidesPerGroup) + 1;
    activeEl.textContent = currentSlide;
  }

  swiperInstance.on("slideChange", function () {
    updateCustomPagination();
  });

  updateCustomPagination();
}

// * installations instructions
//! 1.  html to import that  slider-pagination and send a uniqe swiperId
// example:  @@include('../features/slider-pagination.html',{ swiperId:2 })

// * steps to install the slider pagination.\
// ? 1. scss: to copy paste this to your component slider scss is located.
// example:
//  .pagination-wrapper {
//   display: flex;
//   .swiper-pagination {
//     .swiper-pagination-bullet-active {
//       background: #000;
//     }
//   }
//   .pagination-swiper-location {
//     display: flex;
//     position: absolute;
//     z-index: 2;
//     left: calc(50% - 123px);
//     bottom: 6px;
//     align-items: center;
//     gap: 2px;
//     .pagination-swiper-current {
//       font-size: 18px;
//       font-style: normal;
//       font-weight: 500;
//       color: #000;
//     }
//     .pagination-swiper-of {
//       font-size: 18px;
//       font-style: normal;
//       font-weight: 500;
//       color: rgba(0, 0, 0, 0.2);
//     }
//     .pagination-swiper-length {
//       font-size: 18px;
//       font-style: normal;
//       font-weight: 500;
//       color: rgba(0, 0, 0, 0.2);
//     }
//   }
// }

// * 3. js: in the js !! of your slider settings !! call the function in this like so
// example: initCustomPagination(productSwiper, 1);
