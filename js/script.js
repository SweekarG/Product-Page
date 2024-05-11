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
  {
    id: 4,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
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
  {
    id: 4,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
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
  {
    id: 4,
    name: "Jane Smith",
    beforePrice: 500,
    price: 500,
    image: "images/mutton.jpg",
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
const products3 = [
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
const products4 = [
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
