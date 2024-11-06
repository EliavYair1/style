document.addEventListener("DOMContentLoaded", function () {
  const vouchers = document.querySelectorAll(".voucher-card");
  // const cartCountElement = document.getElementById("cart-count");
  // console.log("cartCountElement", cartCountElement);

  vouchers.forEach(function (voucher, index) {
    const voucherCounter = voucher.querySelector(".voucher-card__counter");
    const voucherId = index;

    voucherCardObj[voucherId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };
    // * fav button
    const favIcon = voucher.querySelector("#favIcon");
    const heartPath = voucher.querySelector("#heartPath");
    // let isLiked = false;

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      // isLiked = !isLiked;
      // console.log("isLiked", isLiked);
      voucherCardObj[voucherId].liked = !voucherCardObj[voucherId].liked;
      if (voucherCardObj[voucherId].liked) {
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
      voucherCardObj[voucherId].numberOfItems = count;

      if (voucherCardObj[voucherId].isAddToCart) {
        updateCartCount(productCardObj, voucherCardObj);
      }
      console.log("voucher Card Object:", voucherCardObj);
      console.log("Product Card Object:", productCardObj);
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = voucher.querySelector("#addToCartBtn");
    const addToCartText = voucher.querySelector(".voucher-card__counter--addToCartText");

    // let isAddToCart = false;

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // isAddToCart = !isAddToCart;
      // console.log("isAddToCart", isAddToCart);
      voucherCardObj[voucherId].isAddToCart = !voucherCardObj[voucherId].isAddToCart;

      if (voucherCardObj[voucherId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }

      updateCartCount(productCardObj, voucherCardObj);
    });
    // ? add to cart button

    // *   show hide  elements
    if (window.innerWidth > 1600) {
      voucher.addEventListener("mouseover", function () {
        voucherCounter.style.display = "flex";
      });

      voucher.addEventListener("mouseout", function () {
        voucherCounter.style.display = "none";
      });
    }
  });

  // ?  show hide elements
});
