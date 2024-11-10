const categoryItems = document.querySelectorAll(".header__menu-item--category");
const categoryLink = document.querySelectorAll(".category-link");
const categoriesMenu = document.getElementById("categories-menu");
const parentHeader = document.querySelectorAll(".header");
const subcategoryLinks = document.querySelectorAll(".header__menu-subcategory-link");
const dynamicImageWindow = document.querySelector(".image-window");
const productContainer = document.querySelector(".product");
const backgroundSubMenus = document.querySelector(".product-image-container");
const categoriesContainer = document.querySelector(".header__menu--categories");

document.addEventListener("DOMContentLoaded", () => {
  const applyHoverOnCategories = () => {
    if (window.innerWidth > 1600) {
      categoryItems.forEach((category) => {
        category.querySelector("a").addEventListener("mouseenter", (e) => {
          // clearTimeout(closeTimeout);
          e.stopPropagation();
          e.preventDefault();
          const parentCategoryItem = category.closest(".header__menu-item--category");
          const categoryText = parentCategoryItem.querySelector(".image-text span").textContent;
          const dynamicContent = `
              <div class="wrapper">
                <h2 class="title">${categoryText}</h2>
                <p class="subtext">${categoryText}</p>
                <a href="${categoryText}" class="link">
                  <span class="link-text">לפרטים נוספים</span>
                </a>
              </div>
            `;
          loadProductContent(dynamicContent);
          toggleSubCategory(e, true);
        });
      });
    } else {
      categoryItems.forEach((category) => {
        category.removeEventListener("mouseenter", toggleSubCategory);
        category.removeEventListener("mouseleave", closeSubCategoryOnHoverOut);
        // category.addEventListener("click", toggleSubCategory);
        category.addEventListener("click", (e) => {
          e.stopPropagation();
          if (window.innerWidth >= 1600) {
            toggleSubCategory(e);
          }
        });

        //
        const aLink = category.querySelector(".category-link");
        aLink.addEventListener("click", function (event) {
          const arrow = this.querySelector(".header__menu-arrow");

          if (window.innerWidth < 1600) {
            event.preventDefault();
            const siblings = this.nextElementSibling;
            if (this.classList.contains("activeToggle")) {
              this.classList.remove("activeToggle");
              // this.parentNode.style.background = "unset";
              siblings.style.display = "none";
              siblings.style.maxHeight = "0";
              arrow.classList.remove("rotate");
            } else {
              arrow.classList.add("rotate");
              this.classList.add("activeToggle");
              // this.parentNode.style.background = "rgba(242, 163, 71, 0.14)";

              siblings.style.display = "block";
              siblings.style.maxHeight = "unset";
            }
          }
        });
      });
    }
  };

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(applyHoverOnCategories, 200);
  });

  applyHoverOnCategories();

  // closing subcategory when clicking outside
  if (categoriesContainer) {
    categoriesContainer.addEventListener("mouseout", (e) => {
      if (
        !categoriesContainer.contains(e.relatedTarget) &&
        !backgroundSubMenus.contains(e.relatedTarget)
      ) {
        closeAllSubCategories();
      }
    });
  }
});

// function to toggle subcategory on click/hover
const toggleSubCategory = (e) => {
  const isDesktop = window.innerWidth >= 1600;
  const elementTarget = e.currentTarget.closest(".header__menu-item--category");
  const dataId = elementTarget.getAttribute("data-id");
  const subCategoriesWrapper = document.querySelector(
    `.header__menu-subcategories[data-subcatid="${dataId}"]`
  );

  const isCurrentlyOpen =
    subCategoriesWrapper.style.maxHeight !== "0px" && subCategoriesWrapper.style.maxHeight !== "";

  if (isDesktop) {
    closeAllSubCategories();
  }

  if (!isCurrentlyOpen) {
    if (isDesktop) {
      console.log("desktop");
      openSubCategory(subCategoriesWrapper, isDesktop);
    } else {
      console.log("mobile");
      openSubCategory(subCategoriesWrapper, false);
    }
  }
};

// Helper function to close all subcategories and reset UI elements
const closeAllSubCategories = (excludeTarget = null) => {
  const allSubcategories = document.querySelectorAll(".header__menu-subcategories");

  const allArrows = document.querySelectorAll(".header__menu-arrow");
  allArrows.forEach((arrow) => {
    arrow.classList.remove("rotate");
  });

  allSubcategories.forEach((subCategory) => {
    if (excludeTarget && subCategory === excludeTarget) return;
    subCategory.style.maxHeight = "0px";
    subCategory.style.display = "none";
  });

  // reset background and additional elements
  backgroundSubMenus.style.display = "none";
  dynamicImageWindow.style.display = "none";
  productContainer.style.display = "none";
};

// open the subcategory
const openSubCategory = (subCategoriesWrapper, isDesktop) => {
  // const arrow = elementTarget.querySelector(".header__menu-arrow");
  subCategoriesWrapper.style.display = "flex";
  subCategoriesWrapper.style.flexDirection = "column";
  subCategoriesWrapper.style.maxHeight = "100vh";
  subCategoriesWrapper.style.top = "39px";
  subCategoriesWrapper.style.right = "307px";

  // arrow.classList.add("rotate");
  // console.log(isDesktop);
  if (isDesktop) {
    backgroundSubMenus.style.transition = "max-width 0.3s ease;";
    backgroundSubMenus.style.display = "flex";
    backgroundSubMenus.style.height = "565px";
    backgroundSubMenus.style.width = parentHeader[0].clientWidth - 300 + "px";
    backgroundSubMenus.style.position = "absolute";
    backgroundSubMenus.style.top = "178px";
    backgroundSubMenus.style.zIndex = 10;
    backgroundSubMenus.style.right = "unset";
    backgroundSubMenus.style.left = "0";
    backgroundSubMenus.style.justifyContent = "flex-end";
    backgroundSubMenus.style.flexDirection = "row";
    backgroundSubMenus.style.boxShadow = "0px 20px 26px 0px rgba(0, 0, 0, 0.15)";
    backgroundSubMenus.style.borderTop = " 2px solid #E9E1FD";
    dynamicImageWindow.style.display = "block";
    productContainer.style.display = "block";
  } else {
    backgroundSubMenus.style.display = "none";
    dynamicImageWindow.style.display = "block";
    productContainer.style.display = "block";
  }
};

// subcategory link&& text click handler
subcategoryLinks.forEach((link) => {
  link.addEventListener("mouseenter", function (event) {
    event.stopPropagation();
    event.preventDefault();
    backgroundSubMenus.style.width = parentHeader[0].clientWidth - 300 + "px";
    backgroundSubMenus.style.height = "565px";
    dynamicImageWindow.style.display = "flex";
    productContainer.style.display = "flex";
  });
});

// function to load product content dynamically
function loadProductContent(content) {
  dynamicImageWindow.innerHTML = content;
  dynamicImageWindow.style.background = "#fff";
  dynamicImageWindow.style.width = "575px";
}

// clos0ing subcategory on hover out (for desktop only)
const closeSubCategoryOnHoverOut = (categoryElement) => {
  if (window.innerWidth <= 1600) return;
  const dataId = categoryElement.getAttribute("data-id");
  const subCategoriesWrapper = document.querySelector(
    `.header__menu-subcategories[data-subcatId="${dataId}"]`
  );

  subCategoriesWrapper.style.maxHeight = "0px";
  backgroundSubMenus.style.width = "364px";
  backgroundSubMenus.style.display = "none";
  dynamicImageWindow.style.display = "none";
  productContainer.style.display = "none";

  const arrow = categoryElement.querySelector(".header__menu-arrow");
  arrow.classList.remove("rotate");
};
