const people = [
  {
    name: "bob",
    location: { street: "1", timezone: { offset: 7 } },
  },

  {
    name: "bob2",
    location: { street: "1" },
  },
  {
    name: "bob3",
    location: { street: "1", timezone: { offset: 7 } },
  },
];

people.forEach(person => {
  //   console.log(person.location.timezone.offset);

  //   console.log(
  //     (person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset) ||
  //       "unknown"
  //   );

  console.log(person.location?.timezone?.offset || "unknown");
});
