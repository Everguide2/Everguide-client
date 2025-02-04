import {Outlet} from 'react-router-dom';
import Header from '@layout/Header/ui/Header.jsx';
import Footer from '@layout/Footer/Footer.jsx';

const RootLayout = () => {
  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
  );
};

export default RootLayout;