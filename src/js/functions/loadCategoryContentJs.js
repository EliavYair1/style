function swiperSettings(swiperClass, swiperId) {
  const swiperInstance = new Swiper(`.${swiperClass}`, {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: `.${swiperClass} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${swiperClass} .swiper-button-next`,
      prevEl: `.${swiperClass} .swiper-button-prev`,
    },
    on: {
      init: function () {
        // console.log("class:", this.el);
        initCustomPagination(this, swiperId);
      },
    },
  });
  return swiperInstance;
}

function loadCategoryContentJs() {
  // * filtering card result on the category page
  const customSelect = document.getElementById("customSelect");
  const customSelectOptions = document.querySelector(".custom-select-options");
  const customSelectText = document.querySelector(".custom-select-text");
  const customSelectArrow = document.querySelector(".custom-select-arrow");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const contentItems = document.querySelectorAll(".content-item");

  if (customSelect && customSelectOptions && customSelectText) {
    customSelect.addEventListener("click", () => {
      const isDropdownOpen = customSelectOptions.style.display === "block";

      customSelectOptions.style.display = isDropdownOpen ? "none" : "block";

      if (!isDropdownOpen) {
        customSelect.style.borderBottomLeftRadius = "0px";
        customSelect.style.borderBottomRightRadius = "0px";
        customSelect.style.borderBottomWidth = "0px";

        customSelectOptions.style.borderTopLeftRadius = "0px";
        customSelectOptions.style.borderTopRightRadius = "0px";
        customSelectOptions.style.borderTopWidth = "0px";
        customSelectArrow.style.rotate = "-90deg";
      } else {
        customSelect.style.borderBottomLeftRadius = "6px";
        customSelect.style.borderBottomRightRadius = "6px";
        customSelect.style.borderBottomWidth = "1px";

        customSelectOptions.style.borderTopLeftRadius = "6px";
        customSelectOptions.style.borderTopRightRadius = "6px";
        customSelectOptions.style.borderTopWidth = "1px";
        customSelectArrow.style.rotate = "0deg";
      }
    });

    document.addEventListener("click", (e) => {
      if (!customSelect.contains(e.target)) {
        customSelectOptions.style.display = "none";

        customSelect.style.borderBottomLeftRadius = "6px";
        customSelect.style.borderBottomRightRadius = "6px";
        customSelect.style.borderBottomWidth = "1px";

        customSelectOptions.style.borderTopLeftRadius = "6px";
        customSelectOptions.style.borderTopRightRadius = "6px";
        customSelectOptions.style.borderTopWidth = "1px";
      }
    });

    // * mobile selector
    customSelectOptions.addEventListener("click", (e) => {
      const option = e.target.closest("[data-value]");
      if (option) {
        customSelectText.textContent = option.textContent;
        customSelectOptions.style.display = "none";

        customSelect.style.borderBottomLeftRadius = "6px";
        customSelect.style.borderBottomRightRadius = "6px";
        customSelect.style.borderBottomWidth = "1px";

        customSelectOptions.style.borderTopLeftRadius = "6px";
        customSelectOptions.style.borderTopRightRadius = "6px";
        customSelectOptions.style.borderTopWidth = "1px";

        const selectedValue = option.getAttribute("data-value");
        showContentForFilter(selectedValue);
      }
    });

    // * desktop selector
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const filterValue = e.target.getAttribute("data-filter");

        const filterText = e.target.textContent;
        customSelectText.textContent = filterText;
        customSelectOptions.style.display = "none";

        customSelect.style.borderBottomLeftRadius = "6px";
        customSelect.style.borderBottomRightRadius = "6px";
        customSelect.style.borderBottomWidth = "1px";

        customSelectOptions.style.borderTopLeftRadius = "6px";
        customSelectOptions.style.borderTopRightRadius = "6px";
        customSelectOptions.style.borderTopWidth = "1px";

        showContentForFilter(filterValue);
      });
    });
    // * displaying the filtered content and adding class active
    function showContentForFilter(filterValue) {
      // contentItems.forEach((item) => {
      //   item.classList.remove("active");
      // });
      // const selectedContent = document.querySelector(`.content-item[data-filter="${filterValue}"]`);
      // if (selectedContent) {
      //   selectedContent.classList.add("active");
      // }
    }
  }
  // ? end filtering card result

  // * category sliders settings
  swiperSettings("VacationBenefitsSwiper", 10);
  swiperSettings("discountClubOwnerSwiper", 11);
  // ?  category sliders settings

  // * mobile layout card logic
  const showMoreButtons = document.querySelectorAll(".show-more-button");
  const hiddenCardSets = document.querySelectorAll(".hidden-cards");
  showMoreButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const hiddenCards = hiddenCardSets[index];
      if (hiddenCards.style.display === "none" || hiddenCards.style.display === "") {
        hiddenCards.style.display = "flex";
        hiddenCards.style.flexDirection = "column";
        button.textContent = "הצג פחות";
      } else {
        hiddenCards.style.display = "none";
        button.textContent = "הטבות נוספות";
      }
    });
  });
  // ? mobile layout card logic
}
