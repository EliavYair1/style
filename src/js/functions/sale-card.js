document.addEventListener("DOMContentLoaded", function () {
  const salesCards = document.querySelectorAll(".sale-card");
  salesCards.forEach(function (card) {
    // * fav button
    const favIcon = card.querySelector("#favIcon");
    const heartPath = card.querySelector("#heartPath");
    let isLiked = false;

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      isLiked = !isLiked;

      if (isLiked) {
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "white");
      }
    });

    // ? fav button

    // * counter min max buttons
    const countDigit = card.querySelector(".counter--counterWrap--countDigit");
    const addButton = card.querySelector(".counter--counterWrap--maxBtn");
    const subtractButton = card.querySelector(".counter--counterWrap--minBtn");

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
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = card.querySelector("#addToCartBtn");
    const addToCartText = card.querySelector(".counter--addToCartText");

    let isAddToCart = false;

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      isAddToCart = !isAddToCart;

      if (isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }
    });
    // ? add to cart button

    // *   show hide  elements
    const saleCardCounters = document.querySelectorAll(".counter");
    // *looping over the counter data attr
    saleCardCounters.forEach((counter) => {
      let isCounterShown = counter.getAttribute("data-isShown") === "true";
      function toggleCounterVisibility() {
        if (isCounterShown) {
          counter.style.display = "flex";
          counter.style.opacity = "1";
          // counter.style.visibility = "visible";
        } else {
          counter.style.display = "none";
          counter.style.opacity = "0";
          // counter.style.visibility = "hidden";
        }
      }
      toggleCounterVisibility();
      counter.addEventListener("click", function () {
        // isCounterShown = !isCounterShown;
        counter.setAttribute("data-isShown", isCounterShown);
        toggleCounterVisibility();
      });
    });
  });

  const imgStamps = document.querySelectorAll(".img-stamp");
  imgStamps.forEach((stamp) => {
    let svgStampShown = stamp.getAttribute("data-isstampshown") === "true";
    stamp.style.display = svgStampShown ? "flex" : "none";
  });

  // ?  show hide elements
});
