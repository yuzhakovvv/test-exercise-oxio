import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Root from "./root";
import Charts from "./charts";
import Home from "./home";

export const routerConfig = [
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
]

const router = createBrowserRouter(routerConfig);

export default router;