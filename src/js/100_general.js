document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get("page");
  if (pageParam === "category") {
    fetch("/category.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadCategoryContentJs();
      })
      .catch((err) => console.error("Error loading content:", err));
  }
  if (pageParam === "coupon") {
    fetch("/coupon.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadCouponContentJs();
      })
      .catch((err) => console.error("Error loading content:", err));
  }
  if (pageParam === "my-account") {
    fetch("/my-account.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadMyAccountContentJs(); // file: 13_my-account.js
      })
      .catch((err) => console.error("Error loading content:", err));
  }
  if (pageParam === "cart") {
    fetch("/cart.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadCartContent(); // file : 14_cart.js
      })
      .catch((err) => console.error("Error loading content:", err));
  }
  if (pageParam === "payment") {
    fetch("/payment.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadPaymentContent(); // file : 15_payment.js
      })
      .catch((err) => console.error("Error loading content:", err));
  }
});
