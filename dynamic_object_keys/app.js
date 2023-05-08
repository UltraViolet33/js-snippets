const state = {
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "roger");

console.log(state);

updateState("job", "jobless");

console.log(state);

updateState("age", 45);

console.log(state);
