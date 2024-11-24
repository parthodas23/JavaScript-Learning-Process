let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let inp = document.querySelector("input");
  let word = inp.value;
  inp.value = "";

  let link = await getSayH(word);
  let p = document.querySelector("p");
  p.innerText = link;
});

async function getSayH(word) {
  try {
    let res = await axios.get(url + word);
    // console.log(res);

    return res.data[0].meanings[0].definitions[0].definition;
  } catch (e) {
    console.log("Error :", e);
  }
}
