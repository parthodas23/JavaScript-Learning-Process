// let student = {
//   name: "partho",
//   age: 23,
//   marks: 73.23,
// };

// const obj = {
//   price: 700.69,
//   item: 3,
//   details: ["shirt", "phant"],
// };

// const classInfo = {
//   partho: {
//     age: 20,
//     city: "Khulna",
//   },
//   shumit: {
//     age: 19,
//     city: "Rangpur",
//   },
// };

// const studentInfo = [
//   {
//     name: "Partho",
//     age: 20,
//   },
//   {
//     gender: "male",
//     grade: "A",
//   },
// ];

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);

let max = prompt(
  "Wellcome Guessing Game. Plaese submit the max number that you want to guess :"
);
const random = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Submit your guess number :");
while (true) {
  if (guess == "quit") {
    console.log("You're quitting the game.");
  } else if (guess == random) {
    console.log("Your guess is right. You win the Game.");
  } else if (guess > random) {
    guess = prompt("Hint: Your guess is too big. Please try again.");
  } else if (guess < random) {
    guess = prompt("Hint: Your guess is too small. Please try again.");
  }
  //   guess = prompt("Submit your guess number or Quit the game :");
}
