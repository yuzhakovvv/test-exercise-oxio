import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Root from "./root";
import Charts from "./charts";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
          loader: async () => redirect('/home'),
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
]);

export default router;