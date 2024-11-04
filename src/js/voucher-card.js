document.addEventListener("DOMContentLoaded", function () {
  const vouchers = document.querySelectorAll(".voucher-card");

  vouchers.forEach(function (voucher) {
    // * fav button
    const favIcon = voucher.querySelector("#favIcon");
    const heartPath = voucher.querySelector("#heartPath");
    let isLiked = false;

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      isLiked = !isLiked;
      console.log("isLiked", isLiked);

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
    const countDigit = voucher.querySelector(".voucher-card__counter--counterWrap--countDigit");
    const addButton = voucher.querySelector(".voucher-card__counter--counterWrap--maxBtn");
    const subtractButton = voucher.querySelector(".voucher-card__counter--counterWrap--minBtn");

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
    const addToCartBtn = voucher.querySelector("#addToCartBtn");
    const addToCartText = voucher.querySelector(".voucher-card__counter--addToCartText");

    let isAddToCart = false;

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      isAddToCart = !isAddToCart;
      console.log("isAddToCart", isAddToCart);

      if (isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }
    });
    // ? add to cart button

    // *   show hide  elements
    const saleCardCounters = document.querySelectorAll(".voucher-card__counter");
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

  // ?  show hide elements
});
