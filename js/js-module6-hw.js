// //* _________________________________________________________ *//

//*     ----->     ----->     Task 1 
//===================================================

const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.children;
const itemsCount = categoriesList.children.length;
console.log(`Number of categories: ${itemsCount}`);

Array.from(categoryItems).forEach(category => {
  const categoryName = category.firstElementChild.textContent; 
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 2
//===================================================
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
//   const ingridientList = document.getElementById("ingredients");
  
//   ingredients.forEach((ingredient) => {
//       const ingredientItem = document.createElement('li'); 
//       ingredientItem.classList.add("item");
//       ingredientItem.textContent = ingredient;
//       ingridientList.append(ingredientItem);
//   });

  //* або

//   const menuIngredients = document.getElementById("ingredients");

// const ingredientItems = ingredients.map((ingredient) => {
//     const ingredientItem = document.createElement('li'); 
//     ingredientItem.classList.add("item");
//     ingredientItem.textContent = ingredient;
//     return ingredientItem
// });

// menuIngredients.append(...ingredientItems);

//* and better - function

const menuIngredients = document.getElementById("ingredients");

const ingredientItems = ingredients => {
  return ingredients.map((ingredient) => {
   
    const ingredientItem = document.createElement('li'); 
      ingredientItem.classList.add("item");
      ingredientItem.textContent = ingredient;
      return ingredientItem
  });
};

const elements = ingredientItems(ingredients);
menuIngredients.append(...elements);

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 3 
//===================================================

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryList = document.querySelector(".gallery");

const imagesArr = images
  .map(({url, alt}) =>
    `<li><img src="${url}" alt="${alt}" class="img"></li>`)
  .join("");

  galeryList.insertAdjacentHTML("beforeend", imagesArr);


// //* _________________________________________________________ *//

//*     ----->     ----->     Task 4 
//===================================================

let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");

incrementBtn.addEventListener("click", incrementClick);

function incrementClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);

function decrementClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 5 
//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
//підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
//у спані повинен відображатися рядок "Anonymous".
//===================================================

// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");


// //* basic:
// textInput.addEventListener("input", (event) => {
//   textOutput.textContent = event.currentTarget.value
// });

// //* option 1:
// textInput.addEventListener("input", (event) => {
//     const inputValue = event.currentTarget.value;
//     if (inputValue === "") {
//       textOutput.textContent = "Anonymous";
//     } else {textOutput.textContent = inputValue;}
//   });

// //* option 2:
// textInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value === "") {
//       textOutput.textContent = "Anonymous";
//     } else {textOutput.textContent = event.currentTarget.value;}
//   });

//* option 3 = better:

// textInput.addEventListener("input", (textInput) => {
//     textInput.currentTarget.value.trim() === "" ? 
//     textOutput.textContent = "Anonymous"  
//     : textOutput.textContent = textInput.currentTarget.value.trim()
//   });


// //* _________________________________________________________ *//

//*     ----->     ----->     Task 6
//===================================================

// const inputElem = document.querySelector("#validation-input");

// inputElem.addEventListener("blur", () => {
//   const inputLength = inputElem.value.trim().length;
//     const inputSetLength = Number(inputElem.dataset.length);

//     if (inputLength === inputSetLength) {
//         inputElem.classList.remove("invalid");
//         inputElem.classList.add("valid");
//     } else if (inputLength === 0) {
//         inputElem.classList.remove("valid", "invalid");
//     } else {
//         inputElem.classList.add("invalid");
//         inputElem.classList.remove("valid")}

//     console.log(inputLength)   
// });

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 7 

// const slider = document.querySelector("#font-size-control");

// slider.addEventListener("input", () => {
//     const elemSize = slider.value;
//     text.style.fontSize = elemSize + "px";
// })
//===================================================

// const inputValueEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");
// inputValueEl.addEventListener('input', () => {
//   const fontSize = inputValueEl.value + 'px';
//   textEl.style.fontSize = fontSize;
// });
// // Синхронізація розміру тексту з положенням ползунка
// const initialFontSize = inputValueEl.value + 'px';
// textEl.style.fontSize = initialFontSize;

//* -------------------
const slider = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

slider.addEventListener("input", () => {
  const elemSize = slider.value;
  inputTextEl.style.fontSize = elemSize + "px";
});

const initialElemSize = slider.value;
inputTextEl.style.fontSize = initialElemSize + "px";



//* -------------------
//* starting with middle value for text size:
// const slider = document.querySelector("#font-size-control");
// const inputTextEl = document.querySelector("#text");

// function handleInput() {
//   const elemSize = slider.value;
//   inputTextEl.style.fontSize = `${elemSize}px`;
// }

// slider.addEventListener("input", handleInput);

// slider.value = (parseInt(slider.min) + parseInt(slider.max)) / 2;
// handleInput();

//* -------------------
//* або
// const slider = document.querySelector("#font-size-control");
// const inputTextEl = document.querySelector("#text");

// function handleInput() {
//   inputTextEl.style.fontSize = `${slider.value}px`;
// }
// inputEl.addEventListener("input", handleInput);

//* -------------------
//*
// const slider = document.getElementById("font-size-control");
// const textEl = document.getElementById("text");
// inputEl.addEventListener("input", function () {
//   textEl.style.fontSize = slider.value + "px";
// });

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 8
//===================================================

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === "") {
      
        return alert(`Please fill out all the fields`);
        // return;
    }
           const loginObj = {
        email: email.value,
        password: password.value,
    }
    console.log(loginObj);
    event.currentTarget.reset();
};

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 9 
//===================================================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const widget = document.querySelector(".widget");
// console.dir(body);
const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);
function changeColor() { 
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  // widget.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
}

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 10 
//===================================================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputEl = document.querySelector("#controls input");
// const createBtnEl = document.querySelector("button[data-create]");
// const destroyBtnEl = document.querySelector("button[data-destroy]");
// const boxesEl = document.querySelector("#boxes");

// inputEl.addEventListener("input", onGetNumber);
// createBtnEl.addEventListener("click", onCreate);
// destroyBtnEl.addEventListener("click", clearBoxes);

// function onGetNumber(event) { 
// createBtnEl.value = event.currentTarget.value
// };

// function onCreate() { 
//   createBoxes(createBtnEl.value) 
// };

// function createBoxes(amount) { 
//   let boxSize = 30;
//   const boxesArr = [];

//   if (amount > 0) {
//     for (let i = 0; i < amount; i += 1) {
//     const boxEl = document.createElement("div");

//     boxEl.style.width = `${boxSize}px`;
//     boxEl.style.height = `${boxSize}px`;
//     boxEl.style.backgroundColor = getRandomHexColor(); 
//     boxSize += 10; 
//     boxesArr.push(boxEl);
//     }
//   }
//   boxesEl.append(...boxesArr)
// };

// function clearBoxes() { 
//   boxesEl.innerHTML = "";
//   inputEl.value = "";
//   createBtnEl.value = "";
// };

//* -------------

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


//*--------------

//* або

// const btnCreateEl = document.querySelector(`[data-create]`);
// const btnDestroyEl = document.querySelector(`[data-destroy]`);
// const amountEl = document.querySelector("input");
// const boxesEl = document.querySelector("#boxes");
// btnCreateEl.addEventListener("click", createBoxes);
// btnDestroyEl.addEventListener("click", destroyBoxes);
// let boxesArray = [];
// function createBoxes(amount) {
//   amount = amountEl.value;
//   let widthEl = 20;
//   for (let i = 1; i <= amount; i++) {
//     const randomColor = getRandomHexColor();
//     widthEl += 10;
//     const box = `<div style="background-color: ${randomColor}; height: ${widthEl}px; width: ${widthEl}px; margin-bottom: 5px"></div>`;
//     boxesArray.push(box);
//   }
//   const boxesStr = boxesArray.join("");
//   boxesEl.innerHTML = boxesStr;
// }
// function destroyBoxes() {
//   boxesEl.innerHTML = "";
//   boxesArray = [];
//   amountEl.value = 0;
// }