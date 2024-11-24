let div = document.querySelector("div");
div.addEventListener("click", function () {
  console.log("div was clicked");
});
let ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked");
});
let li = document.querySelectorAll("li");
for (lis of li) {
  lis.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li was clicked");
  });
}
