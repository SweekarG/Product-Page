"use strict";

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

//color changer menu
const snowflakesTab = document.querySelector(".snowflakes-container");
const darkTh = document.querySelector(".dark__mode");
snowflakesTab.addEventListener("click", function (e) {
  e.target.classList.add("clicked");
  darkTh.classList.add("clicked");
});

// json

const products1 = [
  {
    id: 1,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 2,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 3,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/pork.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 4,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products2 = [
  {
    id: 5,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 6,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 7,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/pork.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 8,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 9,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 10,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 11,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 12,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 13,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 14,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products3 = [
  {
    id: 15,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 16,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 17,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 18,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products4 = [
  {
    id: 19,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 20,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 21,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/fish.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 22,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products5 = [
  {
    id: 19,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 20,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 21,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/fish.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 22,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
const products6 = [
  {
    id: 19,
    name: "John Doe",
    beforePrice: 500,
    price: 200,
    image: "images/buff.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 20,
    name: "Jane Doe",
    beforePrice: 500,
    price: 300,
    image: "images/chicken.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 21,
    name: "John Smith",
    beforePrice: 500,
    price: 400,
    image: "images/fish.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
  {
    id: 22,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
    quantity: "2kg",
    reviews: "4.9 (5 reviews)",
  },
];
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
      <div class = "star"><img src="img/star.png" alt="star" class="star__img">${product.reviews}</div>
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
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

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
let cartSpan = document.querySelector(".list-cart span");

let carts = [];

const addToCart = document.querySelectorAll(".btn--cart");
const productDesc = document.querySelectorAll(".products__desc");
productDesc.forEach((product) => {
  product.addEventListener("click", function (e) {
    let positionClick = e.target;
    if (positionClick.classList.contains("btn--cart")) {
      let products_id = positionClick.parentElement.dataset.id;

      addToCartFunction(products_id);
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
};

const addCartToHTML = () => {
  modal.innerHTML = "";
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let product = document.createElement("div");
      product.classList.add("cart-item");
      productsAll.forEach((products) => {
        let productData = productsAll.find(
          (product) => product.id == cart.products_id
        );
        if (productData) {
          let info = productsAll[productData];
          product.innerHTML = ` <div class = "cart-item">
      <div class="cart-item__image">
        <img src="${info.image}" class = "products__img--cart"alt="Vegetable" />
        </div>
        <div class="cart-item__name">${info.name}</div>
        <div class="cart-item__price">Rs${info.price * cart.quantity}</div>
         <div class="cart-item__quantity">
           <span class="minus"><</span>
           <span>${cart.quantity}</span>
           <span class="add">></span>
         </div>
       </div>`;
          listCart.appendChild(product);
          return;
        }
      });
    });
  }
};
addCartToHTML();
