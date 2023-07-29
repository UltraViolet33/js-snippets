const btn = document.querySelector("#btn");

const debounce = fn => {
  let timeoutID;

  return () => {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      fn();
    }, 1000);

    console.log("hello");
  };
};

btn.addEventListener(
  "click",
  debounce(() => {
    console.log("you click");
  })
);
