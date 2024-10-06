import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/galery/Gallery";
import Problem from "./pages/problem/Problem";
import Upgrade from "./pages/upgrade/Upgrade";

export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/problem",
          element: <Problem />,
        },
        {
          path: "/upgrade",
          element: <Upgrade />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-[#17171b]">
      <RouterProvider router={router} />
    </div>
  );
}
