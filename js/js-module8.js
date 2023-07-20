// *     ----->     ----->     Example 1                                
// ===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

// add buyers in line to the checkout with curretly less buyers:

function fn(arr, cash) { 

    const obj = {};
    for (let i = 1; i <= cash; i += 1 ) { 
        obj[i] = 0;
    }

    console.log(obj);
arr.forEach(buyer => {
    const values = Object.values(obj);
    const minValues = Math.min(...values);
    const currentCash = values.indexOf(minValues) + 1;
    obj[currentCash] += buyer;
    
});
    return obj
};

console.log(fn([12, 3, 5, 6, 2, 15, 7], 3));

// *     ----->     ----->     Example 2                                
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const local = document.querySelector(".js-local");
const session = document.querySelector(".js-session");

local.addEventListener("click", () => {
localStorage.setItem("local", "test local")
});

session.addEventListener("click", () => {
sessionStorage.setItem("session", "test session")

});



// *     ----->     ----->     Example 3                                
// ===================================================
// console.log(`____________________`);
// console.log(`Example 3 :`);

