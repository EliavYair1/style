function loadPaymentContent() {
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
  // console.log("couponPoints", couponPoints);

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
  //* validation for the payment form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    let isValid = true;
    // console.log("form", form);

    // * card number
    const cardNumber = form.querySelector("#card-number");
    const cardNumberError = cardNumber.nextElementSibling;
    if (!cardNumber.value || cardNumber.value.length < 13 || cardNumber.value.length > 19) {
      cardNumberError.textContent = "מספר כרטיס לא תקין";
      isValid = false;
    } else {
      cardNumberError.textContent = "";
    }

    const expiryYear = form.querySelector("#expiry-year");
    const expiryMonth = form.querySelector("#expiry-month");
    const errorWrapper = form.querySelector(".payment__date-wrapper .payment__error");
    if (!expiryYear.value || !expiryMonth.value) {
      errorWrapper.textContent = "יש לבחור שנה וחודש";
      isValid = false;
    } else {
      errorWrapper.textContent = "";
    }

    // * id
    const id = form.querySelector("#id");
    const idError = id.nextElementSibling;
    if (!id.value || id.value.length !== 9 || isNaN(id.value)) {
      idError.textContent = "id לא תקין";
      isValid = false;
    } else {
      idError.textContent = "";
    }

    // * CVV
    const cvv = form.querySelector("#cvv");
    const cvvError = cvv.nextElementSibling;
    if (!cvv.value || cvv.value.length !== 3 || isNaN(cvv.value)) {
      cvvError.textContent = "CVV לא תקין";
      isValid = false;
    } else {
      cvvError.textContent = "";
    }
    const randomTransactionId = Math.floor(1000000 + Math.random() * 9000000).toString();
    console.log("randomTransactionId:", randomTransactionId);

    if (isValid) {
      alert("הטופס תקין!");
      form.submit();
      localStorage.setItem("ordernumber", randomTransactionId);
      window.location.href = "/?page=thanks";
    }
  });

  // ? end
}
