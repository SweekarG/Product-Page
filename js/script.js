"use strict";

//Tabbed component for categories
const tab = document.querySelectorAll(".products__tab  ");
const tabContainer = document.querySelector(".products__tab-container");
const tabContent = document.querySelectorAll(".products__content");

tab.forEach((tab) => tab.addEventListener("click", () => console.log("TAB")));

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".products__tab");
  console.log(clicked);
  if (!clicked) return;

  tab.forEach((t) => t.classList.remove("products__tab--active"));
  tabContent.forEach((c) => c.classList.remove("products__content--active"));
  document
    .querySelector(`.products__content--${clicked.dataset.tab}`)
    .classList.add("products__content--active");

  clicked.classList.add("products__tab--active");
});

//newsletter
const modalNews = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modalNews.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

//sticky nav bar

const sec1 = document.querySelector("#section--01");
const nav = document.querySelector(".nav");
const initialPoint = sec1.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > initialPoint.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

// Revealing content on scroll

const allSec = document.querySelectorAll(".section");
const revealSec = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSec, {
  root: null,
  threshold: 0.13,
});
allSec.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// creting arrays for products and details and adding them to the html

const products1 = [
  {
    id: 1,
    name: "Milk",
    beforePrice: 500,
    price: 200,
    image: "images/milk.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 2,
    name: "Ghee",
    beforePrice: 500,
    price: 300,
    image: "images/ghee.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 3,
    name: "butter",
    beforePrice: 500,
    price: 400,
    image: "images/butter.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 4,
    name: "cheese",
    beforePrice: 500,
    price: 500,
    image: "images/cheese.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 5,
    name: "Curd",
    beforePrice: 500,
    price: 500,
    image: "images/curd.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 6,
    name: "Milk shake",
    beforePrice: 500,
    price: 500,
    image: "images/milkshake.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 7,
    name: "Ice Cream",
    beforePrice: 500,
    price: 500,
    image: "images/icecream.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 8,
    name: "Lassi",
    beforePrice: 500,
    price: 500,
    image: "images/lassi.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products2 = [
  {
    id: 9,
    name: "Coconut Oil",
    beforePrice: 250,
    price: 270,
    image: "images/coconutoil.jpg",
    quantity: "1ltr",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 10,
    name: "mustard Oil",
    beforePrice: 315,
    price: 300,
    image: "images/mustard.jpg",
    quantity: "1ltr",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 11,
    name: "Milk",
    beforePrice: 500,
    price: 400,
    image: "images/milk.jpg",
    quantity: "5ltr",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 12,
    name: "Butter",
    beforePrice: 500,
    price: 500,
    image: "images/butter.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 13,
    name: "Milk shake",
    beforePrice: 500,
    price: 500,
    image: "images/milkshake.jpg",
    quantity: "350 ml",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 14,
    name: "fish",
    beforePrice: 500,
    price: 500,
    image: "images/fish.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 15,
    name: "Mutton",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 16,
    name: "Sausages",
    beforePrice: 500,
    price: 500,
    image: "images/sausage.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 17,
    name: "corn",
    beforePrice: 500,
    price: 500,
    image: "images/corn.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 18,
    name: "Lassi",
    beforePrice: 500,
    price: 500,
    image: "images/lassi.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products3 = [
  {
    id: 19,
    name: "apples",
    beforePrice: 500,
    price: 200,
    image: "images/apples.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 20,
    name: "potatoes",
    beforePrice: 500,
    price: 300,
    image: "images/potato.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 21,
    name: "Tomato",
    beforePrice: 500,
    price: 400,
    image: "images/tomato.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 22,
    name: "Pumpkin",
    beforePrice: 500,
    price: 500,
    image: "images/pumpkin.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 23,
    name: "capsicum",
    beforePrice: 500,
    price: 500,
    image: "images/capsicum.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 24,
    name: "grapes",
    beforePrice: 500,
    price: 500,
    image: "images/grapes.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 25,
    name: "Cauliflower",
    beforePrice: 500,
    price: 500,
    image: "images/cauli.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 26,
    name: "Guava",
    beforePrice: 500,
    price: 500,
    image: "images/guava.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products4 = [
  {
    id: 27,
    name: "Rice",
    beforePrice: 500,
    price: 200,
    image: "images/rice.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 28,
    name: "Wheat",
    beforePrice: 500,
    price: 300,
    image: "images/wheat.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 29,
    name: "lentitls",
    beforePrice: 500,
    price: 400,
    image: "images/lentils.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 30,
    name: "chick Peas",
    beforePrice: 500,
    price: 500,
    image: "images/chickpeas.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 31,
    name: "Buck Wheat",
    beforePrice: 500,
    price: 500,
    image: "images/buckwheat.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 32,
    name: "Corn",
    beforePrice: 500,
    price: 500,
    image: "images/corn.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 33,
    name: "Oats",
    beforePrice: 500,
    price: 500,
    image: "images/oats.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 34,
    name: "Kidney beans",
    beforePrice: 500,
    price: 500,
    image: "images/kidneybeans.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products5 = [
  {
    id: 35,
    name: "Buff",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 36,
    name: "Chicken",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 37,
    name: "Fish",
    beforePrice: 500,
    price: 400,
    image: "images/fish.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 38,
    name: "Mutton",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 39,
    name: "Sausages",
    beforePrice: 500,
    price: 500,
    image: "images/sausage.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 40,
    name: "Pork",
    beforePrice: 500,
    price: 500,
    image: "images/pork.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 41,
    name: "Bacon",
    beforePrice: 500,
    price: 500,
    image: "images/bacon.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products6 = [
  {
    id: 42,
    name: "Coconut Oil",
    beforePrice: 500,
    price: 200,
    image: "images/coconutoil.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 43,
    name: "Apple Vinegar",
    beforePrice: 500,
    price: 300,
    image: "images/applevinegar.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 44,
    name: "Sunflower Oil",
    beforePrice: 500,
    price: 400,
    image: "images/sunflower.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 45,
    name: "Olive Oil",
    beforePrice: 500,
    price: 500,
    image: "images/olive.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 46,
    name: "Corn Oil",
    beforePrice: 500,
    price: 500,
    image: "images/cornoil.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];

//adding products to the html
const sectionSelectors = [
  ".section .section--featured",
  "#section--1 .products__content",
];
const sectionElement = document.querySelector(".section");
const featuredContent = sectionElement.querySelector(".section--featured");
const productsContent = document.querySelector(
  "#section--1 .products__content--active"
);
const productsContent2 = document.querySelector(
  "#section--1 .products__content--2"
);
const productsContent3 = document.querySelector(
  "#section--1 .products__content--3"
);
const productsContent4 = document.querySelector(
  "#section--1 .products__content--4"
);
const productsContent5 = document.querySelector(
  "#section--1 .products__content--5"
);

const addDataToHTML = (products, container) => {
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.dataset.id = product.id;
    newProduct.classList.add("products__desc");
    newProduct.innerHTML = `<img src="${product.image}" alt="${product.name}" class="products__img">
      <h4 class="products__title">${product.name}<p class= "quantity">${product.quantity}</p></h4>
      <div class = "star"><img src="images/star.png" alt="star" class="star__img">${product.reviews}</div>
      <h4 class= "price"><p><del>${product.beforePrice}</del></p>${product.price}</h4>
      <button class="btn btn--cart">+ Add to Cart</button>`;
    container.appendChild(newProduct);
  });
};

addDataToHTML(products1, productsContent);
addDataToHTML(products2, featuredContent);
addDataToHTML(products3, productsContent2);
addDataToHTML(products4, productsContent3);
addDataToHTML(products5, productsContent4);
addDataToHTML(products6, productsContent5);

//shopping cart
const cart = document.querySelector(".icon-cart");
const modal = document.querySelector(".modal-cart");
const close = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay-cart");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

cart.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//click on product
const products = document.querySelectorAll(".products__img");
const modalShow = document.querySelector(".modal-showcase");
const overlayShow = document.querySelector(".overlay-showcase");
const closeShow = document.querySelector(".close-modal-showcase");
const openShowcase = function () {
  modalShow.classList.remove("hidden");
  overlayShow.classList.remove("hidden");
};
products.forEach((product) => {
  product.addEventListener("click", openShowcase);
});

const closeShowcase = function () {
  console.log("clicked");
  modalShow.classList.add("hidden");
  overlayShow.classList.add("hidden");
};

closeShow.addEventListener("click", closeShowcase);

//add to cart functionality
const productsAll = [
  products1,
  products2,
  products3,
  products4,
  products5,
  products6,
];
let listCart = document.querySelector(".list-cart");
let cartSpan = document.querySelector(".icon-cart span");

let carts = [];

const addToCart = document.querySelectorAll(".btn--cart");
const productDesc = document.querySelectorAll(".products__desc");
productDesc.forEach((product) => {
  product.addEventListener("click", function (e) {
    let positionClick = e.target;
    if (positionClick.classList.contains("btn--cart")) {
      let products_id = positionClick.parentElement.dataset.id;

      addToCartFunction(products_id);
      addCartToHTML();
    }
  });
});

const addToCartFunction = (products_id) => {
  let positionInCart = carts.findIndex(
    (cart) => cart.products_id == products_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        products_id: products_id,
        quantity: 1,
      },
    ];
  } else if (positionInCart == -1) {
    carts.push({
      products_id: products_id,
      quantity: 1,
    });
  } else {
    carts[positionInCart].quantity += 1;
  }
  console.log(carts);
  addCartToHTML();
};

const addCartToHTML = () => {
  listCart.innerHTML = "";
  let totalQuantity = 0;
  carts.forEach((cart, index) => {
    totalQuantity += cart.quantity;
    let productData;
    for (let i = 0; i < productsAll.length; i++) {
      productData = productsAll[i].find(
        (product) => product.id == cart.products_id
      );
      if (productData) break;
    }
    if (productData) {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = ` <div class = "cart-item">
      <div class="cart-item__image">
        <img src="${
          productData.image
        }" class = "products__img--cart"alt="Vegetable" />
        </div>
        <div class="cart-item__name">${productData.name}</div>
        <div class="cart-item__price">Rs${
          productData.price * cart.quantity
        }</div>
         <div class="cart-item__quantity">
           <span class="minus"><</span>
           <span>${cart.quantity}</span>
           <span class="add">></span>
         </div>
         
         <svg class="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
         
       </div>`;
      listCart.appendChild(cartItem);
    }
  });
  cartSpan.textContent = totalQuantity;
};

addCartToHTML();

//slide on click

const slideBtn = document.querySelectorAll(".slider-component .slide--img");
const contentList = document.querySelector(
  ".slider-component .section--featured"
);
const maxScrollLeft = contentList.scrollWidth - contentList.clientWidth;

slideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.classList.contains("back--img") ? -1 : 1;
    const slide = contentList.clientWidth * direction;
    contentList.scrollBy({ left: slide, behavior: "smooth" });
    console.log("clicked");
  });
});

const handleBtns = () => {
  slideBtn[0].style.display = contentList.scrollLeft <= 0 ? "none" : "flex";
  slideBtn[1].style.display =
    contentList.scrollLeft >= maxScrollLeft ? "none" : "flex";
};

//Dlete item from cart
const parentElement = document.querySelector(".list-cart");

parentElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("trash")) {
    console.log("clicked on trash");
    const cartItem = e.target.closest(".cart-item");
    const productId = cartItem.dataset.productId;
    const index = carts.findIndex((item) => item.products_id == productId);
    if (index !== -1) {
      carts.splice(index, 1);
      addCartToHTML();
    }
  }
});
