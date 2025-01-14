import RootLayout from "../layout/rootLayout";
import {pagePath} from "./pagePath.js";

const routes =  [
  {
    path: '/',
    element: <RootLayout />,
    children: [{
    }],
  },
]


export default routes;
