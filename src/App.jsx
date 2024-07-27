import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeIndex from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";

const projects = [
  {
    id: 1,
    name: "Firebnb",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    description:
      "An application that is made with JavaScript, React and Express. It shows a list of spots and allows users to perform CRUD operations on said spots.",
    role: "I used JavaScript, Express, React and Redux to create an application that allows users to perform CRUD operations on spots and reviews. Through this project, I gained experience with working with databases in the backend and stores (i.e. Redux) in the front end. I also deepened my understanding of React and CSS as I had to create a visually appealing application.",
    technologies: ["JavaScript", "React", "Redux", "Express"],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/firebnb-project" },
      { "Live site": "https://firebnb-project.onrender.com/" },
    ],
  },
  {
    id: 2,
    name: "Calculator",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    description:
      "An application that is made with JavaScript, React and Express. It shows a list of spots and allows users to perform CRUD operations on said spots.",
    role: "I used JavaScript, Express, React and Redux to create an application that allows users to perform CRUD operations on spots and reviews. Through this project, I gained experience with working with databases in the backend and stores (i.e. Redux) in the front end. I also deepened my understanding of React and CSS as I had to create a visually appealing application.",
    technologies: ["JavaScript", "React", "Redux", "Express"],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/firebnb-project" },
      { "Live site": "https://firebnb-project.onrender.com/" },
    ],
  },
  {
    id: 3,
    name: "Calculatorr",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    description:
      "An application that is made with JavaScript, React and Express. It shows a list of spots and allows users to perform CRUD operations on said spots.",
    role: "I used JavaScript, Express, React and Redux to create an application that allows users to perform CRUD operations on spots and reviews. Through this project, I gained experience with working with databases in the backend and stores (i.e. Redux) in the front end. I also deepened my understanding of React and CSS as I had to create a visually appealing application.",
    technologies: ["JavaScript", "React", "Redux", "Express"],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/firebnb-project" },
      { "Live site": "https://firebnb-project.onrender.com/" },
    ],
  },
  {
    id: 4,
    name: "Calculatort",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    description:
      "An application that is made with JavaScript, React and Express. It shows a list of spots and allows users to perform CRUD operations on said spots.",
    role: "I used JavaScript, Express, React and Redux to create an application that allows users to perform CRUD operations on spots and reviews. Through this project, I gained experience with working with databases in the backend and stores (i.e. Redux) in the front end. I also deepened my understanding of React and CSS as I had to create a visually appealing application.",
    technologies: ["JavaScript", "React", "Redux", "Express"],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/firebnb-project" },
      { "Live site": "https://firebnb-project.onrender.com/" },
    ],
  },
];

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeIndex />,
      },
      {
        path: "/projects",
        element: <Projects projects={projects} />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails projects={projects} />,
      },
      {
        path: "*",
        element: <p>Invalid address</p>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
