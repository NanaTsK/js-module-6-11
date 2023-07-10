
//*     ----->     ----->     Example 1                                
//===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

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
simpleBox.addEventListener("mousemove", function (evt) { 
  simpleBox.innerHTML =
    `clientX - ${evt.clientX} <br> clientY - ${evt.clientY}`
    console.log(evt.clientX);
    console.log(evt.clientY);
});

//*     ----->     ----->     Example xx                                
//===================================================
console.log(`____________________`);
console.log(`Example xx :`);