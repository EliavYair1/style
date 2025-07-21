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

  // * coupon card - responsive toggle behavior
  const couponInfoCard = document.querySelector(".coupon-info-card");
  const originalTogglesContainer = document.querySelector(".toggles");
  const originalInfoContainer = document.querySelector(".info-container");

  if (!couponInfoCard || !originalTogglesContainer || !originalInfoContainer) {
    console.error("Required elements for coupon info card not found");
    return;
  }

  function isDesktop() {
    return window.innerWidth >= 1200;
  }

  function createAccordionStructure() {
    // Create accordion wrapper
    const accordionWrapper = document.createElement("div");
    accordionWrapper.className = "accordion-wrapper";

    // Get toggle and info elements
    const toggles = originalTogglesContainer.querySelectorAll(".toggle");
    const infos = originalInfoContainer.querySelectorAll(".info");

    toggles.forEach((toggle) => {
      // Create accordion item
      const accordionItem = document.createElement("div");
      accordionItem.className = "accordion-item";

      // Clone toggle and find corresponding info
      const toggleClone = toggle.cloneNode(true);
      const target = toggle.dataset.toggle;
      const infoClone = originalInfoContainer.querySelector(`.info.${target}`).cloneNode(true);

      // Add to accordion item
      accordionItem.appendChild(toggleClone);
      accordionItem.appendChild(infoClone);
      accordionWrapper.appendChild(accordionItem);
    });

    return accordionWrapper;
  }

  function setupLayout() {
    // Remove existing accordion if present
    const existingAccordion = couponInfoCard.querySelector(".accordion-wrapper");
    if (existingAccordion) {
      existingAccordion.remove();
    }

    if (!isDesktop()) {
      // Mobile: create and insert accordion structure
      const accordionWrapper = createAccordionStructure();
      couponInfoCard.insertBefore(accordionWrapper, originalTogglesContainer);
    }

    setupToggleBehavior();
  }

  function setupToggleBehavior() {
    let toggles, infos;

    if (isDesktop()) {
      toggles = originalTogglesContainer.querySelectorAll(".toggle");
      infos = originalInfoContainer.querySelectorAll(".info");
    } else {
      toggles = document.querySelectorAll(".accordion-wrapper .toggle");
      infos = document.querySelectorAll(".accordion-wrapper .info");
    }

    // Remove existing listeners by cloning nodes
    toggles.forEach((toggle) => {
      const newToggle = toggle.cloneNode(true);
      toggle.parentNode.replaceChild(newToggle, toggle);
    });

    // Re-get updated references
    if (isDesktop()) {
      toggles = originalTogglesContainer.querySelectorAll(".toggle");
      infos = originalInfoContainer.querySelectorAll(".info");
    } else {
      toggles = document.querySelectorAll(".accordion-wrapper .toggle");
      infos = document.querySelectorAll(".accordion-wrapper .info");
    }

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const target = toggle.dataset.toggle;
        let targetInfo;

        if (isDesktop()) {
          targetInfo = originalInfoContainer.querySelector(`.info.${target}`);
        } else {
          targetInfo = toggle.parentNode.querySelector(`.info.${target}`);
        }

        if (isDesktop()) {
          // Desktop behavior - tabs (only one active at a time)
          toggles.forEach((t) => t.classList.remove("active"));
          infos.forEach((info) => info.classList.remove("active"));

          toggle.classList.add("active");
          targetInfo.classList.add("active");
        } else {
          // Mobile behavior - accordion (toggle individual sections)
          const isCurrentlyActive = toggle.classList.contains("active");

          if (isCurrentlyActive) {
            toggle.classList.remove("active");
            targetInfo.classList.remove("active");
          } else {
            toggle.classList.add("active");
            targetInfo.classList.add("active");
          }
        }
      });
    });

    // Initialize based on screen size
    if (isDesktop()) {
      // Desktop: activate first toggle by default
      if (toggles.length > 0) {
        // Clear all first
        toggles.forEach((t) => t.classList.remove("active"));
        infos.forEach((info) => info.classList.remove("active"));
        // Activate first
        toggles[0].click();
      }
    } else {
      // Mobile: close all sections by default
      toggles.forEach((t) => t.classList.remove("active"));
      infos.forEach((info) => info.classList.remove("active"));
    }
  }

  // Initial setup
  setupLayout();

  // Re-setup on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setupLayout();
    }, 250);
  });

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

  // * Contact form validation
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fields = document.querySelectorAll(
        ".contact-form input, .contact-form select, .contact-form textarea"
      );
      let valid = true;
      const formData = {};

      // Validate all form fields
      fields.forEach((field) => {
        const errorMsg = document.querySelector(`#${field.id}-error-msg`);
        let fieldValue = field.value.trim();
        let isFieldValid = true;

        // Store field value
        formData[field.id] = fieldValue;

        // Check if field is empty
        if (!fieldValue) {
          isFieldValid = false;
        }

        if (field.type === "email" && fieldValue) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(fieldValue)) {
            isFieldValid = false;
          }
        }

        if (field.type === "tel" && fieldValue) {
          const phoneRegex = /^[\d\-\+\(\)\s]+$/;
          if (!phoneRegex.test(fieldValue) || fieldValue.length < 9) {
            isFieldValid = false;
          }
        }

        if (!isFieldValid) {
          valid = false;
          field.classList.add("error");
          field.style.marginBottom = "0";

          if (errorMsg) {
            errorMsg.style.display = "block";
            // Use responsive margin based on screen size
            const isDesktop = window.innerWidth >= 1200;
            errorMsg.style.marginBottom = isDesktop ? "20px" : "16px";
          }
        } else {
          field.classList.remove("error");
          // Use responsive margin based on screen size
          const isDesktop = window.innerWidth >= 1200;
          field.style.marginBottom = isDesktop ? "20px" : "16px";

          if (errorMsg) {
            errorMsg.style.display = "none";
          }
        }
      });

      console.log("Contact Form Data:", formData);

      if (valid) {
        alert("הטופס נשלח בהצלחה!");
        // Here you would typically send the data to your server
        // contactForm.reset(); // Uncomment to reset form after successful submission
      }
    });
  } else {
    console.error("Contact form not found.");
  }
}
