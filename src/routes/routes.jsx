import RootLayout from "../layout/rootLayout";
import {pagePath} from "./pagePath.js";
import { Login, Signup, MyPage } from "../pages";
import FindEmail from "../pages/Auth/components/FindEmail.jsx";
import FindPassword from "../pages/Auth/components/FindPassword.jsx";

const routes =  [
  {
    path: '/',
    element: <RootLayout />,
    children: [{
      path: pagePath.MYPAGE,
      element: <MyPage/>
    }],
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
  }
]


export default routes;
