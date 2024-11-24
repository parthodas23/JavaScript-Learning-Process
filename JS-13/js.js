// async function greet() {
//   //   throw "some error found."; // error reated keyword
//   return " Hello Wrold !"; // return promise
// }
// greet()
//   .then((result) => {
//     console.log("Greet resolved");
//     console.log("result :", result);
//   })
//   .catch((err) => {
//     console.log("week conection");
//     console.log("error :", err);
//   });

// let demo = async () => {
//   return 5;
// };
// demo();

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let ran = Math.floor(Math.random() * 10) + 1;
//       console.log(ran);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// function changeColor(color, delay) {
//   let h1 = document.querySelector("h1");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("orange", 1000);
//   await changeColor("pink", 1000);
//   await changeColor("green", 1000);
//   await changeColor("blue", 1000);

// function changeColor(color, delay) {
//   let h1 = document.querySelector("h1");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let ranN = Math.floor(Math.random() * 10) + 1;
//       if (ranN > 3) {
//         reject("promise rejected");
//       }

//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("pink", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//   } catch (err) {
//     console.log(err);
//   }

//   let a = 5;
//   console.log("add som :", a + 3);
// }
// demo();
