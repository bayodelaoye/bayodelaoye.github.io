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
  },
  {
    id: 2,
    name: "Calculator",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
  },
  {
    id: 3,
    name: "Calculatorr",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
  },
  {
    id: 4,
    name: "Calculatort",
    image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
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
