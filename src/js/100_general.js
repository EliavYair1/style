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
  if (pageParam === "my-orders") {
    fetch("/my-orders.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
        loadMyOrdersContentJs();
      })
      .catch((err) => console.error("Error loading content:", err));
  }
  if (pageParam === "points") {
    fetch("/points.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("dynamic-page-content").innerHTML = data;
      })
      .catch((err) => console.error("Error loading content:", err));
  }
});
