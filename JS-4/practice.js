// for (let i = 1; i <= 25; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }

// let n = prompt("Write your multiplication table number :"); //string
// let num = parseInt(n);
// for (let i = num; i <= num * 10; i += num) {
//   console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// let fruits = ["mangoo", "pinaple", "apple", "litci", "banana"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// let heros = [
//   ["superman", "fiash", "aquaman", "wnderwoman"],
//   ["spiderman", "hulk", "thor", "ironman"],
// ];
// for (let i = 0; i < heros.length; i++) {
//   console.log(`list #${i + 1}`);
//   for (let j = 0; j < heros[i].length; j++) {
//     console.log(j, heros[i][j]);
//   }
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let name = ["partho", "misba", "rakib"];
// for (names of name) {
//   console.log(names);
// }

// let todo = [];
// let req = prompt(" Wellcome Todo App. Please submit your request :");
// while (true) {
//   if (req == "quit") {
//     console.log("Quitting the app");
//     break;
//   } else if (req == "list") {
//     console.log("-------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("-------------");
//   } else if (req == "add") {
//     let task = prompt("Please submit your task that you want to add:");
//     todo.push(task);
//     console.log("Task added.");
//   } else if (req == "delete") {
//     let idx = prompt(
//       "What task do you want to delete ?.Please submit the task index :"
//     );
//     let idxNum = parseInt(idx);
//     todo.splice(idxNum, 1);
//     console.log("Task deleted.");
//   }
//   req = prompt("Enter your request submit :");
// }
