// //* _________________________________________________________ *//

//*     ----->     ----->     Task 1 
//===================================================



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

//*     ----->     ----->     Example 3 - xxx
//===================================================



// //* _________________________________________________________ *//

//*     ----->     ----->     Example 4 - xxx
//===================================================



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

//*     ----->     ----->     Example 6 - xxx
//===================================================



// //* _________________________________________________________ *//

//*     ----->     ----->     Task 7 
//===================================================

const slider = document.querySelector("#font-size-control");

slider.addEventListener("input", () => {
    const elemSize = slider.value;
    text.style.fontSize = elemSize + "px";
})

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
// console.dir(body);
const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);
function changeColor() { 
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
}

// //* _________________________________________________________ *//

//*     ----->     ----->     Task 10 
//===================================================