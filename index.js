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
// ==============================
// ====== B
console.log("Assignment 1 - B");
// === 1 - skipped.
// === 2 -
console.log("B-2");

// Hoisting في جافاسكربت
// هو إن جافاسكربت بترفع كل الـ declarations لأعلى  ال scope بتاعها قبل ما الكود يبدأ يتنفذ وبعدين تبدأ تنفذ الكود سطر بسطر.
// لو حاولت استخدم variable  قبل الـdeclaration  النتيجة هتختلف حسب طريقة الـ declaration
console.log(name); // output => undefined
var name = "Hassan";

/**
 * 
 
 Temporal Dead Zone (TDZ) 
ال variables معمول لها hoist
و لكن مبقدرش اوصل للقيم بتاعتها  الا بعد ما الـ declaration  يتنفذ

 */

// console.log(age);  output => ReferenceError: Cannot access 'age' before initialization
// console.log(salary); // output => ReferenceError: Cannot access 'salary' before initialization
let age = 30;
const salary = 50000;
// === 3 -
/**
== compare operartor compares values only,
=== compare operator compares values and types.
 */

// === 4 - skipped
// === 5 -
console.log("B-5");
/**
Coercion = The automatic convert of values from one data type to another example: strings to numbers
 */
console.log(8 + "2"); // output = "82" (number to string)
console.log("8" - 2); // output = 6 (string to number)
/**
Conversion = The manual convert of values from one data type to another using built-in functions
 */
console.log(+"123" + 7); // output = 130 (string to number)
console.log(Boolean(1)); // output = true (number to boolean)
