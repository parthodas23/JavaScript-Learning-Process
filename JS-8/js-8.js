// let arr = [1, 2, 3, 4, 5];
// function print(el) {
//   console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function all(el) {
//   console.log(el);
// });

// let num = [1, 2, 3, 4, 5];
// let double = num.map((el) => {
//   return el * 2;
// });
// let double2 = num.map((el) => {});
// let student = [
//   {
//     name: "partho",
//     marks: 70,
//   },
//   {
//     name: "jitu",
//     marks: 95,
//   },
//   {
//     name: "misba",
//     marks: 65,
//   },
// ];
// let gpa = student.map((el) => {
//   return el.marks / 20;
// });

// let arr = [2, 3, 4, 5, 6];
// let ans = arr.every((el) => {
//   return el % 2 == 0;
// });
// console.log(ans);

// let num = [2, 3, 4, 5, 6];
// let final = num.reduce((res, el) => {
//   return res + el;
// });
// console.log(final);

// let num = [2, 4, 13, 5, 47, 23];
// let final = num.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(final);

// let num = [10, 20, 30];
// let final = num.every((el) => {
//   return el % 10 == 0;
// });
// console.log(final);

// let num = [2, 1, 45, 6, -23, 7, 3, 4, 0];
// let final = num.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });
// console.log(final);

// // function sum(a=2, b) {
//   return a + b;
// }
// sum(2);

// let arr = [2, 1, 3, 5, 3];
// console.log(...arr);
// let chars = [..."hello"];
// console.log(chars);

// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7];
// let arr = [...odd, ...even];

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args) {
//   console.log(msg);

//   return args.reduce((min, el) => {
//     if (min > el) {
//       return el;
//     } else {
//       return min;
//     }
//   });
// }

// let names = ["partho", "das", "bagerhat"];
// let [name, ...others] = names;

// const student = {
//   name: "partho",
//   age: 20,
//   username: "partho@123",
//   location: ["bagerhat", "mollahat"],
//   password: "abcd",
// };
// let { username, password: secret, city = "mumbhi" } = student;
