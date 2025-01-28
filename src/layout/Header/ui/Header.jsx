import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import * as S from "./style.js";
import { useCustomNavigation } from "@hooks/useCustomNavigation.js";
import {MainHeader, SubHeader} from "@layout/Header/components"

const Header = () => {
  const auth = useSelector(state => state.auth);
  const [active, setActive] = useState("");
  const {navigateTo} = useCustomNavigation();

  useEffect(() => {
    const savedMenu = sessionStorage.getItem("activeMenu");
    if (savedMenu) {
      setActive(savedMenu);
    }
  }, []);

  const handleMenuClick = (menu) => {
    setActive(menu);
    sessionStorage.setItem("activeMenu", menu);
    navigateTo(menu);
  }

  return (
    <S.Container>
      <MainHeader isLogin={true} onClick={handleMenuClick} />
      <SubHeader active={active} onClick={handleMenuClick} />
    </S.Container>
  );
};

export default Header;

