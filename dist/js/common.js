document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".header__hamburger");
  const categoryButton = document.querySelector(".header__button--corprate");
  const menuButton = document.querySelector(".header__button--menuItem");

  hamburgerButton.addEventListener("click", toggleHamburgerMenu);
  categoryButton.addEventListener("click", toggleCorporateMenu);
  menuButton.addEventListener("click", toggleCategories);
});
const productImgContainer = document.querySelector(".product-image-container");
const cartCountElement = document.getElementById("cart-count");
const productCardObj = {};
const voucherCardObj = {};

// cart counter
function updateCartCount(productCardObj, voucherCardObj) {
  let totalCount = 0;
  // *logping over the product that iss added to the cart and injecting the number of items
  for (let itemId in productCardObj) {
    if (productCardObj[itemId].isAddToCart) {
      totalCount += productCardObj[itemId].numberOfItems;
    }
  }
  for (let itemId in voucherCardObj) {
    if (voucherCardObj[itemId].isAddToCart) {
      totalCount += voucherCardObj[itemId].numberOfItems;
    }
  }

  //* show if above 0
  if (totalCount > 0) {
    cartCountElement.textContent = totalCount;
    cartCountElement.style.display = "flex";
  } else {
    cartCountElement.style.display = "none";
  }
  // console.log("productCardObj", productCardObj);
}

// * make one open each time by closing the current opened menu
const closeAllMenus = () => {
  const menus = document.querySelectorAll(
    ".header__menu--corprate, .header__menu--categories , .header__menu--hamburger"
  );

  menus.forEach((menu) => {
    menu.classList.remove("show");
  });

  const buttons = document.querySelectorAll(".header__button--corprate, .header__button--menuItem");
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
  productImgContainer.style.display = "none";
};
// ? toggleCategories

//* corporate menu
const toggleCorporateMenu = () => {
  const corporateMenu = document.getElementById("corprate-menu");
  const categoryButton = document.querySelector(".header__button--corprate");
  const categoryArrow = categoryButton.querySelector(".header__button-arrow");
  const categoryArrowPath = categoryButton.querySelector(".header__button-arrow path");

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
  profileLink: "/?page=registration",
  profileText: "התחברות",
  closeEdgeSpace: "space-around",
};

const connectedUser = {
  hamburgerShown: "flex",
  centeredOrBetween: "space-between",
  profileLink: "/?page=login",
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
    profileLinkElement.setAttribute("href", `${userData.profileLink}`);
    const profileTextElement = profileLinkElement.querySelector(".header__profile-text");
    if (profileTextElement) {
      profileTextElement.textContent = userData.profileText;
    }
  }
}
const params = new URLSearchParams(window.location.search);
const keys = Array.from(params.keys());
const isLoggedIn = keys.some((key) => key.toLowerCase() == "loggedin");
// console.log("params", params);

updateHeader(isLoggedIn ? connectedUser : newUser);

var heroswiper = new Swiper(".heroSlider", {
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    360: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: true,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
initCustomPagination(heroswiper, 1);

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
initCustomPagination(productSwiper, 2);

// * mobile swiper
var mobileSwiper = new Swiper(".mobileSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {},
    1600: {},
  },
  direction: "horizontal",
});
initCustomPagination(mobileSwiper, 3);

var showcaseSwiper = new Swiper(".showcaseSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
initCustomPagination(showcaseSwiper, 8);

var productSwiper = new Swiper(".SaleSwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
initCustomPagination(productSwiper, 4);

// * mobile swiper
var salemobileSwiper = new Swiper(".salemobileSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {},
    1600: {},
  },
  direction: "horizontal",
});
initCustomPagination(salemobileSwiper, 5);

var lifestyleSwiper = new Swiper(".lifestyleSwiper", {
  spaceBetween: 12,
  slidesPerView: 1.5,
  centeredSlides: true,
  initialSlide: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 12,
      initialSlide: 1,
    },
    1200: {
      slidesPerView: 3,
      pagination: false,
      allowSlideNext: false,
      allowSlidePrev: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3,
      pagination: false,
      allowSlideNext: false,
      allowSlidePrev: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },
  // loop: true,
});
initCustomPagination(lifestyleSwiper, 9);

var VoucherSwiper = new Swiper(".VoucherSwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
initCustomPagination(VoucherSwiper, 6);

// * mobile swiper
var vouchermobileSwiper = new Swiper(".vouchermobileSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {},
    1600: {},
  },
  direction: "horizontal",
});
initCustomPagination(vouchermobileSwiper, 7);


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get("page");
  const heroContainer = document.querySelector(".hero-container");
  const loaderContainer = document.getElementById("loader-container");
  const loader = document.querySelector(".loading-overlay");
  const dynamicPageContent = document.getElementById("dynamic-page-content");

  function showLoader() {
    loaderContainer.style.display = "flex";
    loader.style.display = "flex";
    dynamicPageContent.style.display = "none";
  }

  function hideLoader() {
    setTimeout(() => {
      loaderContainer.style.display = "none";
      loader.style.display = "none";
      dynamicPageContent.style.display = "block";
    }, 500);
  }

  if (!pageParam || pageParam === "category" || pageParam === "homepage") {
    showLoader();
    heroContainer.style.display = "block";
    hideLoader();
  } else {
    heroContainer.style.display = "none";
  }
  function loadPageContent(url, loadScriptCallback) {
    showLoader();
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        dynamicPageContent.innerHTML = data;
        dynamicPageContent.style.display = "block";
        loadScriptCallback();
      })
      .catch((err) => console.error("Error loading content:", err))
      .finally(() => {
        hideLoader();
      });
  }
  if (pageParam === "homepage") {
    loadPageContent("/homepage.html", loadCategoryContentJs);
  } else if (pageParam === "category") {
    loadPageContent("/category.html", loadCategoryContentJs);
  } else if (pageParam === "coupon") {
    loadPageContent("/coupon.html", loadCouponContentJs);
  } else if (pageParam === "my-account") {
    loadPageContent("/my-account.html", loadMyAccountContentJs);
  } else if (pageParam === "cart") {
    loadPageContent("/cart.html", loadCartContent);
  } else if (pageParam === "payment") {
    loadPageContent("/payment.html", loadPaymentContent);
  } else if (pageParam === "thanks") {
    loadPageContent("/thanks.html", loadThanksContent);
  } else if (pageParam === "login") {
    loadPageContent("/login.html", loadLoginsContent);
  } else if (pageParam === "registration") {
    loadPageContent("/registration.html", loadRegistrationContent);
  } else {
    hideLoader();
  }
});

function loadCouponContentJs() {
  const priceRange = document.getElementById("priceRange");
  const dynamicPoints = document.querySelector(".dynamic-points");
  const dynamicPrice = document.querySelector(".dynamic-price");
  const couponPrice = localStorage.getItem("couponPrice");
  dynamicPrice.innerText = couponPrice;

  if (priceRange && dynamicPoints) {
    function updateSliderBackgroundAndPoints() {
      const max = parseInt(priceRange.max, 10);
      const value = parseInt(priceRange.value, 10);

      const percentage = (value / max) * 100;
      priceRange.style.background = `linear-gradient(to left, #2020b3 ${percentage}%, #d1d4fe ${percentage}%)`;

      dynamicPoints.innerText = value;
      localStorage.setItem("couponPoints", value);
      console.log("value", value);
    }
    updateSliderBackgroundAndPoints();

    priceRange.addEventListener("input", updateSliderBackgroundAndPoints);
  } else {
    console.error("Slider element or points element not found.");
  }

  // * coupon card
  const toggles = document.querySelectorAll(".toggle");
  const infoSections = document.querySelectorAll(".info");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((t) => t.classList.remove("active"));
      infoSections.forEach((info) => info.classList.remove("active"));

      toggle.classList.add("active");
      const target = toggle.dataset.toggle;
      document.querySelector(`.info.${target}`).classList.add("active");
    });
  });

  // *initialize by activating the first toggle and info section
  if (toggles.length > 0) {
    toggles[0].click();
  }

  //* counter logic
  const quantitySelector = document.querySelector(".quantity-selector");
  if (quantitySelector) {
    const minusButton = quantitySelector.querySelector(".button.minus");
    const plusButton = quantitySelector.querySelector(".button.plus");
    const quantityDisplay = quantitySelector.querySelector(".quantity");

    let quantity = parseInt(quantityDisplay.textContent, 10);

    minusButton.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });

    plusButton.addEventListener("click", () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  } else {
    console.error("Quantity selector element not found.");
  }
}

function loadMyAccountContentJs() {
  // console.log("my acount logic!");

  // * my account toggle
  const boxes = document.querySelectorAll(".box");
  const dynamicContents = document.querySelectorAll(".dynamic-order-content");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      boxes.forEach((b) => b.classList.remove("active"));
      box.classList.add("active");

      updateDynamicContent(box.textContent);
    });
  });

  function updateDynamicContent(selectedText) {
    dynamicContents.forEach((content) => {
      content.style.display = "none";
    });

    if (selectedText.includes("פרטים")) {
      document.getElementById("form-content").style.display = "flex";
      document.getElementById("form-content").style.flexDirection = "column";
    } else if (selectedText.includes("ההזמנות")) {
      document.getElementById("orders-content").style.display = "flex";
    } else if (selectedText.includes("הנקודות")) {
      document.getElementById("points-content").style.display = "flex";
    }
  }
  // ? dynamic content to display

  // * form logic
  // document.getElementById("myForm").addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   // clear previous error messages
  //   document.querySelectorAll(".error-message").forEach(function (errorMsg) {
  //     errorMsg.textContent = "";
  //   });

  //   // validate all inputs
  //   let isValid = true;

  //   // validate Name
  //   const name = document.getElementById("name");
  //   const nameError = document.getElementById("name-error");
  //   const nameGraphic = document.querySelector(".graphic--nao");
  //   if (name.value.trim() === "") {
  //     nameError.textContent = "אנא הזן את שמך הפרטי";
  //     nameGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     nameGraphic.style.stroke = "black";
  //   }

  //   // Validate Family Name
  //   const familyName = document.getElementById("family-name");
  //   const familyNameError = document.getElementById("family-name-error");
  //   const familyNameGraphic = document.querySelectorAll(".graphic--nao")[1];
  //   if (familyName.value.trim() === "") {
  //     familyNameError.textContent = "אנא הזן את שם המשפחה";
  //     familyNameGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     familyNameGraphic.style.stroke = "black";
  //   }

  //   // Validate Email
  //   const email = document.getElementById("email");
  //   const emailError = document.getElementById("email-error");
  //   const emailGraphic = document.querySelectorAll(".graphic--nao")[2];
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email.value.trim())) {
  //     emailError.textContent = "אנא הזן כתובת אימייל חוקית";
  //     emailGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     emailGraphic.style.stroke = "black";
  //   }

  //   // Validate Phone
  //   const phone = document.getElementById("phone");
  //   const phoneError = document.getElementById("phone-error");
  //   const phoneGraphic = document.querySelectorAll(".graphic--nao")[3];
  //   const phoneRegex = /^[0-9]{10}$/;
  //   if (!phoneRegex.test(phone.value.trim())) {
  //     phoneError.textContent = "אנא הזן מספר טלפון תקני";
  //     phoneGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     phoneGraphic.style.stroke = "black";
  //   }

  //   // Validate id
  //   const id = document.getElementById("id");
  //   const idError = document.getElementById("id-error");
  //   const idGraphic = document.querySelectorAll(".graphic--nao")[3];
  //   const idRegex = /^[0-9]{10}$/;
  //   if (!idRegex.test(id.value.trim())) {
  //     idError.textContent = "אנא הזן מספר תעודת זהות";
  //     idGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     idGraphic.style.stroke = "black";
  //   }

  //   if (isValid) {
  //     alert("הטופס הוגש בהצלחה!");
  //   }
  // });

  // * points collapse
  const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

  collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const parent = header.parentElement;
      const icon = header.querySelector(".collapse-icon");
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
        content.style.display = "block";
      }
    });
  });
}

function loadCartContent() {
  const popup = document.getElementById("popup");
  const paymentButton = document.querySelector(".cart-page__payment-button");
  const popupClose = document.getElementById("popupClose");

  paymentButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "flex";
    popup.style.opacity = "1";
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
      popup.style.opacity = "0";
    }
  });

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
    popup.style.opacity = "0";
  });
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      popup.style.display = "none";
      popup.style.opacity = "0";
    }
  });
}

function loadPaymentContent() {
  const couponPoints = localStorage.getItem("couponPoints");
  const pointsElement = document.getElementById("couponPoints");
  const secondPointsElement = document.getElementById("couponPointsSec");
  if (couponPoints) {
    pointsElement.innerText = couponPoints;
    secondPointsElement.innerText = couponPoints;
  } else {
    pointsElement.innerText = 45;
    secondPointsElement.innerText = 45;
  }
  // console.log("couponPoints", couponPoints);

  const currentYear = new Date().getFullYear();
  const yearDropdown = document.getElementById("expiry-year");

  for (let i = 0; i < 10; i++) {
    const year = currentYear + i;
    const option = document.createElement("option");
    option.value = year.toString().slice(-2);
    option.textContent = year;
    yearDropdown.appendChild(option);
  }

  const svgIcon = document.querySelector(".payment__form-icon");
  const popup = document.querySelector(".payment__hovered-popup");
  if (window.innerWidth >= 1200) {
    svgIcon.addEventListener("mouseenter", function () {
      popup.style.display = "block";
    });

    svgIcon.addEventListener("mouseleave", function () {
      popup.style.display = "none";
    });
  } else {
    svgIcon.addEventListener("click", function (event) {
      popup.style.display = "block";
      event.stopPropagation();
      document.addEventListener("click", hidePopupOnClickOutside);
    });

    popup.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    function hidePopupOnClickOutside() {
      popup.style.display = "none";
      document.removeEventListener("click", hidePopupOnClickOutside);
    }
  }
  //* validation for the payment form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    let isValid = true;
    // console.log("form", form);

    // * card number
    const cardNumber = form.querySelector("#card-number");
    const cardNumberError = cardNumber.nextElementSibling;
    if (!cardNumber.value || cardNumber.value.length < 13 || cardNumber.value.length > 19) {
      cardNumberError.textContent = "מספר כרטיס לא תקין";
      isValid = false;
    } else {
      cardNumberError.textContent = "";
    }

    const expiryYear = form.querySelector("#expiry-year");
    const expiryMonth = form.querySelector("#expiry-month");
    const errorWrapper = form.querySelector(".payment__date-wrapper .payment__error");
    if (!expiryYear.value || !expiryMonth.value) {
      errorWrapper.textContent = "יש לבחור שנה וחודש";
      isValid = false;
    } else {
      errorWrapper.textContent = "";
    }

    // * id
    const id = form.querySelector("#id");
    const idError = id.nextElementSibling;
    if (!id.value || id.value.length !== 9 || isNaN(id.value)) {
      idError.textContent = "id לא תקין";
      isValid = false;
    } else {
      idError.textContent = "";
    }

    // * CVV
    const cvv = form.querySelector("#cvv");
    const cvvError = cvv.nextElementSibling;
    if (!cvv.value || cvv.value.length !== 3 || isNaN(cvv.value)) {
      cvvError.textContent = "CVV לא תקין";
      isValid = false;
    } else {
      cvvError.textContent = "";
    }
    const randomTransactionId = Math.floor(1000000 + Math.random() * 9000000).toString();
    console.log("randomTransactionId:", randomTransactionId);

    if (isValid) {
      alert("הטופס תקין!");
      form.submit();
      localStorage.setItem("ordernumber", randomTransactionId);
      window.location.href = "/?page=thanks";
    }
  });

  // ? end
}

function loadThanksContent() {
  const orderNumber = document.getElementById("thanks__orderNum");
  const orderNumberStorage = localStorage.getItem("ordernumber");
  console.log(orderNumberStorage);
  orderNumber.innerHTML = orderNumberStorage ? orderNumberStorage : 4786413;

  console.log("load thanks logic");
}

function loadLoginsContent() {
  console.log("login logic");
}

function loadRegistrationContent() {
  // console.log("registration logic");

  const genders = document.querySelectorAll(".registration-container__gender");
  genders.forEach((gender) => {
    gender.addEventListener("click", () => {
      genders.forEach((g) => g.classList.remove("selected"));
      gender.classList.add("selected");
    });
  });

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = document.querySelectorAll("input");
    let valid = true;

    const formData = {};

    fields.forEach((field) => {
      const errorMsg = document.querySelector(`#${field.id}-error-msg`);

      formData[field.id] = field.value.trim();

      if (!field.value.trim()) {
        valid = false;

        field.classList.add("error");
        field.style.marginBottom = "0";

        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.marginBottom = "20px";
        }
      } else {
        field.classList.remove("error");
        field.style.marginBottom = "20px";

        if (errorMsg) {
          errorMsg.style.display = "none";
        }
      }
    });

    //  gender Picker Validate
    const selectedGender = document.querySelector(".registration-container__gender.selected");
    const genderWrapper = document.querySelector(".registration-container__gender-wrapper");
    const genderError = document.querySelector("#gender-error-msg");
    if (!selectedGender) {
      genderError.style.display = "block";
      genderWrapper.style.marginBottom = "12px";
    } else {
      genderError.style.display = "none";
      genderWrapper.style.marginBottom = "0";

      formData.gender = selectedGender.textContent.trim();
    }

    //  checkboxes Validate
    const termsCheckbox = document.getElementById("reg__checkbox");
    const termsCheckbox2 = document.getElementById("reg__checkbox2");
    const termsError = document.getElementById("reg__checkbox-error-msg");
    if (!termsCheckbox.checked) {
      termsError.style.display = "block";
      termsCheckbox.style.marginBottom = "0";
      termsCheckbox2.style.marginBottom = "0";
    } else {
      termsError.style.display = "none";
      termsCheckbox.style.marginBottom = "0px";
      termsCheckbox2.style.marginBottom = "0px";

      formData.termsCheckbox1 = termsCheckbox.checked;
      formData.termsCheckbox2 = termsCheckbox2.checked;
    }

    console.log("Form Data:", formData);

    if (valid) alert("Form submitted successfully!");
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const infoCards = document.querySelectorAll(".information-card");

  infoCards.forEach(function (infoCard, index) {
    const infoCardCounter = infoCard.querySelector(".information-card__counter");
    const infoCardId = index;

    informationCardObj[infoCardId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };
    // * fav button
    const favIcon = infoCard.querySelector("#favIcon");
    const heartPath = infoCard.querySelector("#heartPath");

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      informationCardObj[infoCardId].liked = !informationCardObj[infoCardId].liked;
      if (informationCardObj[infoCardId].liked) {
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "white");
      }
    });

    // ? fav button

    // * counter min max buttons
    const countDigit = infoCard.querySelector(
      ".information-card__counter--counterWrap--countDigit"
    );
    const addButton = infoCard.querySelector(".information-card__counter--counterWrap--maxBtn");
    const subtractButton = infoCard.querySelector(
      ".information-card__counter--counterWrap--minBtn"
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
      informationCardObj[infoCardId].numberOfItems = count;

      if (informationCardObj[infoCardId].isAddToCart) {
        updateCartCount(productCardObj, informationCardObj);
      }
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = infoCard.querySelector("#addToCartBtn");
    const addToCartText = infoCard.querySelector(".information-card__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();

      informationCardObj[infoCardId].isAddToCart = !informationCardObj[infoCardId].isAddToCart;

      if (informationCardObj[infoCardId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }

      updateCartCount(productCardObj, informationCardObj);
    });
    // ? add to cart button

    // *   show hide  elements
    if (window.innerWidth > 1200) {
      infoCard.addEventListener("mouseover", function () {
        infoCardCounter.style.display = "flex";
      });

      infoCard.addEventListener("mouseout", function () {
        infoCardCounter.style.display = "none";
      });
    }
  });

  // ?  show hide elements
});

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

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  // const cartCountElement = document.getElementById("cart-count");

  products.forEach(function (product, index) {
    const productCounter = product.querySelector(".product__counter");
    const productId = index;

    productCardObj[productId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };

    // * fav button
    const favIcon = product.querySelector("#favIcon");
    const heartPath = product.querySelector("#heartPath");

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      // toggling the button like
      productCardObj[productId].liked = !productCardObj[productId].liked;
      // console.log("Liked status for product", productId, ":", productCardObj[productId].liked);

      if (productCardObj[productId].liked) {
        heartPath.setAttribute("stroke", "#FF324B");
        heartPath.setAttribute("fill", "#FF324B");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "none");
      }
    });
    // ? fav button

    // * counter min max buttons
    const countDigit = product.querySelector(".product__counter--counterWrap--countDigit");
    const addButton = product.querySelector(".product__counter--counterWrap--maxBtn");
    const subtractButton = product.querySelector(".product__counter--counterWrap--minBtn");

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
      // toggling the button of add to counter
      productCardObj[productId].numberOfItems = count;
      if (productCardObj[productId].isAddToCart) {
        updateCartCount(productCardObj, voucherCardObj);
      }
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = product.querySelector("#addToCartBtn");
    const addToCartText = product.querySelector(".product__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // toggling the button of add to cart
      productCardObj[productId].isAddToCart = !productCardObj[productId].isAddToCart;

      if (productCardObj[productId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";

        count = 1;
        countDigit.textContent = count;
        productCardObj[productId].numberOfItems = count;
      }

      updateCartCount(productCardObj, voucherCardObj);
    });

    // ? add to cart button
    if (window.innerWidth > 1200) {
      // console.log("addToCartBtn", addToCartBtn);
      // console.log("addToCartText", addToCartText);

      product.addEventListener("mouseenter", function (e) {
        const parentOffset = addToCartBtn.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        addToCartText.style.top = relY + "px";
        addToCartText.style.left = relX + "px";
      });
      product.addEventListener("mouseover", function () {
        productCounter.style.display = "flex";
      });

      product.addEventListener("mouseout", function () {
        productCounter.style.display = "none";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const salesCards = document.querySelectorAll(".sale-card");
  salesCards.forEach(function (card) {
    // * fav button
    const favIcon = card.querySelector("#favIcon");
    const heartPath = card.querySelector("#heartPath");
    let isLiked = false;

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      isLiked = !isLiked;

      if (isLiked) {
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "white");
      }
    });

    // ? fav button

    // * counter min max buttons
    const countDigit = card.querySelector(".counter--counterWrap--countDigit");
    const addButton = card.querySelector(".counter--counterWrap--maxBtn");
    const subtractButton = card.querySelector(".counter--counterWrap--minBtn");

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
    const addToCartBtn = card.querySelector("#addToCartBtn");
    const addToCartText = card.querySelector(".counter--addToCartText");

    let isAddToCart = false;

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      isAddToCart = !isAddToCart;

      if (isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }
    });
    // ? add to cart button

    // *   show hide  elements
    const saleCardCounters = document.querySelectorAll(".counter");
    // *looping over the counter data attr
    saleCardCounters.forEach((counter) => {
      let isCounterShown = counter.getAttribute("data-isShown") === "true";
      function toggleCounterVisibility() {
        if (isCounterShown) {
          counter.style.display = "flex";
          counter.style.opacity = "1";
          // counter.style.visibility = "visible";
        } else {
          counter.style.display = "none";
          counter.style.opacity = "0";
          // counter.style.visibility = "hidden";
        }
      }
      toggleCounterVisibility();
      counter.addEventListener("click", function () {
        // isCounterShown = !isCounterShown;
        counter.setAttribute("data-isShown", isCounterShown);
        toggleCounterVisibility();
      });
    });
  });

  const imgStamps = document.querySelectorAll(".img-stamp");
  imgStamps.forEach((stamp) => {
    let svgStampShown = stamp.getAttribute("data-isstampshown") === "true";
    stamp.style.display = svgStampShown ? "flex" : "none";
  });

  // ?  show hide elements
});

function initCustomPagination(swiperInstance, swiperId) {
  const paginationElement = document.querySelector(
    `.pagination-swiper-location[data-swiperId="${swiperId}"]`
  );

  const activeEl = paginationElement.querySelector(".pagination-swiper-current");
  const lengthElement = paginationElement.querySelector(".pagination-swiper-length");

  if (!paginationElement) {
    console.error(`Pagination element not found for swiperId: ${swiperId}`);
    return;
  }

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

const categoryItems = document.querySelectorAll(".header__menu-item--category");
const categoryLink = document.querySelectorAll(".category-link");
const categoriesMenu = document.getElementById("categories-menu");
const parentHeader = document.querySelectorAll(".header");
const subcategoryLinks = document.querySelectorAll(".header__menu-subcategory-link");
const dynamicImageWindow = document.querySelector(".image-window");
const productContainer = document.querySelector(".product");
const backgroundSubMenus = document.querySelector(".product-image-container");
const categoriesContainer = document.querySelector(".header__menu--categories");
const isBiggerThenLaptop = window.innerWidth >= 1200;
const isDesktop = window.innerWidth >= 1600;

document.addEventListener("DOMContentLoaded", () => {
  const applyHoverOnCategories = () => {
    const screenWidth = window.innerWidth;
    // const isBiggerThenLaptop = screenWidth >= 1200 && screenWidth < 1600;
    const isDesktop = screenWidth >= 1600;
    if (isDesktop) {
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
          if (window.innerWidth >= 1200) {
            toggleSubCategory(e);
          }
        });

        //
        const aLink = category.querySelector(".category-link");
        aLink.addEventListener("click", function (event) {
          const arrow = this.querySelector(".header__menu-arrow");

          if (window.innerWidth < 1200) {
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
  const elementTarget = e.currentTarget.closest(".header__menu-item--category");
  const dataId = elementTarget.getAttribute("data-id");
  const subCategoriesWrapper = document.querySelector(
    `.header__menu-subcategories[data-subcatid="${dataId}"]`
  );

  const isCurrentlyOpen =
    subCategoriesWrapper.style.maxHeight !== "0px" && subCategoriesWrapper.style.maxHeight !== "";

  if (isBiggerThenLaptop) {
    closeAllSubCategories();
  }

  if (!isCurrentlyOpen) {
    if (isBiggerThenLaptop) {
      openSubCategory(subCategoriesWrapper, isBiggerThenLaptop);
    } else {
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
const openSubCategory = (subCategoriesWrapper, isBiggerThenLaptop) => {
  // const arrow = elementTarget.querySelector(".header__menu-arrow");
  subCategoriesWrapper.style.display = "flex";
  subCategoriesWrapper.style.flexDirection = "column";
  subCategoriesWrapper.style.maxHeight = "100vh";
  subCategoriesWrapper.style.top = "39px";
  subCategoriesWrapper.style.right = "307px";

  // arrow.classList.add("rotate");
  // console.log("isBiggerThenLaptop", isBiggerThenLaptop);
  if (isBiggerThenLaptop) {
    backgroundSubMenus.style.transition = "max-width 0.3s ease;";
    backgroundSubMenus.style.display = "flex";
    backgroundSubMenus.style.height = "565px";
    backgroundSubMenus.style.width = parentHeader[0].clientWidth - 300 + "px";
    backgroundSubMenus.style.position = "absolute";
    backgroundSubMenus.style.top = "178px";
    backgroundSubMenus.style.zIndex = 10;
    backgroundSubMenus.style.right = "unset";
    backgroundSubMenus.style.left = isDesktop ? "0" : "calc(50% - 575px)";
    backgroundSubMenus.style.justifyContent = "flex-end";
    backgroundSubMenus.style.flexDirection = "row";
    backgroundSubMenus.style.boxShadow = "0px 20px 26px 0px rgba(0, 0, 0, 0.15)";
    backgroundSubMenus.style.borderTop = " 2px solid #E9E1FD";
    dynamicImageWindow.style.display = "block";
    dynamicImageWindow.style.width = isDesktop ? "575px" : "458px";
    productContainer.style.display = isDesktop ? "block" : "none";
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
    productContainer.style.display = isDesktop ? "flex" : "none";
  });
});

// function to load product content dynamically
function loadProductContent(content) {
  dynamicImageWindow.innerHTML = content;
  dynamicImageWindow.style.background = "#fff";
  dynamicImageWindow.style.width = "575px";
  // console.log("width:", dynamicImageWindow.style.width);
}

// clos0ing subcategory on hover out (for desktop only)
const closeSubCategoryOnHoverOut = (categoryElement) => {
  if (isBiggerThenLaptop) return;
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

document.addEventListener("DOMContentLoaded", function () {
  const vouchers = document.querySelectorAll(".voucher-card");

  vouchers.forEach(function (voucher, index) {
    const voucherCounter = voucher.querySelector(".voucher-card__counter");
    const voucherId = index;

    voucherCardObj[voucherId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };
    // * fav button
    const favIcon = voucher.querySelector("#favIcon");
    const heartPath = voucher.querySelector("#heartPath");

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      voucherCardObj[voucherId].liked = !voucherCardObj[voucherId].liked;
      if (voucherCardObj[voucherId].liked) {
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "white");
      }
    });

    // ? fav button

    // * counter min max buttons
    const countDigit = voucher.querySelector(".voucher-card__counter--counterWrap--countDigit");
    const addButton = voucher.querySelector(".voucher-card__counter--counterWrap--maxBtn");
    const subtractButton = voucher.querySelector(".voucher-card__counter--counterWrap--minBtn");

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
      voucherCardObj[voucherId].numberOfItems = count;

      if (voucherCardObj[voucherId].isAddToCart) {
        updateCartCount(productCardObj, voucherCardObj);
      }
      // console.log("voucher Card Object:", voucherCardObj);
      // console.log("Product Card Object:", productCardObj);
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = voucher.querySelector("#addToCartBtn");
    const addToCartText = voucher.querySelector(".voucher-card__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();

      voucherCardObj[voucherId].isAddToCart = !voucherCardObj[voucherId].isAddToCart;

      if (voucherCardObj[voucherId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }

      updateCartCount(productCardObj, voucherCardObj);
    });
    // ? add to cart button

    // *   show hide  elements
    if (window.innerWidth > 1600) {
      voucher.addEventListener("mouseover", function () {
        voucherCounter.style.display = "flex";
      });

      voucher.addEventListener("mouseout", function () {
        voucherCounter.style.display = "none";
      });
    }
  });

  // ?  show hide elements
});

//# sourceMappingURL=maps/common.js.map
