// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let p = document.querySelector("p");
//   let add = await getfact();
//   p.innerText = add;
// });

// async function getfact() {
//   let url = "https://catfact.ninja/fact";
//   try {
//     let res = await axios.get(url);
//     let facts = res.data.fact;
//     return facts;
//   } catch (e) {
//     console.log("Error ", e);
//   }
// }

// let url = "https://icanhazdadjoke.com/";

// async function getdadJoke() {
//   const config = { headers: { Accept: "application/json" } };
//   let res = await axios.get(url, config);
//   console.log(res.data.joke);
// }
