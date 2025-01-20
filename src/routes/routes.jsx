import RootLayout from "../layout/RootLayout.jsx";
import {Home, Policy, Event, EventDetail, Job} from "../pages";
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
      {
        path: pagePath.EVENT,
        element: <Event/>
      },
      {
        path: pagePath.EVENTDETAIL,
        element: <EventDetail />
      },
      {
        path: pagePath.JOB,
        element: <Job/>
      },
    ],
  },
];

export default routes;
