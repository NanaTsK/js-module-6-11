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

//* and better:

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

//*     ----->     ----->     Example 7 - xxx
//===================================================



// //* _________________________________________________________ *//

//*     ----->     ----->     Task 8
//===================================================


const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);



function handleSubmit(event) {
    event.preventDefault();

    // let login = {
    //     email: email.value,
    //     password: password.value,
    // }

    const {elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert(`Please fill out all the required fields`);
    }
    // console.log(login);
    event.currentTarget.reset();
};




// //* _________________________________________________________ *//

//*     ----->     ----->     Example 9 - xxx
//===================================================



// //* _________________________________________________________ *//

//*     ----->     ----->     Example 10 - xxx
//===================================================