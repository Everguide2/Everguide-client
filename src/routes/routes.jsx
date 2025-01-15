import RootLayout from "../layout/rootLayout";
import {Home, Policy} from "../pages";
import {pagePath} from "./pagePath.js";

const routes = [
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: pagePath.POLICY,
        element: <Policy/>
      },
    ],
  },
];

export default routes;
