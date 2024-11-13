document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  // const cartCountElement = document.getElementById("cart-count");

  products.forEach(function (product, index) {
    const productCounter = product.querySelector(".product__counter");
    const productId = index;

    productCardObj[productId] = {
      liked: false,
      numberOfItems: 1,
      isAddToCart: false,
    };

    // * fav button
    const favIcon = product.querySelector("#favIcon");
    const heartPath = product.querySelector("#heartPath");

    favIcon.addEventListener("click", function (e) {
      e.preventDefault();
      // toggling the button like
      productCardObj[productId].liked = !productCardObj[productId].liked;
      // console.log("Liked status for product", productId, ":", productCardObj[productId].liked);

      if (productCardObj[productId].liked) {
        heartPath.setAttribute("stroke", "#FF324B");
        heartPath.setAttribute("fill", "#FF324B");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "none");
      }
    });
    // ? fav button

    // * counter min max buttons
    const countDigit = product.querySelector(".product__counter--counterWrap--countDigit");
    const addButton = product.querySelector(".product__counter--counterWrap--maxBtn");
    const subtractButton = product.querySelector(".product__counter--counterWrap--minBtn");

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
      // toggling the button of add to counter
      productCardObj[productId].numberOfItems = count;
      if (productCardObj[productId].isAddToCart) {
        updateCartCount(productCardObj, voucherCardObj);
      }
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = product.querySelector("#addToCartBtn");
    const addToCartText = product.querySelector(".product__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // toggling the button of add to cart
      productCardObj[productId].isAddToCart = !productCardObj[productId].isAddToCart;

      if (productCardObj[productId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";

        count = 1;
        countDigit.textContent = count;
        productCardObj[productId].numberOfItems = count;
      }

      updateCartCount(productCardObj, voucherCardObj);
    });

    // ? add to cart button
    if (window.innerWidth > 1600) {
      console.log("addToCartBtn", addToCartBtn);
      console.log("addToCartText", addToCartText);

      product.addEventListener("mouseenter", function (e) {
        const parentOffset = addToCartBtn.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        addToCartText.style.top = relY + "px";
        addToCartText.style.left = relX + "px";
      });
      product.addEventListener("mouseover", function () {
        productCounter.style.display = "flex";
      });

      product.addEventListener("mouseout", function () {
        productCounter.style.display = "none";
      });
    }
  });
});
