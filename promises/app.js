const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  if (random === value) {
    resolve("You guessed the number");
  } else {
    reject("Error !");
  }
});

promise.then(data => console.log(data)).catch(err => console.log(err));
