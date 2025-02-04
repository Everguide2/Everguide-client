import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as S from "./style.js";
import { useCustomNavigation } from "@hooks/useCustomNavigation.js";
import {MainHeader, SubHeader} from "@layout/Header/components"
import {addAlarm} from "@stores/alarm/alarmSlice.js";
import {alarmDummy} from "@test/alarmDummy.js";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [active, setActive] = useState("");
  const {navigateTo} = useCustomNavigation();

  useEffect(() => {
    const savedMenu = sessionStorage.getItem("activeMenu");
    if (savedMenu) {
      setActive(savedMenu);
    }
    alarmDummy.forEach((item) => {
      dispatch(addAlarm({...item}));
    })

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

