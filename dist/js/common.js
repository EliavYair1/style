document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".header__hamburger");
  const categoryButton = document.querySelector(".header__button--corprate");
  const menuButton = document.querySelector(".header__button--menuItem");
  const categoryItems = document.querySelectorAll(
    ".header__menu-item--category"
  );
  hamburgerButton.addEventListener("click", toggleHamburgerMenu);
  categoryButton.addEventListener("click", toggleCorporateMenu);
  menuButton.addEventListener("click", toggleCategories);
  categoryItems.forEach((category) => {
    category.addEventListener("click", toggleSubCategory);
  });
});

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
// mobile hamburger menu
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
//  toggleCategories
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

// subcategories menu
const toggleSubCategory = (event) => {
  const categoryElement = event.currentTarget;

  const subCategoriesWrapper = categoryElement.nextElementSibling;
  // make only one subcategory open and reset status
  const isCurrentlyOpen =
    subCategoriesWrapper.style.maxHeight !== "0px" &&
    subCategoriesWrapper.style.maxHeight !== "";

  const allSubcategories = document.querySelectorAll(
    ".header__menu-subcategories"
  );
  const allArrows = document.querySelectorAll(".header__menu-arrow");

  const allCategories = document.querySelectorAll(
    ".header__menu-item--category"
  );
  allSubcategories.forEach((subCategory) => {
    subCategory.style.maxHeight = "0px";
    subCategory.style.height = "0px";
    subCategory.style.display = "none";
  });
  allArrows.forEach((arrow) => {
    arrow.classList.remove("rotate");
  });
  allCategories.forEach((cat) => {
    cat.style.background = "unset";
  });

  // if category is close do then...
  if (!isCurrentlyOpen) {
    if (
      subCategoriesWrapper &&
      subCategoriesWrapper.classList.contains("header__menu-subcategories")
    ) {
      const arrow = categoryElement.querySelector(".header__menu-arrow");
      subCategoriesWrapper.style.height = "auto";
      subCategoriesWrapper.style.maxHeight = "100%";
      subCategoriesWrapper.style.display = "flex";
      subCategoriesWrapper.style.flexDirection = "column";
      arrow.classList.add("rotate");
      categoryElement.style.background = "#6327F10F";
    }
  }
};



//# sourceMappingURL=maps/common.js.map
