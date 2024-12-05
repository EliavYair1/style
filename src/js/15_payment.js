function loadPaymentContent() {
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.hidden = true;
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
  console.log("couponPoints", couponPoints);

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
  // todo to apply validation
  // todo to connect the points and price from the coupon
  //* validation for the payment form

  // document.getElementById("payment-form").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const form = e.target;
  //   let isValid = true;

  //   // Validate card number
  //   const cardNumber = form.querySelector("#card-number");
  //   const cardNumberError = cardNumber.nextElementSibling;
  //   if (!cardNumber.value || cardNumber.value.length < 13 || cardNumber.value.length > 19) {
  //     cardNumberError.textContent = "מספר כרטיס לא תקין";
  //     isValid = false;
  //   } else {
  //     cardNumberError.textContent = "";
  //   }

  //   // Validate expiry year
  //   const expiryYear = form.querySelector("#expiry-year");
  //   const expiryYearError = expiryYear.nextElementSibling;
  //   if (!expiryYear.value) {
  //     expiryYearError.textContent = "יש לבחור שנה";
  //     isValid = false;
  //   } else {
  //     expiryYearError.textContent = "";
  //   }

  //   // Validate expiry month
  //   const expiryMonth = form.querySelector("#expiry-month");
  //   const expiryMonthError = expiryMonth.nextElementSibling;
  //   if (!expiryMonth.value) {
  //     expiryMonthError.textContent = "יש לבחור חודש";
  //     isValid = false;
  //   } else {
  //     expiryMonthError.textContent = "";
  //   }

  //   // Validate id
  //   const id = form.querySelector("#id");
  //   const idError = id.nextElementSibling;
  //   if (!id.value || id.value.length !== 3 || isNaN(id.value)) {
  //     idError.textContent = "id לא תקין";
  //     isValid = false;
  //   } else {
  //     idError.textContent = "";
  //   }
  //   // Validate CVV
  //   const cvv = form.querySelector("#cvv");
  //   const cvvError = cvv.nextElementSibling;
  //   if (!cvv.value || cvv.value.length !== 3 || isNaN(cvv.value)) {
  //     cvvError.textContent = "CVV לא תקין";
  //     isValid = false;
  //   } else {
  //     cvvError.textContent = "";
  //   }

  //   if (isValid) {
  //     alert("הטופס תקין!");
  //     form.submit();
  //   }
  // });

  // ? end
}
