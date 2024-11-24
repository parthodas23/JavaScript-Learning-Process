let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImage();
  //   console.log(link);
  let img = document.querySelector("#img");
  img.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
    // console.log(res);
  } catch (e) {
    console.log("Error :", e);
  }
}
