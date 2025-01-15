import RootLayout from "../layout/rootLayout";
import {pagePath} from "./pagePath.js";
import { Policy } from "../pages/PolicyRec/ui";
import Home from "../pages/home/ui/Home.jsx";
import { pagePath } from "./pagePath.js";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ 
      index: true,
      element: <Home />,

      path : pagePath.POLICY,
      element : <Policy/>,
    }],
  },
];

export default routes;
