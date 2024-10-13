document.addEventListener("DOMContentLoaded", () => {
  const subcategories = {
    1: [
      {
        text: "אופנה",
        href: "/fashion",
        productFile: "../template/features/product.html",
      },
      { text: "ביגוד", href: "/clothing" },
    ],
    2: [
      { text: "Subcategory 2.1", href: "/subcategory2-1" },
      { text: "Subcategory 2.2", href: "/subcategory2-2" },
    ],
    3: [
      { text: "Subcategory 3.1", href: "/subcategory3-1" },
      { text: "Subcategory 3.2", href: "/subcategory3-2" },
    ],
    4: [
      { text: "Subcategory 4.1", href: "/subcategory4-1" },
      { text: "Subcategory 4.2", href: "/subcategory4-2" },
    ],
    5: [
      { text: "Subcategory 5.1", href: "/subcategory5-1" },
      { text: "Subcategory 5.2", href: "/subcategory5-2" },
    ],
    6: [
      { text: "תיירות פנים", href: "/domestic-tourism" },
      { text: "טיסות", href: "/flights" },
      { text: "תיירות חוץ", href: "/international-tourism" },
      { text: "אילת", href: "/eilat" },
    ],
    7: [
      { text: "Subcategory 7.1", href: "/subcategory7-1" },
      { text: "Subcategory 7.2", href: "/subcategory7-2" },
    ],
  };

  async function fetchProductHTML(productFile) {
    try {
      const response = await fetch(productFile);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const productHTML = await response.text();
      return productHTML;
    } catch (error) {
      console.error("Failed to fetch product HTML:", error);
      return "<div>Product not available</div>"; // Fallback if fetch fails
    }
  }

  function generateSubcategoryLinks() {
    const subcategoryContainers = document.querySelectorAll(
      ".header__menu-subcategories"
    );

    subcategoryContainers.forEach(async (container) => {
      const subcatId = container.getAttribute("data-subcatId");

      if (subcategories[subcatId]) {
        const subcategoryArray = subcategories[subcatId];
        container.innerHTML = "";

        subcategoryArray.forEach((subcategory) => {
          const link = document.createElement("a");
          link.href = subcategory.href;
          link.classList.add("header__menu-subcategory");

          const span = document.createElement("span");
          span.classList.add("header__menu-subcategory-text");
          span.textContent = subcategory.text;

          link.appendChild(span);
          container.appendChild(link);

          const product = document.createElement("div");
          product.classList.add("product");
          product.innerHTML = subcategory.product;
          container.appendChild(product);
        });
      }
    });
  }

  generateSubcategoryLinks();

  document.querySelectorAll(".header__menu-item--category").forEach((item) => {
    item.addEventListener("click", function () {
      const subcatId = this.nextElementSibling.getAttribute("data-subcatId");

      const subcategoryDiv = document.querySelector(
        `.header__menu-subcategories[data-subcatId="${subcatId}"]`
      );

      if (!subcategoryDiv) {
        if (subcategoryDiv.style.display === "flex") {
          subcategoryDiv.style.display = "none";
        } else {
          subcategoryDiv.style.display = "flex";
        }
      }
    });
  });
});
