// document.addEventListener("DOMContentLoaded", function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const pageParam = urlParams.get("page");
//   const isLoggedIn = urlParams.has("loggedin");

//   // Set the correct layout based on the logged-in status
//   const userData = isLoggedIn ? connectedUser : newUser;
//   updateHeader(userData);

//   if (pageParam === "category") {
//     fetch("/category.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadCategoryContentJs();
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "coupon") {
//     fetch("/coupon.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadCouponContentJs();
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "my-account") {
//     fetch("/my-account.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadMyAccountContentJs(); // file: 13_my-account.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "cart") {
//     fetch("/cart.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadCartContent(); // file : 14_cart.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "payment") {
//     fetch("/payment.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadPaymentContent(); // file : 15_payment.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "thanks") {
//     fetch("/thanks.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadThanksContent(); // file : 16_thanks.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "login") {
//     fetch("/login.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadLoginsContent(); // file : 17_login.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
//   if (pageParam === "registration") {
//     fetch("/registration.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("dynamic-page-content").innerHTML = data;
//         loadRegistrationContent(); // file : 18_registration.js
//       })
//       .catch((err) => console.error("Error loading content:", err));
//   }
// });

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
    loaderContainer.style.display = "none";
    loader.style.display = "none";
    dynamicPageContent.style.display = "block";
  }

  if (!pageParam || pageParam === "category" || pageParam === "homepage") {
    showLoader();
    heroContainer.style.display = "block";
    hideLoader();
  } else {
    heroContainer.style.display = "none";
  }
  function loadPageContent(url, loadScriptCallback) {
    // console.log("url", url);

    showLoader();
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        dynamicPageContent.innerHTML = data;
        dynamicPageContent.style.display = "block";
        setTimeout(() => {
          loadScriptCallback();
        }, 2000);
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
