// *     ----->     ----->     Example 1                                
// ===================================================
console.log(`____________________`);
console.log(`Example 1 :`);

// Will run first
console.log("First log");

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 2000);

// Will run second
console.log("Third log");

// *     ----->     ----->     Example 2                                
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const button = document.querySelector("button");

const onClick = () => {
  setTimeout(() => {
    alert("I love async JS!");
  }, 2000);
};

// Two seconds after clicking the button, 
// alert specified inside the setTimeout callback will appear.
button.addEventListener("click", onClick);


// *     ----->     ----->     Example 3                                
// ===================================================
console.log(`____________________`);
console.log(`Example 3 :`);

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => { 
    timerId = setInterval(() => {
    console.log("I love async JS! ${Math.random()}");
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.log("Interval with id ${timerId} has stopped!")
});


// *     ----->     ----->     Example 2                                
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

// *     ----->     ----->     Example 2                                
// ===================================================
console.log(`____________________`);
console.log(`Example 2 :`);

const date = new Date();

date.setMinutes(50);
console.log(date);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
console.log(date);
// "Tue May 08 2040 14:50:00 GMT+0300"