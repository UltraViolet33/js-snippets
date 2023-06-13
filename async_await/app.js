const example = async () => {
  return "hello";
};

async function getMessage() {
  const message = await example();
  console.log(message);
}

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const getUser = username => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.name === username);

    if (user) {
      return resolve(user);
    } else {
      return reject(`No user named ${username}`);
    }
  });
};

const getArticles = userId => {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find(el => el.userId === userId);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      return reject(`wrong id`);
    }
  });
};

// getUser("susan")
//   .then(user => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch(err => console.log(err));

const getData = async username => {
  try {
    const user = await getUser(username);
    console.log(user);

    const articles = await getArticles(user.id);

    console.log(articles);
  } catch (e) {
    console.log(e);
  }
};

// getData("susan");
