// Question 1: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// method 1
const doubleChar = (str, c = "") => {
  for (i = 0; i < str.length; i++) c += str[i].repeat(2);
  return c;
};

// another method

const doubleChar1 = (str) =>
  str
    .split("")
    .map((s) => s + s)
    .join("");

console.log(doubleChar("aderemi"));
console.log(doubleChar1("aderemi"));
console.log(doubleChar1("DeVRemy"));

// Question 2: Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// using forEach method
const findAverage = (array, result = 0) => {
  array.forEach((item) => (result += item / array.length));
  if (array.length == 0) return 0;
  return result;
};

// using reduce method
let findAverage2 = (arr, result) => {
  result = arr.reduce((eachYear, number) => eachYear + number, 0);
  if (arr.length === 0) return 0;
  return result / arr.length;
};

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage2([1, 2, 3, 4]));

// question 3

// Arrange this array in alphabetical order [ 'alert', 'Abeg', 'zion', 'Kettle', 'draw' , 'DRum'], Let the returned array show no changes in the letter casing of the array

const sortWords = (arr) => arr.sort((a, b) => a.localeCompare(b));

console.log(sortWords(["alert", "Abeg", "zion", "Kettle", "draw", "DRum"]));

// Question 4: Array Peaks and Valleys
// Write a function that takes an array of numbers and rearranges the elements in "peaks" and "valleys." In a peak, the adjacent elements are decreasing, and in a valley, the adjacent elements are increasing.
// For example, if the input array is [5, 3, 1, 2, 3], the function could rearrange it to [5, 1, 3, 2, 3].

// algorithm
// find the max and min in the array,
// for each maximum item push a minimum item

const peakAndValley = (arr, otherArr = []) => {
  const max = () => Math.max(...arr);
  const min = () => Math.min(...arr);
  const sorted = arr.sort((max, min) => min - max);
  const push = () => otherArr.push(sorted.shift());
  const pop = () => otherArr.push(sorted.pop());
  for (i = 0; i < sorted.length; i++) {
    while (i == max() || (i == min() && sorted)) {
      push();
      pop();
      ++i;
    }
  }

  return otherArr;
};

console.log(peakAndValley([5, 3, 1, 2, 3]));
console.log(peakAndValley([5, 3, 1, 2, 3, 7, 4, 6]));

// Question 5: Longest Consecutive Subsequence
// Write a function that takes an array of integers and finds the length of the longest consecutive subsequence.

// For example, if the input array is [100, 4, 200, 1, 3, 2], the function should return 4, as the longest consecutive subsequence is [1, 2, 3, 4].

// using nested forEach method
const longestConsecutive = (arr, min, result = []) => {
  min = Math.min(...arr);
  arr.forEach((number, idx, arr) => {
    arr.forEach((each) => {
      if (each + min == idx) result.push(each);
    });
  });

  console.log(result);
  return result.length;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// using filter method
const longest = (arr, arr2 = []) => {
  const min = Math.min(...arr);
  arr.filter((val, idx, arr) => {
    arr.forEach((number) => {
      if (number + min == idx) {
        arr2.push(number);
      }
    });
  });

  return arr2.length;
};

console.log(longest([100, 4, 200, 1, 3, 2]));

// using Find Method
function longest5(arr, result = []) {
  const min = Math.min(...arr);
  arr.find((number, idx, arr) => {
    arr.forEach((each) => {
      if (each + min == idx) {
        return result.push(each);
      }
    });
  });
  console.log(result);
  return result.length;
}

console.log(longest5([100, 4, 200, 1, 3, 2]));

// question 6
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// method 1: using find method;

function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

// method 2: using find method;

function firstNonConsecutive1(arr, result = []) {
  result = arr.find((number, idx) => {
    if (number !== ++idx) {
      return number;
    }
  });

  if (result) return result;
  return null;
}

// method 3: using filter method
function firstNonConsecutive3(arr) {
  let res = arr.filter((val) => arr.indexOf(val) + arr[0] !== val);
  return res.length !== 0 ? res[0] : null;
}

// method 4: Using For Loop
function firstNonConsecutive4(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is one greater than the previous element. if not return current element
    if (arr[i] !== arr[i - 1] + 1) return arr[i];
  }
  return null;
}

// method 5: forEach method
function firstNonConsecutive5(arr) {
  let i = arr[0];
  let first = [];
  arr.forEach((el) => {
    if (i != el) {
      first.push(el);
    }
    ++i;
  });
  return first[0] == undefined ? null : first[0];
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive1([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive3([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive4([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive5([1, 2, 3, 4, 6, 7, 8]));

//Bonus exercise: Create an array counting from 1 to 10

let num1To10 = Array.from({ length: 10 }, (each, index) => ++index);

console.log(num1To10);

// question 7
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// method 1
const lovefunc = (flower1, flower2) =>
  (flower1 % 2 !== 0 && flower2 % 2 === 0) ||
  (flower2 % 2 !== 0 && flower1 % 2 === 0)
    ? true
    : !flower1 && !flower2
    ? false
    : !flower1 || !flower2
    ? true
    : false;

// method 2
const lovefunc2 = (flower1, flower2) =>
  (flower1 % 2 == 0 && flower2 % 2 != 0) ||
  (flower1 % 2 != 0 && flower2 % 2 == 0)
    ? true
    : false;

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(1, 0));
console.log(lovefunc(0, 0));

console.log(lovefunc2(1, 4));
console.log(lovefunc2(2, 2));
console.log(lovefunc2(0, 1));
console.log(lovefunc2(0, 0));

/* question 8
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
const sumOfNumbersTo = (destination, sum = 0) => {
  for (i = destination; i >= 1; i--) sum += i;
  return sum;
};

console.log(sumOfNumbersTo(7));
console.log(sumOfNumbersTo(10));

// question: 9
// Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.

function countEvenNumbersWithin(destination) {
  let sum = 0;
  let count = 0;
  let arrayOfEvenNumbers = [];

  for (i = destination; i >= 1; i--)
    if (i % 2 === 0) arrayOfEvenNumbers.push(i);
  for (let i of arrayOfEvenNumbers) sum += i;
  count = arrayOfEvenNumbers.length;

  return {
    // property value shorthand
    // when the property name and the value name are the same
    // you can just write the property name in your object
    count,
    sum,
    arrayOfEvenNumbers,
  };
}

console.log(countEvenNumbersWithin(10));
console.log(countEvenNumbersWithin(30));

// question 10
// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
// Note that the age is provided by the user in a text box (which you can try in the browser tab).
// However, when the text box is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.

const getNextAge = (age) => {
  if (age) return ++age;
  if (isNaN(age.valueOf)) return 0;
};

console.log(getNextAge(20));

// question 11
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(list, newArr = []) {
  list.filter((item) => {
    if (Number.isInteger(item)) newArr.push(item);
  });
  return newArr;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// method 2
function filter_list2(l) {
  return l.filter((x) => typeof x == "number");
}

console.log(filter_list2([1, 2, "a", "b"]));
console.log(filter_list2([1, "a", "b", 0, 15]));
console.log(filter_list2([1, 2, "aasf", "1", "123", 123]));

// question 12
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let newStr = str.split("");
  const filterX = newStr.filter(
    (item) => item === "x" || item === "x".toUpperCase()
  );
  const filterO = newStr.filter(
    (item) => item === "o" || item === "o".toUpperCase()
  );
  return filterX.length === filterO.length;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));

// question 13
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// for example: "ATTGC" --> "TAACG"
//              "GTAT" --> "CATA"

const completeStrand = (str) => {
  let newS = str.replace(/T/g, "A");
  let newSS = newS.replace("A", "T");
  let result = newSS.replace("C", "G");
  let final = result.replace("G", "C");
  return final;
};

console.log(completeStrand("ATTGC"));
console.log(completeStrand("GTAT"));

// question 14
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// eg. input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  let output = [];
  data.forEach((person) => {
    let [age, handicap] = person;
    age >= 55 && handicap >= 7 ? output.push("senior") : output.push("open");
  });
  return output;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

// method 2

function openOrSenior1(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior1([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

// question 15
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num != Math.abs(num) ? num : +`-${num}`;
}

console.log(makeNegative(-5));
console.log(makeNegative(0.12));

// method 2
function makeNegative1(num) {
  return -Math.abs(num);
}

console.log(makeNegative1(-5));
console.log(makeNegative1(-55));

function makeNegative2(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative2(-5));
console.log(makeNegative2(-55));

// question 16
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square.

function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare(625));
console.log(findNextSquare(144));
console.log(findNextSquare(121));
console.log(findNextSquare(114));

// question 17

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

const check = (_, __) => _.includes(__);

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(["what", "a", "great", "kata"], "kat"));

function check2(a, x) {
  return a.indexOf(x) === -1 ? false : true;
}

console.log(check2([66, 101], 66));
console.log(check2([101, 45, 75, 105, 99, 107], 107));
console.log(check2(["what", "a", "great", "kata"], "kat"));

// question 18

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  return name.slice(0, 1) === "b" || name.slice(0, 1) === "B"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

// another method

const areYouPlayingBanjoo = (name) =>
  name.startsWith("b") || name.startsWith("B")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Bayo"));
console.log(areYouPlayingBanjo("rolf"));
console.log(areYouPlayingBanjoo("Bola"));
console.log(areYouPlayingBanjoo("Remy"));

// question 19
// This time no story, no theory. The examples below show you how to write function accum:
// example
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let newS = s.split("");
  let d = [];
  newS.forEach((item, idx) => {
    d.push(item.repeat(idx + 1));
  });

  let mapped = d.map((item) => {
    let firstLetter = item.slice(0, 1).toUpperCase();
    let lastLetter = item.slice(1);
    let g = firstLetter + lastLetter;
    return g;
  });

  console.log(mapped.join("-"));
  return mapped.join("-");
}

// arrow function

const accum1 = (s, d = [], newS = s.split("")) => {
  newS.forEach((item, idx) => {
    d.push(item.repeat(idx + 1));
  });

  let mapped = d.map((item) => {
    let firstLetter = item.slice(0, 1).toUpperCase();
    let lastLetter = item.slice(1).toLowerCase();
    let g = firstLetter + lastLetter;
    return g;
  });

  return mapped.join("-");
};

console.log(accum("abcd"));
console.log(accum1("abcd"));

// another method

function accum2(s) {
  return s
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum2("abcd"));

// using for-loop Method

function accum3(s) {
  var array = [];
  for (i = 0; i < s.length; i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  }
  return array.join("-");
}

console.log(accum3("abcd"));

// question 20

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

const isSquare = function (n) {
  return n < 0 ? false : (result = Number.isInteger(Math.sqrt(Math.abs(n))));
};

// method 2
const isSquare2 = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare(-1));
console.log(isSquare(-4));
console.log(isSquare(3));
console.log(isSquare(-4.5));
console.log(isSquare(26));
console.log(isSquare(16));
console.log(isSquare(144));
console.log(isSquare2(-4.5));
console.log(isSquare2(26));
console.log(isSquare2(16));
console.log(isSquare2(144));

// question 14
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = str.split("");
  let filtered;
  vowels.forEach((vowel, idx) => {
    console.log(vowel);

    if (newStr.includes(vowel)) {
      filtered = newStr.filter((str) => {
        if (str !== vowel) {
          return str;
        }
      });
    }
  });

  return filtered.join("");
}

console.log(disemvowel("This website is for losers LOL!"));

// Question 15: Subarray with Maximum Sum
// Write a function that takes an array of numbers and finds the contiguous subarray (subsequence) with the largest sum.
// For example, if the input array is [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds to the subarray [4, -1, 2, 1].

// algorithm
// find contiguous subarray (subsequence) in the array
// get the sum of the arrays,
// find the largest sum
// return the largest sum
// array.of to convert contigous elements into array
// use reduce method to find sum of the array
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 100);

// (result);

// const maximumSubArray = (arr) => {
//   let result = [];
//   let add = 0;
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   result = arr.forEach((number, idx) => {
//     console.log(number);
//     if (Math.max(number + idx)) {
//       result.push(idx);
//     }
//   });

//   console.log(result);

//   // const reduced = arr.reduce((max, min, idx) => {
//   //     let maxmus = max + min
//   //     maxmus += idx
//   // }, min)

//   // const reduced = arr.reduce()
//   // arr.find((number, idx, arr) => {

//   // })
// };

// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// question 16
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// Examples: nb_year(1500, 5, 100, 5000) -> 15, nb_year(1500000, 2.5, 10000, 2000000) -> 10

// function nb_year (p0, percent, aug, p) {
//     let eachYear = 1;
//     let arr = []

//     // eachYear = (p0 + p0 * percent + aug);
//     // let newT = (eachYear + eachYear * percent + aug)
//     // let newTT = (newT + newT * percent + aug)
//     for ( let i = eachYear; p0 <= p; i++) {
//         while (p0 <= p) {
//             eachYear = (p0 + p0 * percent ) + aug
//             arr.push(eachYear);

//         };
//     }

//     console.log(arr);
//     return arr.length

// }

// console.log(nb_year(1000, 0.02, 50, 1200));
// console.log(nb_year(1500, 5, 100, 5000));

let myName = "DEV REMY";
document.title = prompt("who is this?", myName);
document.body.style = "background-color:green;";
let header = document.createElement("h1");
let next = document.createElement("div");
header.textContent = "HELLO WORLD";
header.style = "color:orange";
next.textContent = `THIS IS ${document.title}`;
document.body.append(header, next);
next.style =
  "font-size:2rem;margin:10rem;padding:5rem;color:papayawhip;text-align:center;";
next.style.border = "9px solid red";
console.log(header);
