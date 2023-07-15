import colors from "./data/colors.js";

// *     ----->     ----->     Example 1                                
// ===================================================
// console.log(`____________________`);
// console.log(`Example 1 :`);

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert("Parent click handler");
});

child.addEventListener("click", () => {
  alert("Child click handler");
});

descendant.addEventListener("click", () => {
  alert("Descendant click handler");
});

console.log(`wow`);

//*     ----->     ----->     Example 2                                
//===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const simpleBox = document.querySelector(".simple-box");
// simpleBox.addEventListener("mousemove", function (evt) { 
//   simpleBox.innerHTML =
//     `clientX - ${evt.clientX} <br> clientY - ${evt.clientY}`
//     console.log(evt.clientX);
//   console.log(evt.clientY);
// });

simpleBox.addEventListener("mouseover", function (evt) { 
  simpleBox.innerHTML =
    `mouse is IN`;
    console.log("mouse is IN");
    console.log(evt.target);
    console.log(evt.relatedTarget);

});

//* why not working?:
simpleBox.addEventListener("mouseout", function (evt) { 
  simpleBox.innerHTML =
    `mouse is OUT`;
    console.log("mouse is OUT");
    console.log(evt.target);
    console.log(evt.relatedTarget);
});

//*     ----->     ----->     Example 3 - Colorpicker                              
//===================================================
console.log(`____________________`);
console.log(`Example 3 - Colorpicker :`);

const paletteContainer = document.querySelector(".js-palette");
const CardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML("beforeend", CardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) { 
//   return colors.map(({ hex, rgb }) => {
//     return `
// <div class="color-card">
//   <div class="color-swatch"
//     data-hex: "${hex}"
//     data-rgb: "${rgb}"
//     style="background-color: ${hex}">
//   </div>
//   <div class="color-meta">
//     <p>HEX: ${hex}</p>
//     <p>RGB: ${rgb}</p>
//   </div>
// </div>`;
//   }).join("");
// }

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join('');
}



function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

document.body.addEventListener('click', onBodyClick);

function onBodyClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    const isOutsideColorCards = !evt.target.closest('.color-card');

    if (isOutsideColorCards) {
      // Reset the background color to normal
      setBodyBgColor(''); // Set the desired default background color here
      removeActiveCardClass();
    }
  }
}






//*     ----->     ----->     Example 4                                
//===================================================
console.log(`____________________`);
console.log(`Example 4 :`);


//*     ----->     ----->     Example xx                                
//===================================================
console.log(`____________________`);
console.log(`Example xx :`);

//*     ----->     ----->     Example xx                                
//===================================================
console.log(`____________________`);
console.log(`Example xx :`);