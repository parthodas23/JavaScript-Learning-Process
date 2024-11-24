// function hello() {
//   console.log("Hello");
// }
// hello(); //Call
// function demo() {
//   hello(); //call stack hidden
// }
// demo(); //call stack hidden

// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }
// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }
// three();

//Synchronus nature
// let a=25
// console.log(a);
// let b=5
// console.log(b);
// console.log(a+b);

// Asynchronus nature
// setTimeout(() => {
//   console.log("Partho das");
// }, 2000);
// setTimeout(() => {
//   console.log("Apna college");
// }, 2000);
// console.log("Hello world");

let h1 = document.querySelector("h1");

// h1.style.color = "red";

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("yellow", 2000);

// function changeColor(color, delay, nextColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColor) nextColor();
//   }, delay);
// }

// // callbacks nesting --> Callback hell
// changeColor("red", 1000, () => {
//   changeColor("yellow", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("blue", 1000);
//     });
//   });
// });

// function savetoDb(data, Sucess, failure) {
//   let random = Math.floor(Math.random() * 10) + 1;
//   if (random > 4) {
//     Sucess();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Partho",
//   () => {
//     console.log(" Sucess: Data was saved");
//     savetoDb(
//       "Hello World",
//       () => {
//         console.log(" Sucess2: Data was saved");
//         savetoDb(
//           "Understand",
//           () => {
//             console.log(" Sucess3: Data was saved");
//           },
//           () => {
//             console.log(" Failure3: week conection. Data was saved.");
//           }
//         );
//       },
//       () => {
//         console.log(" Failure2: week conection Data wasn't saved.");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: week conection,data wasn't save.");
//   }
// );

//  Promises

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("data was Saved.");
//     } else {
//       reject("Week conection. data wasn't save ");
//     }
//   });
// }
// saveToDb("Partho");

// let request = saveToDb("Partho");
// request
//   .then(() => {
//     console.log("Promise resolved.");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise rejected.");
//     console.log(request);
//   });

// saveToDb("Partho")
//   .then(() => {
//     console.log("Data1 saved.");
//     saveToDb("Hello Wrold");
//   })
//   .then(() => {
//     console.log("data2 saved.");
//     saveToDb("Apna college");
//   })
//   .then(() => {
//     console.log("data3 saved.");
//   })
//   .catch(() => {
//     console.log("Promise rejected.");
//   });

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Data was saved.");
//     } else {
//       reject("Week conection. data not saved.");
//     }
//   });
// }

// saveToDb("Partho")
//   .then((result) => {
//     console.log("Data1 saved.");
//     console.log("result =", result);

//     return saveToDb("Hello Wrold");
//   })
//   .then((result) => {
//     console.log("data2 saved.");
//     console.log("result =", result);
//   })

//   .catch((error) => {
//     console.log("Promise rejected.");
//     console.log("error =", error);
//   });

// function changeColor(color, delay) {
//   return new Promise((resolve) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     let h1 = document.querySelector("h1");
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("Color chenged");
//     }, delay);
//   });
// }
// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color used.");
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("yellow color used.");
//     return changeColor("pink", 1000);
//   })
//   .then(() => {
//     console.log("pink color used.");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color used.");
//   });
