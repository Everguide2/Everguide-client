import RootLayout from "../layout/RootLayout.jsx";
import { Home, Policy, Event, Job, Search } from "../pages";
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
      {
        path: pagePath.POLICY,
        element: <Policy />,
      },
      {
        path: pagePath.EVENT,
        element: <Event />,
      },
      {
        path: pagePath.JOB,
        element: <Job />,
      },
      {
        path: `${pagePath.SEARCH}/:query`,
        element: <Search />,
      },
    ],
  },
];

export default routes;
