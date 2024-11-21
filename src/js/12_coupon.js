function loadCouponContentJs() {
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.hidden = true;
  const priceRange = document.getElementById("priceRange");

  if (priceRange) {
    function updateSliderBackground() {
      const max = priceRange.max;
      const value = priceRange.value;

      const percentage = (value / max) * 100;
      priceRange.style.background = `linear-gradient(to left, #2020b3 ${percentage}%, #d1d4fe ${percentage}%)`;
    }

    updateSliderBackground();

    priceRange.addEventListener("input", updateSliderBackground);
  } else {
    console.error("Slider element with ID 'priceRange' not found.");
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
      if (quantity > 0) {
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
