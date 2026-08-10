import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
      children: [
        {
          path: "courses",
          element: (
            <div>
              <Navbar />
              <Courses />
            </div>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <Navbar />
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/student/:id",
      element: (
        <div>
          <Navbar />
          <ParamComp />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
