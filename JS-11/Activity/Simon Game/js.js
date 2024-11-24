let gameSeq = [];
let userSeq = [];
let started = false;
let Abtns = ["green", "purple", "yellow", "red"];
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
  if (!started) {
    // console.log("game is started.");
    levelUp();
    started = true;
  }
});

function btnFlash(btns) {
  btns.classList.add("flash");
  setTimeout(function () {
    btns.classList.remove("flash");
  }, 270);
}
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  let ranInd = Math.floor(Math.random() * 4);
  let randcolor = Abtns[ranInd];
  let btnColor = document.querySelector(`.${randcolor}`);
  console.log(ranInd);
  console.log(randcolor);
  console.log(btnColor);
  // btnColor.classList.add("flash");

  btnFlash(btnColor);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 270);
}
function btnpress() {
  let btn = this;
  userFlash(btn);
  console.log(btn);
}
let Allbtns = document.querySelectorAll(".btn");
for (btn of Allbtns) {
  btn.addEventListener("click", btnpress);
}
