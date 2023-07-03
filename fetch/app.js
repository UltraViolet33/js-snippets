console.log("hello");

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url));

const getProjects = async () => {
  try {
    const response = await fetch(url);
    const projects = await response.json();
    console.log(projects);
  } catch (error) {
    console.log(error);
  }

};

getProjects();
