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




// // * option #2
// const categories = [
//   {
//     id: 1,
//     name: "צרכנות",
//     icon: "../img/toggle-menus/categories-menu/store.svg",
//     subcategories: [
//       { name: "אופנה", link: "/fashion" },
//       { name: "ביגוד", link: "/clothing" },
//       { name: "נעליים", link: "/shoes" },
//       { name: "אביזרים", link: "/accessories" },
//     ],
//   },
//   {
//     id: 2,
//     name: "עד הבית online",
//     icon: "../img/toggle-menus/categories-menu/ups.svg",
//     subcategories: [
//       { name: "משלוחים מהירים", link: "/fast-delivery" },
//       { name: "שירותי קניות אונליין", link: "/online-shopping" },
//       { name: "סופרמרקט אונליין", link: "/supermarket-online" },
//       { name: "מוצרי חשמל", link: "/electronics" },
//     ],
//   },
//   {
//     id: 3,
//     name: "אורח חיים בריא",
//     icon: "../img/toggle-menus/categories-menu/prey-heart.svg",
//     subcategories: [
//       { name: "תזונה נכונה", link: "/healthy-eating" },
//       { name: "כושר גופני", link: "/fitness" },
//       { name: "מוצרי טבע", link: "/natural-products" },
//       { name: "יוגה ומדיטציה", link: "/yoga-meditation" },
//     ],
//   },
//   {
//     id: 4,
//     name: "טכנולוגיה",
//     icon: "../img/toggle-menus/categories-menu/tech.svg",
//     subcategories: [
//       { name: "גאדג'טים", link: "/gadgets" },
//       { name: "מחשבים", link: "/computers" },
//       { name: "מובייל", link: "/mobile" },
//       { name: "משחקים דיגיטליים", link: "/digital-games" },
//     ],
//   },
//   {
//     id: 5,
//     name: "רכב",
//     icon: "../img/toggle-menus/categories-menu/car.svg",
//     subcategories: [
//       { name: "רכב חדש", link: "/new-cars" },
//       { name: "אביזרים לרכב", link: "/car-accessories" },
//       { name: "שירותי תיקון", link: "/car-repair" },
//       { name: "ביטוח רכב", link: "/car-insurance" },
//     ],
//   },
//   {
//     id: 6,
//     name: "טיולים ונופש",
//     icon: "../img/toggle-menus/categories-menu/travel.svg",
//     subcategories: [
//       { name: "מלונות", link: "/hotels" },
//       { name: "טיסות", link: "/flights" },
//       { name: "אתרי נופש", link: "/resorts" },
//       { name: "טיולים מאורגנים", link: "/guided-tours" },
//     ],
//   },
//   {
//     id: 7,
//     name: "מוצרים לבית",
//     icon: "../img/toggle-menus/categories-menu/home.svg",
//     subcategories: [
//       { name: "רהיטים", link: "/furniture" },
//       { name: "מוצרי חשמל לבית", link: "/home-appliances" },
//       { name: "כלי מטבח", link: "/kitchenware" },
//       { name: "דקורציה", link: "/decoration" },
//     ],
//   },
//   {
//     id: 8,
//     name: "פנאי ובידור",
//     icon: "../img/toggle-menus/categories-menu/entertainment.svg",
//     subcategories: [
//       { name: "ספרים", link: "/books" },
//       { name: "סרטים", link: "/movies" },
//       { name: "הופעות ואירועים", link: "/events" },
//       { name: "מוזיקה", link: "/music" },
//     ],
//   },
// ];

// function createMenu() {
//   const menu = document.getElementById("categories-menu");

//   categories.forEach((category) => {
//     // Create category item
//     const categoryItem = document.createElement("li");
//     categoryItem.classList.add(
//       "header__menu-item",
//       "header__menu-item--category"
//     );
//     categoryItem.dataset.id = category.id;

//     // Create category link
//     const categoryLink = document.createElement("a");
//     categoryLink.classList.add("category-link");

//     const imageText = document.createElement("div");
//     imageText.classList.add("image-text");

//     const icon = document.createElement("img");
//     icon.src = category.icon;
//     icon.alt = "";

//     const spanText = document.createElement("span");
//     spanText.textContent = category.name;

//     imageText.appendChild(icon);
//     imageText.appendChild(spanText);

//     const arrowSpan = document.createElement("span");
//     arrowSpan.classList.add("header__menu-arrow");
//     arrowSpan.innerHTML = `
//         <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M13.0714 5.85742L7.92855 11.0003L13.0714 16.1431" stroke="black" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//       `;

//     categoryLink.appendChild(imageText);
//     categoryLink.appendChild(arrowSpan);
//     categoryItem.appendChild(categoryLink);

//     // Create subcategories
//     const subcategoryList = document.createElement("ul");
//     subcategoryList.classList.add("header__menu-subcategories");
//     subcategoryList.dataset.subcatId = category.id;
//     subcategoryList.style.display = "none";

//     category.subcategories.forEach((subcategory) => {
//       const subcategoryItem = document.createElement("li");
//       subcategoryItem.classList.add("header__menu-subcategory");

//       const subcategoryLink = document.createElement("a");
//       subcategoryLink.classList.add("header__menu-subcategory-link");
//       subcategoryLink.href = subcategory.link;

//       const subcategoryText = document.createElement("span");
//       subcategoryText.classList.add("header__menu-subcategory-text");
//       subcategoryText.textContent = subcategory.name;

//       subcategoryLink.appendChild(subcategoryText);
//       subcategoryItem.appendChild(subcategoryLink);
//       subcategoryList.appendChild(subcategoryItem);
//     });

//     categoryItem.appendChild(subcategoryList);
//     menu.appendChild(categoryItem);
//     menu.appendChild(document.createElement("hr")).classList.add("break-line");
//   });
// }

// // Run the function when the DOM is ready
// document.addEventListener("DOMContentLoaded", createMenu);

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

// Function to toggle subcategory on click/hover
// const toggleSubCategory = (e) => {
//   const isDesktop = window.innerWidth >= 1600;

//   const elementTarget = e.currentTarget.closest(".header__menu-item--category");
//   const dataId = elementTarget.getAttribute("data-id");
//   const subCategoriesWrapper = document.querySelector(
//     `.header__menu-subcategories[data-subcatId="${dataId}"]`
//   );
//   // console.log("categoryItems", categoryItems[0].clientHeight);

//   const isCurrentlyOpen =
//     subCategoriesWrapper.style.maxHeight !== "0px" &&
//     subCategoriesWrapper.style.maxHeight !== "";

//     if (isDesktop) {
//     closeAllSubCategories();
//   }

//   if (!isDesktop) {
//     if (!isCurrentlyOpen) {
//       closeAllSubCategories(subCategoriesWrapper);
//     }
//   }

//   if (!isCurrentlyOpen) {
//     openSubCategory(elementTarget, subCategoriesWrapper, isDesktop);
//   }
// };
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

  // subCategoriesWrapper.style.height = categoriesMenu.clientHeight;
  // console.log("subCategoriesWrapper height:", categoriesMenu.clientHeight);

  arrow.classList.add("rotate");

  if (isDesktop) {
    backgroundSubMenus.style.transition = "max-width 0.3s ease;";
    // backgroundSubMenus.style.display = "none";
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
// console.log("subcategoryLinks", subcategoryLinks);

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

//# sourceMappingURL=maps/common.js.map
