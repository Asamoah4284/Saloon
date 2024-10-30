import "./App.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Beauty from "./Pages/Beauty";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Hair from "./Pages/Hair";
import Other from "./Pages/Other";
import Packages from "./Pages/Packages";
import Privacy from "./Pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/beauuty-details",
    element: <Beauty />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/hair-details",
    element: <Hair />,
  },
  {
    path: "/other-details",
    element: <Other />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
