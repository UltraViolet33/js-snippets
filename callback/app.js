const makeUppercase = value => {
  console.log(value.toUpperCase());
};

// makeUppercase("test");
const reverseStr = value => {
  console.log(value.split("").reverse().join(""));
};

const handleName = (name, cb) => {
  const fullName = `${name} bob`;
  cb(fullName);
};

// handleName("test", makeUppercase);
// handleName("test", reverseStr);

handleName("test", function (value) {
  console.log(value);
});
