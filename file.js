// Question 1:

// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
// if i is a mutiple of both 3 and 5, print fizzbuzz
// if i is a mutiple of 3, print fizz
// if i is a mutiple of 5, print buzz
// if i is not a mutiple of both 3 and 5, print i

function fizzBuzz(n) {
  // Write your code here
  let numberArray = [];
  for (let i = 1; i <= n; i++) {
    numberArray.push(i);
  }
  const result = numberArray.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) return "FizzBuzz";
    if (item % 3 === 0) return "Fizz";
    if (item % 5 === 0) return "Buzz";
    else return item;
  });

  return result.join("\n");
}

console.log(fizzBuzz(15));
