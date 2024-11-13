document.addEventListener("DOMContentLoaded", function () {
  const infoCards = document.querySelectorAll(".information-card");

  infoCards.forEach(function (infoCard, index) {
    const infoCardCounter = infoCard.querySelector(".information-card__counter");
    const infoCardId = index;

    informationCardObj[infoCardId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };
    // * fav button
    const favIcon = infoCard.querySelector("#favIcon");
    const heartPath = infoCard.querySelector("#heartPath");

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      informationCardObj[infoCardId].liked = !informationCardObj[infoCardId].liked;
      if (informationCardObj[infoCardId].liked) {
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "white");
      }
    });

    // ? fav button

    // * counter min max buttons
    const countDigit = infoCard.querySelector(
      ".information-card__counter--counterWrap--countDigit"
    );
    const addButton = infoCard.querySelector(".information-card__counter--counterWrap--maxBtn");
    const subtractButton = infoCard.querySelector(
      ".information-card__counter--counterWrap--minBtn"
    );

    let count = parseInt(countDigit.textContent);

    addButton.addEventListener("click", function () {
      count++;
      updateCounter();
    });

    subtractButton.addEventListener("click", function () {
      if (count > 1) {
        count--;
        updateCounter();
      }
    });

    function updateCounter() {
      countDigit.textContent = count;
      informationCardObj[infoCardId].numberOfItems = count;

      if (informationCardObj[infoCardId].isAddToCart) {
        updateCartCount(productCardObj, informationCardObj);
      }
      console.log("information Card Object:", informationCardObj);
      console.log("Product Card Object:", productCardObj);
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = infoCard.querySelector("#addToCartBtn");
    const addToCartText = infoCard.querySelector(".information-card__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();

      informationCardObj[infoCardId].isAddToCart = !informationCardObj[infoCardId].isAddToCart;

      if (informationCardObj[infoCardId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }

      updateCartCount(productCardObj, informationCardObj);
    });
    // ? add to cart button

    // *   show hide  elements
    if (window.innerWidth > 1200) {
      infoCard.addEventListener("mouseover", function () {
        infoCardCounter.style.display = "flex";
      });

      infoCard.addEventListener("mouseout", function () {
        infoCardCounter.style.display = "none";
      });
    }
  });

  // ?  show hide elements
});
