let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

let inp = document.querySelector("input");
btn.addEventListener("click", async () => {
  let country = inp.value;

  inp.value = "";
  let colleges = await getColleges(country);
  show(colleges);
});

function show(colleges) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colleges) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("Error :", e);
  }
}
