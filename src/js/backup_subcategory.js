// // * option #2
// const categories = [
//   {
//     id: 1,
//     name: "צרכנות",
//     icon: "../img/toggle-menus/categories-menu/store.svg",
//     subcategories: [
//       { name: "אופנה", link: "/fashion" },
//       { name: "ביגוד", link: "/clothing" },
//       { name: "נעליים", link: "/shoes" },
//       { name: "אביזרים", link: "/accessories" },
//     ],
//   },
//   {
//     id: 2,
//     name: "עד הבית online",
//     icon: "../img/toggle-menus/categories-menu/ups.svg",
//     subcategories: [
//       { name: "משלוחים מהירים", link: "/fast-delivery" },
//       { name: "שירותי קניות אונליין", link: "/online-shopping" },
//       { name: "סופרמרקט אונליין", link: "/supermarket-online" },
//       { name: "מוצרי חשמל", link: "/electronics" },
//     ],
//   },
//   {
//     id: 3,
//     name: "אורח חיים בריא",
//     icon: "../img/toggle-menus/categories-menu/prey-heart.svg",
//     subcategories: [
//       { name: "תזונה נכונה", link: "/healthy-eating" },
//       { name: "כושר גופני", link: "/fitness" },
//       { name: "מוצרי טבע", link: "/natural-products" },
//       { name: "יוגה ומדיטציה", link: "/yoga-meditation" },
//     ],
//   },
//   {
//     id: 4,
//     name: "טכנולוגיה",
//     icon: "../img/toggle-menus/categories-menu/tech.svg",
//     subcategories: [
//       { name: "גאדג'טים", link: "/gadgets" },
//       { name: "מחשבים", link: "/computers" },
//       { name: "מובייל", link: "/mobile" },
//       { name: "משחקים דיגיטליים", link: "/digital-games" },
//     ],
//   },
//   {
//     id: 5,
//     name: "רכב",
//     icon: "../img/toggle-menus/categories-menu/car.svg",
//     subcategories: [
//       { name: "רכב חדש", link: "/new-cars" },
//       { name: "אביזרים לרכב", link: "/car-accessories" },
//       { name: "שירותי תיקון", link: "/car-repair" },
//       { name: "ביטוח רכב", link: "/car-insurance" },
//     ],
//   },
//   {
//     id: 6,
//     name: "טיולים ונופש",
//     icon: "../img/toggle-menus/categories-menu/travel.svg",
//     subcategories: [
//       { name: "מלונות", link: "/hotels" },
//       { name: "טיסות", link: "/flights" },
//       { name: "אתרי נופש", link: "/resorts" },
//       { name: "טיולים מאורגנים", link: "/guided-tours" },
//     ],
//   },
//   {
//     id: 7,
//     name: "מוצרים לבית",
//     icon: "../img/toggle-menus/categories-menu/home.svg",
//     subcategories: [
//       { name: "רהיטים", link: "/furniture" },
//       { name: "מוצרי חשמל לבית", link: "/home-appliances" },
//       { name: "כלי מטבח", link: "/kitchenware" },
//       { name: "דקורציה", link: "/decoration" },
//     ],
//   },
//   {
//     id: 8,
//     name: "פנאי ובידור",
//     icon: "../img/toggle-menus/categories-menu/entertainment.svg",
//     subcategories: [
//       { name: "ספרים", link: "/books" },
//       { name: "סרטים", link: "/movies" },
//       { name: "הופעות ואירועים", link: "/events" },
//       { name: "מוזיקה", link: "/music" },
//     ],
//   },
// ];

// function createMenu() {
//   const menu = document.getElementById("categories-menu");

//   categories.forEach((category) => {
//     // Create category item
//     const categoryItem = document.createElement("li");
//     categoryItem.classList.add(
//       "header__menu-item",
//       "header__menu-item--category"
//     );
//     categoryItem.dataset.id = category.id;

//     // Create category link
//     const categoryLink = document.createElement("a");
//     categoryLink.classList.add("category-link");

//     const imageText = document.createElement("div");
//     imageText.classList.add("image-text");

//     const icon = document.createElement("img");
//     icon.src = category.icon;
//     icon.alt = "";

//     const spanText = document.createElement("span");
//     spanText.textContent = category.name;

//     imageText.appendChild(icon);
//     imageText.appendChild(spanText);

//     const arrowSpan = document.createElement("span");
//     arrowSpan.classList.add("header__menu-arrow");
//     arrowSpan.innerHTML = `
//         <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M13.0714 5.85742L7.92855 11.0003L13.0714 16.1431" stroke="black" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//       `;

//     categoryLink.appendChild(imageText);
//     categoryLink.appendChild(arrowSpan);
//     categoryItem.appendChild(categoryLink);

//     // Create subcategories
//     const subcategoryList = document.createElement("ul");
//     subcategoryList.classList.add("header__menu-subcategories");
//     subcategoryList.dataset.subcatId = category.id;
//     subcategoryList.style.display = "none";

//     category.subcategories.forEach((subcategory) => {
//       const subcategoryItem = document.createElement("li");
//       subcategoryItem.classList.add("header__menu-subcategory");

//       const subcategoryLink = document.createElement("a");
//       subcategoryLink.classList.add("header__menu-subcategory-link");
//       subcategoryLink.href = subcategory.link;

//       const subcategoryText = document.createElement("span");
//       subcategoryText.classList.add("header__menu-subcategory-text");
//       subcategoryText.textContent = subcategory.name;

//       subcategoryLink.appendChild(subcategoryText);
//       subcategoryItem.appendChild(subcategoryLink);
//       subcategoryList.appendChild(subcategoryItem);
//     });

//     categoryItem.appendChild(subcategoryList);
//     menu.appendChild(categoryItem);
//     menu.appendChild(document.createElement("hr")).classList.add("break-line");
//   });
// }

// // Run the function when the DOM is ready
// document.addEventListener("DOMContentLoaded", createMenu);
