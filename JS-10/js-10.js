// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function () {
//   console.dir("button was clicked");
// };

// function sayHello() {
//   console.dir("Hello");
// }
// btn.onclick = sayHello;

// let btn = document.querySelectorAll("button");
// for (btns of btn) {
//   btns.onclick = sayHello;
// }
// function sayHello() {
//   console.dir("Hello");
// }

// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   btn.onclick = say;
//   btn.onmouseenter = function () {
//     alert("Hello");
//   };
// }
// function say() {
//   console.dir("button was clicked");
// }

// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   //   btn.addEventListener("click", function () {
//   //     console.log("Clicked");
//   //   });

//   btn.addEventListener("dblclick", dubble);
// }

// function dubble() {
//   console.log("You click dubble times");
// }

// let para = document.querySelector("p");
// para.addEventListener("click", function () {
//   console.log("Paragraph was clicked.");
// });

// let div = document.querySelector("div");
// div.addEventListener("mouseenter", function () {
//   console.log("div was clicked");
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button was clicked.");
// });
// // btn.addEventListener("mouseenter", function (event) {
// //   console.log(event);
// //   console.log("button was clicked.");
// // });
// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button was clicked.");
// });

// let input = document.querySelector("input");
// // input.addEventListener("keydown", function (event) {
// //   console.log(event);

// //   console.log("value was inputed.");
// // });
// input.addEventListener("keyup", function (event) {
//   console.log("key=", event.key);
//   console.log("code=", event.code);

//   console.log("value was inputed.");
// });

// let int = document.querySelector("input");
// int.addEventListener("keydown", function (event) {
//   //   console.log("code= ", event.code);

//   //   if (event.code == "ArrowUp") {
//   //     console.log("charecter moves forword");
//   //   } else if (event.code == "ArrowDown") {
//   //     console.log("charecter moves down.");
//   //   } else if (event.code == "ArrowLeft") {
//   //     console.log("charecter moves left.");
//   //   } else if (event.code == "ArrowRight") {
//   //     console.log("charecter moves right.");
//   //   }

//   console.log("key=", event.key);
//   if (event.key == "U") {
//     console.log("charaecter moves forword.");
//   } else if (event.key == "D") {
//     console.log("charaecter moves down.");
//   } else if (event.key == "R") {
//     console.log("charaecter moves right.");
//   } else if (event.key == "L") {
//     console.log("charecter moves left");
//   }
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//   alert("Form submited.");
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //   let user = document.querySelector("#user");
//   //   let pass = document.querySelector("#pass");
//   //   console.dir(user.value);
//   //   console.dir(pass.value);

//   //   console.dir(form);
//   //   let user = form.elements[0];
//   //   let pass = form.elements[1];
//   //   console.dir(user.value);
//   //   console.dir(pass.value);

//   let user = this.elements[0];
//   let pass = this.elements[1];
//   console.log(user.value);
//   console.log(pass.value);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
//   console.log("change value");

//   console.log("final value =", user.value);
// });

// user.addEventListener("input", function () {
//   console.log("input value");
//   console.log("final value =", user.value);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// let p = document.querySelector("p");
// let text = document.querySelector("#text");
// text.addEventListener("input", function () {
//   console.log("final input =", this.value);

//   p.innerText = this.value;
// });
