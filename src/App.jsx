import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeIndex from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Page404 from "./components/Errors";
import Skills from "./components/Skills";

const projects = [
  {
    id: 1,
    name: "Garment",
    image_url: "https://bayodeolaoye.onrender.com/assets/garment-logo.jpg",
    description:
      "An eCommerce site made with Python, Flask, JavaScript, React and Redux. Users can add or remove items from their cart, leave reviews for different garments, as well as add or remove garments from their favorites list.",
    role: "I used Python, Flask, React and Redux to create an application that allows users to perform CRUD operations on garments, reviews, cart and favorites. Through this project, I gained experience with working with Flask in the backend and responsive web development via media queries in the front end. I also deepened my understanding of the React component lifecycle.",
    technologies: [
      "Python",
      "SQLAlchemy",
      "Flask",
      "JavaScript",
      "React",
      "Redux",
      "HTML",
      "CSS",
    ],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/garment" },
      { "Live site": "https://garment-project.onrender.com" },
    ],
  },
  {
    id: 2,
    name: "Ravenhood",
    image_url: "https://bayodeolaoye.onrender.com/assets/ravenhood-logo.jpg",
    description:
      "A financial application that displays over 500 stocks and provides information about a company. This application is made with Python, Flask, JavaScript, React and Redux. The site allows users to create, read, update and delete portfolios.",
    role: "I used Flask, SQLAlchemy, React and Redux, to create the stock's details page i.e. the page contains information such as the ticker symbol, the current price and the dividend yield for a particular company. Through this project, I gained experience with loaders for making fetch requests, as well as using a global state management via Redux to store and obtain information such as a user's list of transactions.",
    technologies: [
      "Python",
      "SQLAlchemy",
      "Flask",
      "JavaScript",
      "React",
      "Redux",
      "HTML",
      "CSS",
    ],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/ravenhood" },
      { "Live site": "https://ravenhood-project.onrender.com" },
    ],
  },
  {
    id: 3,
    name: "Firebnb",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    description:
      "An application that is made with JavaScript, React and Express. It shows a list of spots and allows users to perform CRUD operations on said spots.",
    role: "I used JavaScript, Express, React and Redux to create an application that allows users to perform CRUD operations on spots and reviews. Through this project, I gained experience with working with databases in the backend, and deepened my understanding of React and CSS as I had to create a visually appealing application.",
    technologies: ["JavaScript", "React", "Redux", "Express"],
    links: [
      { "Github repo": "https://github.com/bayodelaoye/firebnb" },
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
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "*",
        element: <Page404 />,
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
