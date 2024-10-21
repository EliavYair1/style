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
