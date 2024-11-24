// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// async function getFact() {
//   let url = "https://catfact.ninja/fact";
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log(data1.fact);
//   } catch (e) {
//     console.log("Error", e);
//   }
// }
// getFact();
