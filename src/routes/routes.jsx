import RootLayout from "../layout/RootLayout.jsx";
import {Home, Policy, Event, EventDetail, Job, Login, Signup,Search, MyPage, FindEmail, FindPassword, EmailResult, PasswordSent, SignupLoading, SignupSuccess} from "../pages";
import {pagePath} from "./pagePath.js";

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
        path: pagePath.EVENTDETAIL,
        element: <EventDetail />
      },
      {
        path: pagePath.JOB,
        element: <Job />,
      },
      {
        path: `${pagePath.SEARCH}/:query`,
        element: <Search />,
      },
      {
        path : pagePath.MYPAGE,
        element : <MyPage />,
      }
    ],
  },
  { 
    path : pagePath.LOGIN,
    element : <Login/>,
  },
  {
    path : pagePath.SIGNUP,
    element : <Signup/>,
  },
  {
    path : pagePath.FINDEMAIL,
    element : <FindEmail/>,
  },
  {
    path : pagePath.FINDPASSWORD,
    element : <FindPassword/>,
  },
  {
    path : pagePath.EMAILRESULT,
    element : <EmailResult />
  },
  {
    path : pagePath.PASSWORDSENT,
    element : <PasswordSent />
  },
  {
    path : pagePath.SIGNUPLOADING,
    element : <SignupLoading />
  },
  {
    path : pagePath.SIGNUPSUCCESS,
    element : <SignupSuccess />
  },
];

export default routes;

