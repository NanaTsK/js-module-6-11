
import BSN from "//cdn.jsdelivr.net/npm/bootstrap.native@3.0.5/dist/bootstrap-native.esm.min.js";

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


// *     ----->     ----->     Example 4                                
// ===================================================
console.log(`____________________`);
console.log(`Example 4 :`);

// *     ----->     ----->     Example 5                                
// ===================================================
console.log(`____________________`);
console.log(`Example 5 :`);

const date = new Date();

date.setMinutes(50);
console.log(date);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

console.log(date.getDay());

date.setFullYear(2040, 4, 8);
console.log(date);
// "Tue May 08 2040 14:50:00 GMT+0300"

// *     ----->     ----->     Example 6  -> setTimeout                               
// ===================================================
console.log(`____________________`);
console.log(`Example 6 :`);

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const notification = document.querySelector(".js-alert");
notification.addEventListener("click", onNotificationClick);

showNotification();

function onNotificationClick() { 
    hideNotification();
    clearTimeout(timeoutId);
};
function showNotification() { 
    notification.classList.add("is-visible");
    timeoutId = setTimeout(() => {
        //console.log("Alert closed automatically");
        hideNotification();
    }, NOTIFICATION_DELAY);
};

function hideNotification() { 
    notification.classList.remove("is-visible");
};

// *     ----->     ----->     Example 7   - модалка-надоедалка                  
// ===================================================
console.log(`____________________`);
console.log(`Example 7 :`);

//* import BSN from 'bootstrap.native';

// const refs = {
//     modal: document.querySelector("#subscription-modal"),
//     subscribeBtn: document.querySelector("button[data-subscribe]"),
// };
// const modal = new BSN.Modal("#subscription-modal");
// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// openModal();

// refs.modal.addEventListener("hide.bs.modal", () => { 
//     console.log("catch");
//     openModal();
// });

// refs.subscribeBtn.addEventListener("click", () => { 
//     hasSubscribed = true;
//     modal.hide();

// });

// function openModal() { 
//         if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed ) { 
//         console.log("Modal stopped - max attempts reached or subscribed");
//         return;
//         }
//     setTimeout(() => {
//     console.log("Open spammy");
//         modal.show();
//         promptCounter += 1;
// }, PROMPT_DELAY);

// };

// *     ----->     ----->     Example 8                     
// ===================================================
console.log(`____________________`);
console.log(`Example 8 :`);

const date1 = Date.now();
console.log("date1", date1);

// setTimeout(() => { 
//   const date2 = Date.now();

//   console.log("date1", date1);
//   console.log("date2", date2);

//     console.log(date2 - date1);
// }, 3000);


// *     ----->     ----->     Example 9                     
// ===================================================
console.log(`____________________`);
console.log(`Example 9 :`);

// const timer = {

//   start() { 
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const {hours, mins, secs} = getTimeComponents(deltaTime);
        
//       console.log(`${hours}:${mins}:${secs}`);

//       // console.log("start -> startTime", startTime);
//       // console.log(currentTime - startTime);

    
//     }, 1000);
//   }
// };
// timer.start();

// function pad(value) { 
//   return String(value).padStart(2, "0");
// };

// function getTimeComponents(time) {
//     const hours = 
//       pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

// *     ----->     ----->     Example 10                     
// ===================================================
console.log(`____________________`);
console.log(`Example 10 :`);