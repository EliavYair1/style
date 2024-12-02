function loadPaymentContent() {
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.hidden = true;
  const currentYear = new Date().getFullYear();
  const yearDropdown = document.getElementById("expiry-year");

  for (let i = 0; i < 10; i++) {
    const year = currentYear + i;
    const option = document.createElement("option");
    option.value = year.toString().slice(-2);
    option.textContent = year;
    yearDropdown.appendChild(option);
  }
}
