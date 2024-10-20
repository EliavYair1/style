// todo to check why the mobile menu dosent open
// todo to cancel the mouse leave on the desktop
const categoryItems = document.querySelectorAll(".header__menu-item--category");
const categoriesMenu = document.getElementById("categories-menu");
const parentHeader = document.querySelectorAll(".header");
const subcategoryLinks = document.querySelectorAll(
  ".header__menu-subcategory-link"
);
const dynamicImageWindow = document.querySelector(".image-window");
const productContainer = document.querySelector(".product");
const backgroundSubMenus = document.querySelector(".product-image-container");
// let closeTimeout;

document.addEventListener("DOMContentLoaded", () => {
  const applyHoverOnCategories = () => {
    if (window.innerWidth > 1600) {
      categoryItems.forEach((category) => {
        // const subCategoriesWrapper = category.nextElementSibling;
        category.querySelector("a").addEventListener("mouseenter", (e) => {
          // clearTimeout(closeTimeout);
          toggleSubCategory(e, true);
        });

        // category.addEventListener("mouseleave", () => {
        //   closeTimeout = setTimeout(() => {
        //     closeSubCategoryOnHoverOut(category);
        //   }, 600);
        // });

        // if (subCategoriesWrapper) {
        //   subCategoriesWrapper.addEventListener("mouseenter", () => {
        //     clearTimeout(closeTimeout);
        //   });

        //   subCategoriesWrapper.addEventListener("mouseleave", () => {
        //     closeTimeout = setTimeout(() => {
        //       closeSubCategoryOnHoverOut(category);
        //     }, 600);
        //   });
        // }
      });
    } else {
      categoryItems.forEach((category) => {
        category.removeEventListener("mouseenter", toggleSubCategory);
        category.removeEventListener("mouseleave", closeSubCategoryOnHoverOut);
        category.addEventListener("click", toggleSubCategory);
      });
    }
  };

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(applyHoverOnCategories, 200);
  });

  applyHoverOnCategories();
});

// Function to toggle subcategory on click/hover
const toggleSubCategory = (e) => {
  const isDesktop = window.innerWidth >= 1600;

  const elementTarget = e.currentTarget.closest(".header__menu-item--category");
  const dataId = elementTarget.getAttribute("data-id");
  const subCategoriesWrapper = document.querySelector(
    `.header__menu-subcategories[data-subcatId="${dataId}"]`
  );
  // console.log("categoryItems", categoryItems[0].clientHeight);

  const isCurrentlyOpen =
    subCategoriesWrapper.style.maxHeight !== "0px" &&
    subCategoriesWrapper.style.maxHeight !== "";

  if (isDesktop) {
    closeAllSubCategories();
  }

  if (!isDesktop) {
    if (!isCurrentlyOpen) {
      closeAllSubCategories(subCategoriesWrapper);
    }
  }

  if (!isCurrentlyOpen) {
    openSubCategory(elementTarget, subCategoriesWrapper, isDesktop);
  }
};

// Helper function to close all subcategories and reset UI elements
const closeAllSubCategories = (excludeTarget = null) => {
  const allSubcategories = document.querySelectorAll(
    ".header__menu-subcategories"
  );

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
const openSubCategory = (elementTarget, subCategoriesWrapper, isDesktop) => {
  const arrow = elementTarget.querySelector(".header__menu-arrow");
  subCategoriesWrapper.style.display = "flex";
  subCategoriesWrapper.style.flexDirection = "column";
  subCategoriesWrapper.style.maxHeight = "100vh";
  subCategoriesWrapper.style.top = "0";
  subCategoriesWrapper.style.right = "307px";

  // subCategoriesWrapper.style.height = categoriesMenu.clientHeight;
  // console.log("subCategoriesWrapper height:", categoriesMenu.clientHeight);

  arrow.classList.add("rotate");

  if (isDesktop) {
    backgroundSubMenus.style.transition = "max-width 0.3s ease;";
    // backgroundSubMenus.style.display = "none";
    backgroundSubMenus.style.display = "flex";
    backgroundSubMenus.style.height = "636px";
    backgroundSubMenus.style.width = "386px";
    backgroundSubMenus.style.position = "absolute";
    backgroundSubMenus.style.top = "-34px";
    backgroundSubMenus.style.zIndex = -1;
    backgroundSubMenus.style.right = "300px";
    dynamicImageWindow.style.display = "none";
    productContainer.style.display = "none";
  } else {
    backgroundSubMenus.style.display = "none";
    dynamicImageWindow.style.display = "block";
    productContainer.style.display = "block";
  }
};
// console.log("subcategoryLinks", subcategoryLinks);

// subcategory link&& text click handler
subcategoryLinks.forEach((link) => {
  link.addEventListener("mouseenter", function (event) {
    event.preventDefault();
    backgroundSubMenus.style.width = parentHeader[0].clientWidth - 300 + "px";
    backgroundSubMenus.style.height = "634px";
    dynamicImageWindow.style.display = "flex";
    productContainer.style.display = "flex";

    const subcategoryText = link.querySelector(
      ".header__menu-subcategory-text"
    ).textContent;
    const linkRef = link.getAttribute("href");
    const parentCategoryItem = link.closest(".header__menu-item--category");
    const categoryText =
      parentCategoryItem.querySelector(".image-text span").textContent;
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
  // console.log("subCategoriesWrapper", subCategoriesWrapper);

  subCategoriesWrapper.style.maxHeight = "0px";
  backgroundSubMenus.style.width = "364px";
  backgroundSubMenus.style.display = "none";
  dynamicImageWindow.style.display = "none";
  productContainer.style.display = "none";

  const arrow = categoryElement.querySelector(".header__menu-arrow");
  arrow.classList.remove("rotate");
};

// closing subcategory when clicking outside
document.addEventListener("mouseleave", (e) => {
  if (!e.target.closest(".header__menu--categories")) {
    closeAllSubCategories();
  }
});
