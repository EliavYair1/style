function loadRegistrationContent() {
  // console.log("registration logic");

  const genders = document.querySelectorAll(".registration-container__gender");
  genders.forEach((gender) => {
    gender.addEventListener("click", () => {
      genders.forEach((g) => g.classList.remove("selected"));
      gender.classList.add("selected");
    });
  });

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = document.querySelectorAll("input");
    let valid = true;

    const formData = {};

    fields.forEach((field) => {
      const errorMsg = document.querySelector(`#${field.id}-error-msg`);

      formData[field.id] = field.value.trim();

      if (!field.value.trim()) {
        valid = false;

        field.classList.add("error");
        field.style.marginBottom = "0";

        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.marginBottom = "20px";
        }
      } else {
        field.classList.remove("error");
        field.style.marginBottom = "20px";

        if (errorMsg) {
          errorMsg.style.display = "none";
        }
      }
    });

    //  gender Picker Validate
    const selectedGender = document.querySelector(".registration-container__gender.selected");
    const genderWrapper = document.querySelector(".registration-container__gender-wrapper");
    const genderError = document.querySelector("#gender-error-msg");
    if (!selectedGender) {
      genderError.style.display = "block";
      genderWrapper.style.marginBottom = "12px";
    } else {
      genderError.style.display = "none";
      genderWrapper.style.marginBottom = "0";

      formData.gender = selectedGender.textContent.trim();
    }

    //  checkboxes Validate
    const termsCheckbox = document.getElementById("reg__checkbox");
    const termsCheckbox2 = document.getElementById("reg__checkbox2");
    const termsError = document.getElementById("reg__checkbox-error-msg");
    if (!termsCheckbox.checked) {
      termsError.style.display = "block";
      termsCheckbox.style.marginBottom = "0";
      termsCheckbox2.style.marginBottom = "0";
    } else {
      termsError.style.display = "none";
      termsCheckbox.style.marginBottom = "0px";
      termsCheckbox2.style.marginBottom = "0px";

      formData.termsCheckbox1 = termsCheckbox.checked;
      formData.termsCheckbox2 = termsCheckbox2.checked;
    }

    console.log("Form Data:", formData);

    if (valid) alert("Form submitted successfully!");
  });
}
