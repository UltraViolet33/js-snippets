const udemy = "udemy";

const letters = [...udemy];

console.log(letters);

const boys = ["john", "peter"];

const girls = ["susan", "anna"];

const newPerson = "arnold";

// const friends = [boys, girls, newPerson];

const friends = [...boys, ...girls, newPerson];

console.log(friends);

// const newFriends = friends; // reference

const newFriends = [...friends]; //copy

newFriends["0"] = "rick";

console.log(friends);
console.log(newFriends);

const man = { name: "john", job: "developer" };

// const newMan = man; // reference
const newMan = { ...man }; // copy

newMan.name = "bob";

console.log(man);
console.log(newMan);
