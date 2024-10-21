document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".header__hamburger");
  const categoryButton = document.querySelector(".header__button--corprate");
  const menuButton = document.querySelector(".header__button--menuItem");

  hamburgerButton.addEventListener("click", toggleHamburgerMenu);
  categoryButton.addEventListener("click", toggleCorporateMenu);
  menuButton.addEventListener("click", toggleCategories);
});

// * make one open each time by closing the current opened menu
const closeAllMenus = () => {
  const menus = document.querySelectorAll(
    ".header__menu--corprate, .header__menu--categories , .header__menu--hamburger"
  );

  menus.forEach((menu) => {
    menu.classList.remove("show");
  });

  const buttons = document.querySelectorAll(
    ".header__button--corprate, .header__button--menuItem"
  );
  buttons.forEach((button) => {
    button.classList.remove("active-button");
    button.classList.remove("header--open-menu");
    const arrow = button.querySelector(".header__button-arrow");
    const arrowPath = button.querySelector(".header__button-arrow path");
    const hamburgerIcon = document.querySelector(".header__hamburger-icon");
    if (arrow) {
      arrow.classList.remove("rotate");
      arrowPath.setAttribute("stroke", "black");
      hamburgerIcon.innerHTML = `
      <path d="M3 12H21M3 6H21M9 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
    }
  });
};
// ? closeAllMenus end

// * mobile hamburger menu
const toggleHamburgerMenu = () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const hamburgerIcon = document.querySelector(".header__hamburger-icon");

  if (hamburgerMenu.classList.contains("show")) {
    hamburgerMenu.classList.remove("show");
    hamburgerIcon.innerHTML = `
      <path d="M3 12H21M3 6H21M9 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  } else {
    closeAllMenus();
    hamburgerMenu.classList.add("show");
    hamburgerIcon.innerHTML = `
      <path d="M18 6L6 18M6 6L18 18" stroke="#4138F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
};
// ? mobile hamburger menu

// * toggleCategories
const toggleCategories = () => {
  const categoriesMenu = document.getElementById("categories-menu");
  const menuButton = document.querySelector(".header__button--menuItem");
  const menuArrow = menuButton.querySelector(".header__button-arrow");
  const menuArrowPath = menuButton.querySelector(".header__button-arrow path");

  if (categoriesMenu.classList.contains("show")) {
    categoriesMenu.classList.remove("show");
    menuButton.classList.remove("active-button");
    menuButton.classList.remove("header--open-menu");
    menuArrow.classList.remove("rotate");
    menuArrowPath.setAttribute("stroke", "black");
  } else {
    closeAllMenus();
    categoriesMenu.classList.add("show");
    menuButton.classList.add("active-button");
    menuButton.classList.add("header--open-menu");
    menuArrow.classList.add("rotate");
    menuArrowPath.setAttribute("stroke", "white");
  }
};
// ? toggleCategories

//* corporate menu
const toggleCorporateMenu = () => {
  const corporateMenu = document.getElementById("corprate-menu");
  const categoryButton = document.querySelector(".header__button--corprate");
  const categoryArrow = categoryButton.querySelector(".header__button-arrow");
  const categoryArrowPath = categoryButton.querySelector(
    ".header__button-arrow path"
  );

  if (corporateMenu.classList.contains("show")) {
    corporateMenu.classList.remove("show");
    categoryButton.classList.remove("active-button");
    categoryButton.classList.remove("header--open-menu");
    categoryArrow.classList.remove("rotate");
    categoryArrowPath.setAttribute("stroke", "black");
  } else {
    closeAllMenus();
    corporateMenu.classList.add("show");
    categoryButton.classList.add("active-button");
    categoryButton.classList.add("header--open-menu");
    categoryArrow.classList.add("rotate");
    categoryArrowPath.setAttribute("stroke", "white");
  }
};
//? corporate menu

// * top-middle user connection logic
const newUser = {
  hamburgerShown: "none",
  centeredOrBetween: "center",
  profileLink: "sign-up",
  profileText: "התחברות",
  closeEdgeSpace: "space-around",
};

const connectedUser = {
  hamburgerShown: "flex",
  centeredOrBetween: "space-between",
  profileLink: "user-profile",
  profileText: "איזור אישי",
};

function updateHeader(userData) {
  const header = document.querySelector(".header");
  const hamburgerElement = document.querySelector(".header__hamburger");
  if (header) {
    header.style.justifyContent = userData.closeEdgeSpace;
  }
  if (hamburgerElement) {
    hamburgerElement.style.display = userData.hamburgerShown;
  }

  const topRowElement = document.querySelector(".header__row--top");
  if (topRowElement) {
    topRowElement.style.justifyContent = userData.centeredOrBetween;
  }

  const profileLinkElement = document.querySelector(".header__profile");
  if (profileLinkElement) {
    profileLinkElement.setAttribute("href", `#${userData.profileLink}`);
    const profileTextElement = profileLinkElement.querySelector(
      ".header__profile-text"
    );
    if (profileTextElement) {
      profileTextElement.textContent = userData.profileText;
    }
  }
}
const params = new URLSearchParams(window.location.search);

const isLoggedIn = params.has("LoggedIn");
// console.log("params", params);

// const isLoggedIn = false;
updateHeader(isLoggedIn ? connectedUser : newUser);

var heroswiper = new Swiper(".heroSlider", {
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.02,
      centeredSlides: true,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 5;
var prependNumber = 1;

// * mobile swiper
var mobileSwiper = new Swiper(".mobileSwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



document.addEventListener("DOMContentLoaded", function () {
  // * fav button

  const favIcon = document.getElementById("favIcon");
  const heartPath = document.getElementById("heartPath");

  let isLiked = false;

  favIcon.addEventListener("click", function (e) {
    e.preventDefault();

    isLiked = !isLiked;
    console.log("isLiked", isLiked);

    if (isLiked) {
      heartPath.setAttribute("stroke", "red");
      heartPath.setAttribute("fill", "red");
    } else {
      heartPath.setAttribute("stroke", "black");
      heartPath.setAttribute("fill", "none");
    }
  });

  // ? fav button

  // * counter min max buttons
  const countDigit = document.querySelector(
    ".product__counter--counterWrap--countDigit"
  );
  const addButton = document.querySelector(
    ".product__counter--counterWrap--maxBtn"
  );
  const subtractButton = document.querySelector(
    ".product__counter--counterWrap--minBtn"
  );

  let count = parseInt(countDigit.textContent);

  addButton.addEventListener("click", function () {
    count++;
    updateCounter();
  });

  subtractButton.addEventListener("click", function () {
    if (count > 1) {
      count--;
      updateCounter();
    }
  });

  function updateCounter() {
    countDigit.textContent = count;
  }
  // ? counter min max buttons

  // * add to cart button

  const addToCartBtn = document.getElementById("addToCartBtn");
  const addToCartText = document.querySelector(
    ".product__counter--addToCartText"
  );

  let isAddToCart = false;

  addToCartBtn.addEventListener("click", function (e) {
    e.preventDefault();

    isAddToCart = !isAddToCart;
    console.log("isAddToCart", isAddToCart);

    if (isAddToCart) {
      addToCartText.textContent = "הסר";
    } else {
      addToCartText.textContent = "הוספה";
    }
  });

  // ? add to cart button
});

// todo to check why the mobile menu dosent open
// todo to cancel the mouse leave on the desktop
const categoryItems = document.querySelectorAll(".header__menu-item--category");
const categoryLink = document.querySelectorAll(".category-link");
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
        category.querySelector("a").addEventListener("mouseenter", (e) => {
          // clearTimeout(closeTimeout);
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
          toggleSubCategory(e);
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
    subCategoriesWrapper.style.maxHeight !== "0px" &&
    subCategoriesWrapper.style.maxHeight !== "";

  if (isDesktop) {
    closeAllSubCategories();
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
  subCategoriesWrapper.style.top = "39px";
  subCategoriesWrapper.style.right = "307px";

  arrow.classList.add("rotate");

  if (isDesktop) {
    backgroundSubMenus.style.transition = "max-width 0.3s ease;";
    backgroundSubMenus.style.display = "flex";
    backgroundSubMenus.style.height = "565px";
    backgroundSubMenus.style.width = "386px";
    backgroundSubMenus.style.position = "absolute";
    backgroundSubMenus.style.top = "11px";
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

// subcategory link&& text click handler
subcategoryLinks.forEach((link) => {
  link.addEventListener("mouseenter", function (event) {
    event.stopPropagation();
    event.preventDefault();
    backgroundSubMenus.style.width = parentHeader[0].clientWidth - 300 + "px";
    backgroundSubMenus.style.height = "565px";
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

//# sourceMappingURL=maps/common.js.map
