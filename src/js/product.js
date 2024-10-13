document.addEventListener("DOMContentLoaded", function () {
  // * fav button

  const favIcon = document.getElementById("favIcon");
  const heartPath = document.getElementById("heartPath");

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
      heartPath.setAttribute("fill", "none");
    }
  });

  // ? fav button

  // * counter min max buttons
  const countDigit = document.querySelector(
    ".product__counter--counterWrap--countDigit"
  );
  const addButton = document.querySelector(
    ".product__counter--counterWrap--maxBtn"
  );
  const subtractButton = document.querySelector(
    ".product__counter--counterWrap--minBtn"
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
  }
  // ? counter min max buttons

  // * add to cart button

  const addToCartBtn = document.getElementById("addToCartBtn");
  const addToCartText = document.querySelector(
    ".product__counter--addToCartText"
  );

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
});
