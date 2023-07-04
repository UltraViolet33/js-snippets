console.log("hello");

const url = "https://www.course-api.com/react-tours-projecst";

// console.log(fetch(url));

const getProjects = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const msg = `error ${response.status} ${response.statusText}`;
      throw new Error(msg);
    }
    const projects = await response.json();
    console.log(projects);
  } catch (error) {
    console.log(error);
  }
};

getProjects();
