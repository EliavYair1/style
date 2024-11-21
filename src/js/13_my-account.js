function loadMyAccountContentJs() {
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.hidden = true;
  // console.log("my acount logic!");

  // * my account toggle
  const boxes = document.querySelectorAll(".box");
  const dynamicContents = document.querySelectorAll(".dynamic-order-content");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      boxes.forEach((b) => b.classList.remove("active"));
      box.classList.add("active");

      updateDynamicContent(box.textContent);
    });
  });

  function updateDynamicContent(selectedText) {
    dynamicContents.forEach((content) => {
      content.style.display = "none";
    });

    if (selectedText.includes("פרטים")) {
      document.getElementById("form-content").style.display = "flex";
      document.getElementById("form-content").style.flexDirection = "column";
    } else if (selectedText.includes("ההזמנות")) {
      document.getElementById("orders-content").style.display = "flex";
    } else if (selectedText.includes("הנקודות")) {
      document.getElementById("points-content").style.display = "flex";
    }
  }
  // ? dynamic content to display

  // * form logic
  // document.getElementById("myForm").addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   // clear previous error messages
  //   document.querySelectorAll(".error-message").forEach(function (errorMsg) {
  //     errorMsg.textContent = "";
  //   });

  //   // validate all inputs
  //   let isValid = true;

  //   // validate Name
  //   const name = document.getElementById("name");
  //   const nameError = document.getElementById("name-error");
  //   const nameGraphic = document.querySelector(".graphic--nao");
  //   if (name.value.trim() === "") {
  //     nameError.textContent = "אנא הזן את שמך הפרטי";
  //     nameGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     nameGraphic.style.stroke = "black";
  //   }

  //   // Validate Family Name
  //   const familyName = document.getElementById("family-name");
  //   const familyNameError = document.getElementById("family-name-error");
  //   const familyNameGraphic = document.querySelectorAll(".graphic--nao")[1];
  //   if (familyName.value.trim() === "") {
  //     familyNameError.textContent = "אנא הזן את שם המשפחה";
  //     familyNameGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     familyNameGraphic.style.stroke = "black";
  //   }

  //   // Validate Email
  //   const email = document.getElementById("email");
  //   const emailError = document.getElementById("email-error");
  //   const emailGraphic = document.querySelectorAll(".graphic--nao")[2];
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email.value.trim())) {
  //     emailError.textContent = "אנא הזן כתובת אימייל חוקית";
  //     emailGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     emailGraphic.style.stroke = "black";
  //   }

  //   // Validate Phone
  //   const phone = document.getElementById("phone");
  //   const phoneError = document.getElementById("phone-error");
  //   const phoneGraphic = document.querySelectorAll(".graphic--nao")[3];
  //   const phoneRegex = /^[0-9]{10}$/;
  //   if (!phoneRegex.test(phone.value.trim())) {
  //     phoneError.textContent = "אנא הזן מספר טלפון תקני";
  //     phoneGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     phoneGraphic.style.stroke = "black";
  //   }

  //   // Validate id
  //   const id = document.getElementById("id");
  //   const idError = document.getElementById("id-error");
  //   const idGraphic = document.querySelectorAll(".graphic--nao")[3];
  //   const idRegex = /^[0-9]{10}$/;
  //   if (!idRegex.test(id.value.trim())) {
  //     idError.textContent = "אנא הזן מספר תעודת זהות";
  //     idGraphic.style.stroke = "red";
  //     isValid = false;
  //   } else {
  //     idGraphic.style.stroke = "black";
  //   }

  //   if (isValid) {
  //     alert("הטופס הוגש בהצלחה!");
  //   }
  // });

  // * points collapse
  const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

  collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const parent = header.parentElement;
      const icon = header.querySelector(".collapse-icon");
      parent.style.transition = "transform 0.3s ease";
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
        content.style.display = "block";
      }
    });
  });
}
