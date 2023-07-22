// 
import BSN from "//cdn.jsdelivr.net/npm/bootstrap.native@3.0.5/dist/bootstrap-native.esm.min.js";

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
console.log(`____________________`);
console.log(`Example 3 :`);

try {
    console.log(tet - value);
} catch (err) {
    console.log(err);
} finally { 
    // something to do anyways - remove proloader or close modal window
}

//* Nullish coalescing operator (??)
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// *     ----->     ----->     Example 4  -> setTimeout                               
// ===================================================
console.log(`____________________`);
console.log(`Example 4 :`);

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

// *     ----->     ----->     Example 5   - надоедалка                  
// ===================================================
console.log(`____________________`);
console.log(`Example 5 :`);

//* import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector("#subscription-modal"),
    subscribeBtn: document.querySelector("button[data-subscribe]"),
};
const modal = new BSN.Modal("#subscription-modal");
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

refs.modal.addEventListener("hide.bs.modal", () => { 
    console.log("catch");
    openModal();
});

refs.subscribeBtn.addEventListener("click", () => { 
    hasSubscribed = true;
    modal.hide();

});

function openModal() { 
        if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed ) { 
        console.log("Modal stopped - max attempts reached or subscribed");
        return;
        }
    setTimeout(() => {
    console.log("Open spammy");
        modal.show();
        promptCounter += 1;
}, PROMPT_DELAY);

};




// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
    // if (promptCounter === MAX_PROMPT_ATTEMPTS) { 
    //     console.log("Interval stopped automatically");
    //     clearInterval(intervalId);
    //     return;
    // }
//     console.log("Please Subscribe! -" + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);