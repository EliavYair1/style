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

  let closeTimeout;
  // * hover/onclick categories for subcategories menu
  const applyHoverOnCategories = () => {
    if (window.innerWidth > 1600) {
      categoryItems.forEach((category) => {
        const subCategoriesWrapper = category.nextElementSibling;

        category.addEventListener("mouseenter", (e) => {
          clearTimeout(closeTimeout);
          toggleSubCategory(e);
        });

        category.addEventListener("mouseleave", () => {
          closeTimeout = setTimeout(() => {
            closeSubCategoryOnHoverOut(category);
          }, 600);
        });

        if (subCategoriesWrapper) {
          subCategoriesWrapper.addEventListener("mouseenter", () => {
            clearTimeout(closeTimeout);
          });

          subCategoriesWrapper.addEventListener("mouseleave", () => {
            closeTimeout = setTimeout(() => {
              closeSubCategoryOnHoverOut(category);
            }, 600);
          });
        }
      });
    } else {
      categoryItems.forEach((category) => {
        category.removeEventListener("mouseenter", toggleSubCategory);
        category.removeEventListener("mouseleave", closeSubCategoryOnHoverOut);
        category.addEventListener("click", toggleSubCategory);
      });
    }
  };

  window.addEventListener("resize", applyHoverOnCategories);

  applyHoverOnCategories();
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

// * subcategories menu
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
  });
  allArrows.forEach((arrow) => {
    arrow.classList.remove("rotate");
  });
  allCategories.forEach((cat) => {
    cat.style.background = "unset";
  });

  // if category is closed, open it
  if (!isCurrentlyOpen) {
    if (
      subCategoriesWrapper &&
      subCategoriesWrapper.classList.contains("header__menu-subcategories")
    ) {
      const arrow = categoryElement.querySelector(".header__menu-arrow");
      subCategoriesWrapper.style.display = "flex";
      subCategoriesWrapper.style.flexDirection = "column";
      subCategoriesWrapper.style.maxHeight =
        subCategoriesWrapper.scrollHeight + "px";
      arrow.classList.add("rotate");
      categoryElement.style.background = "#6327F10F";
    }
  }
};

const closeSubCategoryOnHoverOut = (categoryElement) => {
  const subCategoriesWrapper = categoryElement.nextElementSibling;
  subCategoriesWrapper.style.maxHeight = "0px";

  const arrow = categoryElement.querySelector(".header__menu-arrow");
  arrow.classList.remove("rotate");
  categoryElement.style.background = "unset";
};
// ? subcategories menu

// * top-middle user connection logic
document.addEventListener("DOMContentLoaded", () => {
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

  const isLoggedIn = false;
  updateHeader(isLoggedIn ? connectedUser : newUser);
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

document.addEventListener("DOMContentLoaded", () => {
  const subcategories = {
    1: [
      {
        text: "אופנה",
        href: "/fashion",
        productFile: "../template/features/product.html",
      },
      { text: "ביגוד", href: "/clothing" },
    ],
    2: [
      { text: "Subcategory 2.1", href: "/subcategory2-1" },
      { text: "Subcategory 2.2", href: "/subcategory2-2" },
    ],
    3: [
      { text: "Subcategory 3.1", href: "/subcategory3-1" },
      { text: "Subcategory 3.2", href: "/subcategory3-2" },
    ],
    4: [
      { text: "Subcategory 4.1", href: "/subcategory4-1" },
      { text: "Subcategory 4.2", href: "/subcategory4-2" },
    ],
    5: [
      { text: "Subcategory 5.1", href: "/subcategory5-1" },
      { text: "Subcategory 5.2", href: "/subcategory5-2" },
    ],
    6: [
      { text: "תיירות פנים", href: "/domestic-tourism" },
      { text: "טיסות", href: "/flights" },
      { text: "תיירות חוץ", href: "/international-tourism" },
      { text: "אילת", href: "/eilat" },
    ],
    7: [
      { text: "Subcategory 7.1", href: "/subcategory7-1" },
      { text: "Subcategory 7.2", href: "/subcategory7-2" },
    ],
  };

  async function fetchProductHTML(productFile) {
    try {
      const response = await fetch(productFile);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const productHTML = await response.text();
      return productHTML;
    } catch (error) {
      console.error("Failed to fetch product HTML:", error);
      return "<div>Product not available</div>"; // Fallback if fetch fails
    }
  }

  function generateSubcategoryLinks() {
    const subcategoryContainers = document.querySelectorAll(
      ".header__menu-subcategories"
    );

    subcategoryContainers.forEach(async (container) => {
      const subcatId = container.getAttribute("data-subcatId");

      if (subcategories[subcatId]) {
        const subcategoryArray = subcategories[subcatId];
        container.innerHTML = "";

        subcategoryArray.forEach((subcategory) => {
          const link = document.createElement("a");
          link.href = subcategory.href;
          link.classList.add("header__menu-subcategory");

          const span = document.createElement("span");
          span.classList.add("header__menu-subcategory-text");
          span.textContent = subcategory.text;

          link.appendChild(span);
          container.appendChild(link);

          const product = document.createElement("div");
          product.classList.add("product");
          product.innerHTML = subcategory.product;
          container.appendChild(product);
        });
      }
    });
  }

  generateSubcategoryLinks();

  document.querySelectorAll(".header__menu-item--category").forEach((item) => {
    item.addEventListener("click", function () {
      const subcatId = this.nextElementSibling.getAttribute("data-subcatId");

      const subcategoryDiv = document.querySelector(
        `.header__menu-subcategories[data-subcatId="${subcatId}"]`
      );

      if (!subcategoryDiv) {
        if (subcategoryDiv.style.display === "flex") {
          subcategoryDiv.style.display = "none";
        } else {
          subcategoryDiv.style.display = "flex";
        }
      }
    });
  });
});

//# sourceMappingURL=maps/common.js.map
