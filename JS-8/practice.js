// let num = [2, 4, 6, 8];
// let double = num.map((el) => {
//   return el * 2;
// });
// let squire = num.map((el) => {
//   return el * el;
// });

// let arr = [1, 2, 3, 4, 5];
// let each = function print(el) {
//   console.log(el);
// };
// arr.forEach(print);

// let num = [2, 3, 4, 5, 6, 7, 8, 9];
// let even = num.filter((el) => {
//   return el % 2 == 0;
// });
// console.log(even);

// let student = [
//   {
//     name: "Partho",
//     marks: 70,
//   },
//   {
//     name: "saad",
//     marks: 95,
//   },
//   {
//     name: "Balla",
//     marks: 67,
//   },
// ];
// let gpa = student.map((el) => {
//   return el.marks / 20;
// });
// let odd = student.filter((el) => {
//   return el.marks % 2 != 0;
// });

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let ev = num.every((el) => {
//   return el % 2 == 0;
// });

// let a = [2, 1, 3, 4, 5, 3];
// let b = a.some((el) => {
//   return el % 2 == 0;
// });

// let arr = [2, 4, 6, 8, 10];
// let ans = arr.reduce((res, el) => {
//   return res + el;
// });

// let arr = [1, 2, 3, 4, 5, 0, -1];
// let mi = arr.reduce((min, el) => {
//   if (min > el) {
//     return el;
//   } else {
//     return min;
//   }
// });

// function print(a, b = 4) {
//   console.log(a * b);
// }
// print(5);

// let arr = [1, 2, 3, 4, 8, 5];
// console.log(...arr);
// let first = "Partho";
// let last = "Pritham das";
// let arr = [...first, ...last];

// let char = [..."Partho"];

// let data = {
//   name: "Partho",
//   username: "partho123",
//   password: "abcd",
// };
// let dataCopy = [data, (id = 123)];

// let arr = [1, 2, 3, 4, 5];
// let obj = { ...arr };

// let ans = function sum(...inp) {
//   return inp.reduce((add, el) => add + el);
// };
// sum(1, 2, 3, 4, 5, 6);

// function sum(...inp) {
//   console.log(arguments);
// }
// sum(1, 2, 34, 4);

// let names = ["tony", "bruce", "peter", "steve"];
// let [winner, runnerup, ...others] = names;

// const student = {
//   name: "Partho",
//   username: "das12",
//   password: "23442",
//   id: 1234,
//   location: ["bagerhat", "mollahat"],
// };
// let { username, password: secret, city = "mumbhi" } = student;

// let arr = [1, 2, 3, 4, 5];
// let squire = arr.map((el) => {
//   return el * el;
// });
// let sum = arr.reduce((add, el) => {
//   return add + el;
// });
// let avg = arr.reduce((add, el) => {
//   return (add + el) / 5;
// });

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.map((el) => {
//   return el + 5;
// });

// let arr = ["a", "b", "c", "d"];
// let ans = arr.map((el) => {
//   return el.toLocaleUpperCase();
// });

// let doubleAndReturnArgs = (arr, ...args) => {
//   arr,
//     args.map((el) => {
//       el * 2;
//     });
// };
// doubleAndReturnArgs([1, 2], 3, 4, 5);

// let mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
