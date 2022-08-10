//Is this number odd?
const isOdd = (num) => num % 2 === 1;

console.log(isOdd(4));
console.log(isOdd(5));

// Exclaim
const exclaim = (str) => `${str}!`;

console.log(exclaim("Allan"));
console.log(exclaim(exclaim("Allan")));

// Double the chars!
const doubleChars = (str) => {
  const letters = str.split("");
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    result += `${letters[i]}${letters[i]}`;
  }
  return result;
};

console.log(doubleChars("Muhanned"));

// At least two elements
const atLeastTwo = (array, fn) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) == 1) count++;
  }
  if (count >= 2) {
    return true;
  } else {
    return false;
  }
};

console.log(atLeastTwo([1, 2, 3, 4, 5], isOdd));
console.log(atLeastTwo([2, 4, 6], isOdd));
console.log(atLeastTwo([1, 2, 3, 4, 5], (t) => t > 3));

// Repeat the function x times
const repeatRecursive = (input, num, callback) => {
  if (num === 0) return input;
  return repeatRecursive(callback(input), num - 1, callback);
};

const repeat = (input, num, callback) => {
  let result = input;
  for (i = 0; i < num; i++) {
    result = callback(result);
  }
  return result;
};

console.log(repeat("Kutay", 3, exclaim));
console.log(repeat("Kutay", 2, doubleChars));
