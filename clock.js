// const HRHAND = document.querySelector("#hour");
// const MINHAND = document.querySelector("#minute");
// const SECHAND = document.querySelector("#second");

// var date = new Date();
// console.log(date);
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// let secPosition = sec*360/60;
// let minPosition = (min * 360 / 60) + (secPosition / 60);
// let hrPosition = (hr*360/12)+(minPosition/12);



// function runTheClock() {
    
//     hrPosition = hrPosition+(1/120);
//     minPosition = minPosition+(1/10);
//     secPosition = secPosition+6;

//     HRHAND.style.transform = "rotate(" + hrPosition + "deg)";
//     MINHAND.style.transform = "rotate(" + minPosition + "deg)";
//     SECHAND.style.transform = "rotate(" + secPosition + "deg)";

// }

// var interval = setInterval(runTheClock, 1000);


// Getting the arms
const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// setting the angle the each arm should rotate
let secPosition = sec*360/60;
let minPosition = (min * 360 / 60) + (secPosition / 60);
let hrPosition = (hr*360/12)+(minPosition/12);


function runClock() {
    // refreshing the position
    hrPosition = hrPosition+(1/120);
    minPosition = minPosition+(1/10);
    secPosition = secPosition+6;
    
    // rotating the arms
    HRHAND.style.transfrom = "rotate(" + hrPosition + "deg)";
    MINHAND.style.transform = 'rotate(' + minPosition + 'deg)';
    SECHAND.style.transform = 'rotate(' + secPosition + 'deg)';

};

let interval = setInterval(runClock, 1000);