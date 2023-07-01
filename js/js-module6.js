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

