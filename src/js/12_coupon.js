function loadCouponContentJs() {
  const priceRange = document.getElementById("priceRange");
  console.log("coupon card");
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
}
