// Assignment1
// ====== A
console.log("Assignment 1 - A");
// === 1 - Convert the string "123" to a number and add 7.
console.log("A-1");
let a = "123";
console.log(+a + 7);
// === 2 - Check if the given variable is falsy and return "Invalid" if it is.
console.log("A-2");
let x = 0;
if (Boolean(x) === false) {
  console.log("Invalid");
}
// === 3 - Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
console.log("A-3");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
// === 4 - Create an array of numbers and return only the even numbers using filter method.
console.log("A-4");
let numbers = [1, 2, 3, 4, 5];
function isEven(num) {
  return num % 2 === 0;
}
let results = numbers.filter(isEven);
console.log(results);
// === 5 - Use the spread operator to merge two arrays, then return the merged array.
console.log("A-5");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// === 6 - skipped

// === 7 - Create an array of strings and return their lengths using map method
console.log("A-7");
let stringArray = ["a", "ab", "abc"];
function getLength(str) {
  return str.length;
}
let arrlengths = stringArray.map(getLength);
console.log(arrlengths);
// === 8 - Write a function that checks if a number is divisible by 3 and 5.
console.log("A-8");
function divid(y) {
  if (y % 5 == 0 && y % 3 == 0) {
    console.log(y + " divisible by both");
  } else {
    console.log(y + " not divisible by both");
  }
}
divid(15);
// === 9 - Write a function using arrow syntax to return the square of a number
console.log("A-9");
let squareNum = (n) => n * n;
console.log(squareNum(5));
// === 10 - Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
console.log("A-10");
const person = { name: "John", age: 25 };
function formatData(name, age) {
  console.log(name + " is " + age + " years old.");
  return name + " is " + age + " years old.";
}
formatData(person.name, person.age);
// === 11 - Write a function that accepts multiple parameters (two or more) and returns their sum.
console.log("A-11");
function sums(a, b, c, d, e) {
  console.log(a + b + c + d + e);
  return a + b + c + d + e;
}
sums(1, 2, 3, 4, 5);
// === 12 - skipped
// === 13 - Write a function to find the largest number in an array.
console.log("A-13");
let numArray = [1, 3, 7, 2, 4];
function findLargest(arr) {
  console.log(Math.max(...arr));
  return Math.max(...arr);
}
findLargest(numArray);
// === 14 - Write a function that takes an object and returns an array containing only its keys.
console.log("A-14");
function objKeys(obj) {
  console.log(Object.keys(obj));
  return Object.keys(obj);
}
objKeys(person);
// === 15 - Write a function that splits a string into an array of words based on spaces
console.log("A-15");
let inputString = "The quick brown fox";
function splitString(str) {
  let wordsArray = str.split(" ");
  console.log(wordsArray);
  return wordsArray;
}
splitString(inputString);
