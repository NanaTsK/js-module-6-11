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

//*     ----->     ----->     Example 8 - xxx
// Створити список технологій що вивчаються на курсі Fullstack за допомогою js
//===================================================
console.log(`____________________`);
console.log(`Example 8 :`);


const list = document.querySelector(".list");

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const itemsArr = technologies.map((technology) => {
    return `<li>${technology}</li>`;
});
console.log(itemsArr);
const listElement = `<ul>${itemsArr.join("")}</ul>`;
document.ol.insertAdjacentHTML("beforeend", listElement);
// document.body.insertAdjacentHTML('beforeend', listElement);

