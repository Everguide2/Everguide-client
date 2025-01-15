import RootLayout from "../layout/rootLayout";
import {pagePath} from "./pagePath.js";
import { Policy } from "../pages/PolicyRec/ui";

const routes =  [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ 
      path : pagePath.POLICY,
      element : <Policy/>
    }],
  },
]


export default routes;
