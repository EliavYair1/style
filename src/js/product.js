// document.addEventListener("DOMContentLoaded", function () {
//   const products = document.querySelectorAll(".product");
//   const likedProducts = [];
//   products.forEach(function (product, cardIndex) {
//     // * fav button
//     const favIcon = product.querySelector("#favIcon");
//     const heartPath = product.querySelector("#heartPath");
//     let isLiked = false;
//     const productId = cardIndex;
//     favIcon.addEventListener("click", function (e) {
//       e.preventDefault();
//       isLiked = !isLiked;
//       console.log("isLiked", isLiked);

//       if (isLiked) {
//         heartPath.setAttribute("stroke", "red");
//         heartPath.setAttribute("fill", "red");
//         // pushing the likes into an array
//         if (!likedProducts.includes(productId)) {
//           likedProducts.push(productId);
//         }
//       } else {
//         heartPath.setAttribute("stroke", "black");
//         heartPath.setAttribute("fill", "none");

//         const index = likedProducts.indexOf(productId);
//         if (index > -1) {
//           likedProducts.splice(index, 1);
//         }
//       }
//       console.log("Liked Products:", likedProducts);
//     });

//     // ? fav button

//     // * counter min max buttons
//     const countDigit = product.querySelector(".product__counter--counterWrap--countDigit");
//     const addButton = product.querySelector(".product__counter--counterWrap--maxBtn");
//     const subtractButton = product.querySelector(".product__counter--counterWrap--minBtn");

//     let count = parseInt(countDigit.textContent);

//     addButton.addEventListener("click", function () {
//       count++;
//       updateCounter();
//     });

//     subtractButton.addEventListener("click", function () {
//       if (count > 1) {
//         count--;
//         updateCounter();
//       }
//     });

//     function updateCounter() {
//       countDigit.textContent = count;
//     }
//     // ? counter min max buttons

//     // * add to cart button
//     const addToCartBtn = product.querySelector("#addToCartBtn");
//     const addToCartText = product.querySelector(".product__counter--addToCartText");

//     let isAddToCart = false;

//     addToCartBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       isAddToCart = !isAddToCart;
//       console.log("isAddToCart", isAddToCart);

//       if (isAddToCart) {
//         addToCartText.textContent = "הסר";
//       } else {
//         addToCartText.textContent = "הוספה";
//       }
//     });
//     // ? add to cart button
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const productCardObj = {};

  products.forEach(function (product, index) {
    const productId = index; // Customize to use a unique ID if available

    // Initialize the object for this product
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
        heartPath.setAttribute("stroke", "red");
        heartPath.setAttribute("fill", "red");
      } else {
        heartPath.setAttribute("stroke", "black");
        heartPath.setAttribute("fill", "none");
      }

      // console.log("Product Card Object:", productCardObj);
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
      // console.log("Updated item count for product", productId, ":", count);
    }
    // ? counter min max buttons

    // * add to cart button
    const addToCartBtn = product.querySelector("#addToCartBtn");
    const addToCartText = product.querySelector(".product__counter--addToCartText");

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // toggling the button of add to cart
      productCardObj[productId].isAddToCart = !productCardObj[productId].isAddToCart;
      // console.log(
      //   "Add to Cart status for product",
      //   productId,
      //   ":",
      //   productCardObj[productId].isAddToCart
      // );

      if (productCardObj[productId].isAddToCart) {
        addToCartText.textContent = "הסר";
      } else {
        addToCartText.textContent = "הוספה";
      }

      console.log("Product Card Object:", productCardObj);
    });
    // ? add to cart button
  });
});
