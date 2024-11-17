const heroContainer = document.querySelector(".hero-container");
heroContainer.hidden = true;
// console.log("heroContainer", (heroContainer.hidden = true));
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

  // * coupon card
  const toggles = document.querySelectorAll(".toggle");
  const infoSections = document.querySelectorAll(".info");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      // Remove active class from all toggles and info sections
      toggles.forEach((t) => t.classList.remove("active"));
      infoSections.forEach((info) => info.classList.remove("active"));

      // Add active class to the clicked toggle and corresponding info section
      toggle.classList.add("active");
      const target = toggle.dataset.toggle;
      document.querySelector(`.info.${target}`).classList.add("active");
    });
  });

  // Initialize by activating the first toggle and info section
  if (toggles.length > 0) {
    toggles[0].click();
  }
}
