import RootLayout from "../layout/rootLayout";
import {pagePath} from "./pagePath.js";
import { Login, Signup, MyPage } from "../pages";

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
]


export default routes;
