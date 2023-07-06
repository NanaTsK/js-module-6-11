import products from "./data/products.js";

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);


//* _________________________________________________________ *//

//*     ----->     ----->     Example 1 - Властивості та атрибути
//===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://picsum.photos/id/10/300/200
image.src = 'https://picsum.photos/id/20/300/200';

//* _________________________________________________________ *//

//*     ----->     ----->     Example 2 - Властивість textContent
//===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const title = document.querySelector(".article-title");
title.textContent = "Welcome to heaven";
console.log(title.textContent);

const text1 = document.querySelector(".article-text");
console.log(text1.textContent);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 3 - Властивість classList
//===================================================
console.log(`____________________`);
console.log(`Example 3 :`);

const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"]

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add("a", "b", "c");
console.log(text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
text.classList.toggle("is-hidden"); // will remove is-hidden class

// classList has a forEach method
text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 4 - Властивість style
//===================================================
console.log(`____________________`);
console.log(`Example 4 :`);

text.style.backgroundColor = "yellowgreen";
text.style.fontSize = "18px";
text.style.textAlign = "center";

console.log(text.style); // inline styles object

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 5 - Атрибути
//===================================================
console.log(`____________________`);
console.log(`Example 5 :`);

const image1 = document.querySelector(".image1");

console.log(image1.attributes); 
//NamedNodeMap(3) [ class="image1", src="https://picsum.photos/seed/picsum/300/200", alt="Beautiful nature" ]

console.log(image1.hasAttribute("src")); // true

console.log(image1.getAttribute("alt")); // Beautiful nature

image1.setAttribute("alt", "Amazing nature");
// або image1.alt = "Amazing nature";

console.log(image1.getAttribute("alt")); // Amazing nature


// //* _________________________________________________________ *//

//*     ----->     ----->     Example 6 - data-атрибути
//===================================================
console.log(`____________________`);
console.log(`Example 6 :`);

const saveBtn = document.querySelector('.editor button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('.editor button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
    console.log(dish.dataset.id);
});
// 14 7 3 61 <- their data-id from html  


// //* _________________________________________________________ *//

//*     ----->     ----->     Example 7 - 
// Створити кілька кнопок на основі масива з обєктами використовуючи createElement
//===================================================
console.log(`____________________`);
console.log(`Example 7 :`);


const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

const btnElementsArr = colors.map((buttonData) => {
  const btnElement = document.createElement('button');
  btnElement.textContent = buttonData.label;
  btnElement.style.color = buttonData.color;
  const containerElement = document.createElement('div');
  containerElement.append(btnElement);
  containerElement.style.marginBottom = '10px';
  return containerElement;
})
console.log(btnElementsArr);

const colorButtonsEl = document.querySelector(".color-buttons");
colorButtonsEl.append(...btnElementsArr);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 8 - xxx
// Створити список технологій що вивчаються на курсі Fullstack за допомогою js
//===================================================
console.log(`____________________`);
console.log(`Example 8 :`);


// const list = document.querySelector(".list");

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const itemsArr = technologies.map((technology) => {
//     return `<li>${technology}</li>`;
// });
// console.log(itemsArr);
// const listElement = `<ul>${itemsArr.join("")}</ul>`;
// document.ol.insertAdjacentHTML("beforeend", listElement);
// document.body.insertAdjacentHTML('beforeend', listElement);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 9 - Подія input
//===================================================
console.log(`____________________`);
console.log(`Example 9 :`);


const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});


// //* _________________________________________________________ *//

//*     ----->     ----->     Example 10 - Подія submit - Події елементів форм
//===================================================
console.log(`____________________`);
console.log(`Example 10 :`);


const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: {login, password}
  } = event.currentTarget;
  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  } 
  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();

};



// //* _________________________________________________________ *//

//*     ----->     ----->     Example 11 - Подія change - Події елементів форм
//===================================================
console.log(`____________________`);
console.log(`Example 11 :`);

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;
   
  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
};

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 12 - Подія focus і blur - Події елементів форм
//===================================================
console.log(`____________________`);
console.log(`Example 12 :`);

const textInput12 = document.querySelector(".text-input-12");
const setFocusBtn = document.querySelector(`[data-action="set"]`);
const removeFocusBtn = document.querySelector(`[data-action="remove"]`);

setFocusBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textInput12.focus();
});

removeFocusBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textInput12.blur();
});

textInput12.addEventListener("focus", () => {
  textInput12.value = "This input has focus"
});

textInput12.addEventListener("blur", () => {
  textInput12.value = ""
});


// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = ""
// });

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 13 - Подія focus і blur - Події елементів форм
//===================================================
console.log(`____________________`);
console.log(`Example 13 :`);

const navEl = document.querySelector(".site-nav");
console.log(navEl);
console.log(navEl.children.length);


const firstNavEl = navEl.firstElementChild;
console.log(firstNavEl);
console.log(firstNavEl.innerText);
console.log(firstNavEl.nextElementSibling.innerText);
console.log(firstNavEl.parentNode);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 14 - Подія focus і blur - Події елементів форм
//===================================================
console.log(`____________________`);
console.log(`Example 14 :`);

const colorPickerOptions = [
  {label: "red", color: "#F44336",},
  {label: "green", color: "#4CAF50",},
  {label: "blue", color: "#2196F3",},
  {label: "grey", color: "#607D8B",},
  {label: "pink", color: "#E91E63",},
  {label: "indigo", color: "#3F51B5",},
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

const createColorPickerOptions = (options) => {
  return options.map(option => {
    const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("color-picker__option");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;
  // buttonEl.style.width = 40;

  return buttonEl;
  });
};
const elements = createColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 15 - Створити кілька кнопок на основі 
//*                                      масива з обєктами використовуючи createElement
//===================================================
console.log(`____________________`);
console.log(`Example 15 :`);

// const colors15 = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const btnElementsArr = colors.map((buttonData) => {
//   const btnElement = document.createElement('button');
//   btnElement.textContent = buttonData.label;
//   btnElement.style.color = buttonData.color;
//   const containerElement = document.createElement('div');
//   containerElement.append(btnElement);
//   containerElement.style.marginBottom = '10px';
//   return containerElement;
// })
// console.log(btnElementsArr);
// document.body.append(...btnElementsArr);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 16                                
//===================================================
console.log(`____________________`);
console.log(`Example 16 :`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const min = Number(inputEl.getAttribute("min"));
const max = Number(inputEl.getAttribute("max"));
const step = Number(inputEl.getAttribute("step"));

inputEl.addEventListener("input", onGetNumber);
createBtnEl.addEventListener("click", onCreate);
destroyBtnEl.addEventListener("click", clearBoxes);

function onGetNumber(event) { 
  createBtnEl.value = event.currentTarget.value;
}

function onCreate() { 
  const value = Number(createBtnEl.value);
  if (value < min || value > max) {
    alert(`Value must be a number between ${min} and ${max}`);
    return;
  }
  createBoxes(value);
}

function createBoxes(amount) { 
  let boxSize = 30;
  const boxesArr = [];

  if (amount > 0) {
    for (let i = 0; i < amount; i += step) {
      const boxEl = document.createElement("div");

      boxEl.style.width = `${boxSize}px`;
      boxEl.style.height = `${boxSize}px`;
      boxEl.style.backgroundColor = getRandomHexColor(); 
      boxSize += 10; 
      boxesArr.push(boxEl);
    }
  }
  boxesEl.append(...boxesArr);
}

function clearBoxes() { 
  boxesEl.innerHTML = "";
  inputEl.value = "";
  createBtnEl.value = "";
}
// //* _________________________________________________________ *//

//*     ----->     ----->     Example 17                                
//===================================================
console.log(`____________________`);
console.log(`Example 17 :`);

// создать и добавить new menu elements

const newItemElExample = document.createElement("li");
newItemElExample.classList.add("site-nav__itemExample");

const newLinkElExample = document.createElement("a");
newLinkElExample.classList.add("site-nav__linkExample");
newLinkElExample.href = "/profile";
newLinkElExample.textContent = "example";

newItemElExample.appendChild(newLinkElExample);

console.log(newItemElExample);
console.log(newLinkElExample);

const navElExample = document.querySelector(".site-navExample");
// добавит в конце>
// navElExample.appendChild(newItemElExample);

// добавит в начале перед первым:
// navElExample.insertBefore(newItemElExample, navElExample.firstElementChild);

// добавит перед последним:
navElExample.insertBefore(newItemElExample, navElExample.lastElementChild);


console.log(navElExample);

// //* _________________________________________________________ *//

//*     ----->     ----->     Example 18                                
//===================================================
console.log(`____________________`);
console.log(`Example 18 :`);

// создать product card

const product = {
  name: "Servo",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, enim.",
  price: 2000,
  available: true,
  onSale: true,
};

const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.classList.add("product__name");
nameEl.textContent = product.name;

const descrEl = document.createElement("p");
descrEl.classList.add("product__descr");
descrEl.textContent = product.description;

const priceEl = document.createElement("p");
priceEl.classList.add("product__price");
priceEl.textContent = `Price: ${product.price} credits`;

console.log(nameEl);
console.log(descrEl);
console.log(priceEl);

productEl.append(nameEl, descrEl, priceEl);
console.log(productEl);

const prodCard = document.querySelector(".product-card");
prodCard.append(productEl);
console.log(prodCard);


//*     ----->     ----->     Example 19                                
//===================================================
console.log(`____________________`);
console.log(`Example 19 :`);

// создать массив product cards from exported array
// see 1st raw >> import products from "./data/products.js";

const productsContainerEl = document.querySelector(".js-products");

const makeProductCard = ({ name, description, price }) => { 

const productElem = document.createElement("article");
productElem.classList.add("product");

const nameElem = document.createElement("h2");
nameElem.classList.add("product__name");
nameElem.textContent = name;

const descrElem = document.createElement("p");
descrElem.classList.add("product__descr");
descrElem.textContent = description;

const priceElem = document.createElement("p");
priceElem.classList.add("product__price");
priceElem.textContent = `Price: ${price} credits`;

  productElem.append(nameElem, descrElem, priceElem);
  
  return productElem;
};

const elementsArr = products.map(makeProductCard);
console.log(elementsArr);

productsContainerEl.append(...elementsArr);

