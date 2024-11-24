let para = document.createElement("p");
para.innerText = "Hello i am red.";
document.querySelector("body").append(para);

para.classList.add("red1");

let heading = document.createElement("h3");
heading.innerText = "I'm a blue h3.";
document.querySelector("body").append(heading);
heading.classList.add("blue1");

let div = document.createElement("div");
document.querySelector("body").prepend(div);
div.classList.add("div1");
let h1 = document.createElement("h1");
h1.innerText = "i'm in div.";
document.querySelector("div").append(h1);
let para2 = document.createElement("p");
para2.innerText = "ME TOO.";
document.querySelector("div").append(para2);
