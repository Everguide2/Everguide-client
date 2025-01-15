import RootLayout from "../layout/rootLayout";
import Home from "../pages/home/ui/Home.jsx";
import { pagePath } from "./pagePath.js";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
