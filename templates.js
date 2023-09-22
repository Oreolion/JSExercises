// Range utility logic
const range = (start, end, step = 1) => {
    let output = [];
  
    
    // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
    // a conditional check for end
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
  
    for (let i = start; i < end; i += step) output.push(i)
    
    return output;
};


console.log(range(20));
console.log(range(20,40));
console.log(range(20, 40, 2));


const getSum = (num, sum = 0 ) => {
    for (i = 0; i <= num.length; i++) sum += i
    return sum
}

console.log(getSum(range(20)));



// Clamp Utility
// clamp (50-100) get a random number between 50 and 100.

function clamp (min, max) {
    let value = Math.floor(Math.random()*(max - min) + min)
    console.log(value);
    return value;
}

console.log(clamp(50, 100));
console.log(clamp(30, 100));



// create star rating component.
// [...Array(rating)].map((each) => ( <img
  //     alt=""
  //     className="gold-star"
  //     src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
//   />))


// Array of Random numbers Utility

const randomDiceNum = () => Math.floor(Math.random() * 6) + 1;
const diceArray = Array.from({ length: 100 }, () => randomDiceNum());

console.log(diceArray);


let num1To10 = Array.from({ length: 10 }, (each, index) => ++index);

console.log(num1To10);

  
 // check if number has a decimal
 function number_test(n) {
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return 'Number has a decimal place.';
   else
     return 'It is a whole number.';
}

console.log(number_test(25.66));

console.log(number_test(10));


// Javascript function for creating Components

function mk(type, props, children) {
    const el = document.createElement(type);
    if (props) Object.assign(el, props);
    if (children) el.append(...children);
    return el;
}

console.log(mk("div"));
  