// function funcName() {
//   console.log("Hello Wrold");
// }
// funcName();

// function print1to5() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// print1to5();

// function isAdult() {
//   let age = 10;
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("Not Adult");
//   }
// }
// isAdult();

// function print6() {
//   let rand = Math.floor(Math.random() * 6) + 1;
//   console.log(rand);
// }
// print6();

// function name(arg1, arg2) {
//   console.log(`${arg1}'s age is ${arg2}.`);
// }
// name("Partho", 20);

// function sum(a, b) {
//   return a + b;
// }
// sum(2, 3);

// function avg(a, b, c) {
//   let ans = (a + b + c) / 3;
//   return ans;
// }
// avg(5, 5, 5);

// function multiplication(a) {
//   for (let i = a; i <= a * 10; i = i + a) {
//     console.log(i);
//   }
// }
// multiplication(4);

// function isAdult(age) {
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("Not Adult");
//   }
// }

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// function sumN(n) {
//   let num = 0;
//   for (let i = 1; i <= n; i++) {
//     num = num + i;
//   }
//   return num;
// }
// console.log(sumN(4));

// let string = ["P", "a", "r", "t", "h", "o"];
// function concatenation(string) {
//   let empty = [];
//   for (let i = 0; i < string.length; i++) {
//     empty = empty + string[i];
//   }
//   return empty;
// }
// console.log(concatenation(string));

// let name = "Partho"; //Global scope

// function add(a, b) {
//   let sum = a + b;  // Function scope
//   return sum;
// }
// console.log(add(2, 4));

// {
//   let i;  //Block scope
//   for (i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// function outterFunc() {
//   let x = 1;
//   let y = 23;
//   function innerFunc() {
//     console.log(x + y); // use Lexical scope
//     let a = 20;
//   }
//   innerFunc();
// }
// outterFunc();

// let greet = "Hello";
// function changeGreet() {
//   let greet = "Nameste";
//   function innerGreet() {
//     console.log(greet);
//   }
//   innerGreet();
// }
// console.log(greet);

// changeGreet();

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(2, 4));

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }
// let greet = function () {
//   console.log("Hello");
// };
// multipleGreet(greet, 2);
// multipleGreet(function () {
//   console.log("Nameste");
// }, 10);

// function oddeven(request) {
//   if (request == "odd") {
//     return function () {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function () {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("Wrong Request");
//   }
// }
// let request = "odd";

// const calculetor = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };
