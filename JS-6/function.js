// function funcName() {
//   console.log("Hello");
// }
// // funcName();

// function print1to5() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// // print1to5();

// function isAdult() {
//   let age = 18;
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("Not adult");
//   }
// }
// // isAdult();

// function dice() {
//   let rand = Math.floor(Math.random() * 6) + 1;
//   console.log(rand);
// }
// // dice();
// // dice();
// // dice();
// // dice();

// function sum(a, b) {
//   console.log(a + b);
// }
// // sum(3, 4);
// // sum(3, 5);
// // sum(2, 4);

// function info(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }
// // info("Partho", 20);

// function avg(a, b, c) {
//   console.log((a + b + c) / 3);
// }
// // avg(9, 3, 27);
// // avg(2, 3, 2);

// function multiplication(a) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(a * i);
//   }
// }
// // multiplication(4);

// function isAdult(age) {
//   if (age >= 18) {
//     return "Adult";
//   } else {
//     return "Not Adult";
//   }
// }
// // console.log(isAdult(20));

// function nsum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = i + sum;
//   }
//   return sum;
// }

// let string = ["p", "a", "r", "t", "h", "o"];
// function concatanation(string) {
//   let str = "";
//   for (let i = 0; i < string.length; i++) {
//     str += string[i];
//   }
//   return str;
// }

// // let sum = 54; // Global scope
// function calsum(a, b) {
//   let sum = a + b;
//   // console.log(sum);   // function scope
// }

// calsum(2, 6);

// {
//   let a = 24; // block scope
// }

// {
//   for (let i = 1; i <= 5; i++) {
//     // console.log(i);     // block scope
//   }
// }

// function outterFunc() {
//   let x = 13;
//   let y = 34;
//   function innerFunc() {
//     console.log(x); // lexical scope
//     // let a = 23;
//   }
//   innerFunc();
// }

// let greet = "Hello";
// function changeGreet() {
//   let greet = "Nomoskar";
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);
//   }
//   innerGreet();
// }
// console.log(greet);
// changeGreet();

// let name = function (a, b) {
//   return (sum = a + b);
// };
// name(2, 3);
// console.log(name);

// function multipleGreet(print, count) {
//   for (let i = 1; i <= count; i++) {
//     print();
//   }
// }
// let greet = function () {
//   console.log("Hello");
// };
// multipleGreet(greet, 10);

// function oddoreven(request) {
//   if (request == "odd") {
//     console.log(!(n % 2 == 0));
//   } else if (request == "even") {
//     console.log(n % 2 == 0);
//   } else {
//     console.log("wrong request");
//   }
// }
// let request = "odd";

// const calculator = {
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
