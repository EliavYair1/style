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
