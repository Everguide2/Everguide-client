import RootLayout from "../layout/RootLayout.jsx";
import {Home, Policy, PolicySupport, PolicySupportDetail, Event, EventDetail, JobDetail, JobMore, JobSenior, Login, Signup,Search, MyPage, FindEmail, FindPassword, EmailResult, PasswordSent, SignupLoading, SignupSuccess, Error404} from "../pages";
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
        path: pagePath.SUPPORT,
        element: <PolicySupport />,
      },
      {
        path: pagePath.SUPPORTDETAIL,
        element: <PolicySupportDetail />,
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
        path: pagePath.JOBDETAIL,
        element: <JobDetail />,
      },
      {
        path: pagePath.JOBSENIOR,
        element: <JobSenior/>
      },
      {
        path: pagePath.JOBMORE,
        element: <JobMore/>
      },
      {
        path: `${pagePath.SEARCH}/:query`,
        element: <Search />,
      },
      {
        path: pagePath.MYPAGE,
        element: <MyPage />,
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
  {
    path: "*",
    element: <Error404 />
  }
];

export default routes;

