const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     one.style.color = "red";
//   }, 1000);

//   setTimeout(() => {
//     two.style.color = "blue";
//   }, 2000);

//   setTimeout(() => {
//     three.style.color = "green";
//   }, 3000);
// });

btn.addEventListener("click", () => {
  setTimeout(() => {
    one.style.color = "red";
    setTimeout(() => {
      two.style.color = "blue";
      setTimeout(() => {
        three.style.color = "green";
      }, 3000);
    }, 2000);
  }, 1000);
});
