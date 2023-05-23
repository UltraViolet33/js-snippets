const bob = {
  first: "bob",
  last: "test",
  city: "Paris",
  siblings: {
    sister: "jane",
  },
};

// const firstname = bob.first;
// const lastname = bob.last;
// const sister = bob.siblings.sister;

const {
  first: firstname,
  last: lastname,
  siblings: { sister: sister },
} = bob;

console.log(firstname, lastname, sister);

function printPerson({ last, first }) {
  console.log(last, first);
}

printPerson(bob);
