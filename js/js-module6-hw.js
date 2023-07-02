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

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");


//* basic:
textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value
});

//* option 1:
textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue === "") {
      textOutput.textContent = "Anonymous";
    } else {textOutput.textContent = inputValue;}
  });

//* option 2:
textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
      textOutput.textContent = "Anonymous";
    } else {textOutput.textContent = event.currentTarget.value;}
  });

//* option 3:

textInput.addEventListener("input", (textInput) => {
    textInput.currentTarget.value === "" ? 
    textOutput.textContent = "Anonymous"  
    : textOutput.textContent = textInput.currentTarget.value
  });


// //* _________________________________________________________ *//

//*     ----->     ----->     Task 6
//===================================================

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
    const inputLength = inputEl.value.length;
    const inputSetLength = Number(inputEl.dataset.length);

    if (inputLength === inputSetLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else if (inputLength === 0) {
        inputEl.classList.remove("valid", "invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid")}

    console.log(inputLength)   
});

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 7 
//===================================================

const slider = document.querySelector("#font-size-control");

slider.addEventListener("input", () => {
    const elemSize = slider.value;
    text.style.fontSize = elemSize + "px";
})

//* або
// const inputEl = document.querySelector("#font-size-control");
// const inputTextEl = document.querySelector("#text");
// function handleInput() {
//   inputTextEl.style.fontSize = `${inputEl.value}px`;
// }
// inputEl.addEventListener("input", handleInput);

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