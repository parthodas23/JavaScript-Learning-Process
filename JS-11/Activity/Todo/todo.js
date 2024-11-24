let text = document.querySelector("#text");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = text.value;
  ul.appendChild(item);
  text.value = "";
  let dlbtn = document.createElement("button");
  dlbtn.innerText = "Delete";
  dlbtn.classList.add("delete");
  item.appendChild(dlbtn);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target);

    let par = event.target.parentElement;
    par.remove();
  }
});
