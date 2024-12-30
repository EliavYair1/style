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
