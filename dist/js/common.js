document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".header__hamburger");
  const categoryButton = document.querySelector(".header__button--category");
  const menuButton = document.querySelector(".header__button--menuItem");
  const categoryItems = document.querySelectorAll(
    ".header__menu-item--category"
  );

  hamburgerButton.addEventListener("click", toggleHamburgerMenu);
  categoryButton.addEventListener("click", toggleCategories);
  menuButton.addEventListener("click", toggleMenu);
  categoryItems.forEach((category) => {
    category.addEventListener("click", toggleSubCategory);
  });
});

const closeAllMenus = () => {
  const menus = document.querySelectorAll(
    ".header__menu--categories, .header__menu--hamburger"
  );
  menus.forEach((menu) => {
    menu.classList.remove("show");
  });

  const buttons = document.querySelectorAll(
    ".header__button--category, .header__button--menuItem"
  );
  buttons.forEach((button) => {
    button.classList.remove("header--open-menu");
    const arrow = button.querySelector(".header__button-arrow");
    if (arrow) {
      arrow.classList.remove("rotate");
    }
  });
};

const toggleHamburgerMenu = () => {
  const hamburgerMenu = document.getElementById("categories-menu");
  const hamburgerIcon = document.querySelector(".header__hamburger-icon");

  if (hamburgerMenu.classList.contains("show")) {
    hamburgerMenu.classList.remove("show");
    hamburgerIcon.innerHTML = `
      <path d="M3 12H21M3 6H21M9 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  } else {
    closeAllMenus(); // Close other menus
    hamburgerMenu.classList.add("show");
    hamburgerIcon.innerHTML = `
      <path d="M18 6L6 18M6 6L18 18" stroke="#4138F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
};

const toggleMenu = () => {
  const menuButton = document.querySelector(".header__button--menuItem");
  const menuArrow = menuButton.querySelector(".header__button-arrow");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  if (
    menuButton.classList.contains("header--open-menu") &&
    hamburgerMenu.classList.contains("show")
  ) {
    menuButton.classList.remove("header--open-menu");
    menuArrow.classList.remove("rotate");
    hamburgerMenu.classList.remove("show");
  } else {
    closeAllMenus(); // Close other menus
    menuButton.classList.add("header--open-menu");
    menuArrow.classList.add("rotate");
    hamburgerMenu.classList.add("show");
  }
};

const toggleCategories = () => {
  const categoriesMenu = document.getElementById("categories-menu");
  const categoryButton = document.querySelector(".header__button--category");
  const categoryArrow = categoryButton.querySelector(".header__button-arrow");

  if (categoriesMenu.classList.contains("show")) {
    categoriesMenu.classList.remove("show");
    categoryButton.classList.remove("header--open-menu");
    categoryArrow.classList.remove("rotate");
  } else {
    closeAllMenus(); // Close other menus
    categoriesMenu.classList.add("show");
    categoryButton.classList.add("header--open-menu");
    categoryArrow.classList.add("rotate");
  }
};

const toggleSubCategory = (event) => {
  const categoryElement = event.currentTarget;
  const subCategories = categoryElement.nextElementSibling;
  const arrow = categoryElement.querySelector(".header__menu-arrow");

  if (subCategories.style.display === "block") {
    subCategories.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    subCategories.style.display = "block";
    arrow.classList.add("rotate");
  }
};



//# sourceMappingURL=maps/common.js.map
