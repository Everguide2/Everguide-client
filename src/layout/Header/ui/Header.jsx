import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as S from "./style.js";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";
import {MainHeader, SubHeader} from "@layout/Header/components"
import {addAlarm} from "@stores/alarm/alarmSlice.js";
import {alarmDummy} from "@test/alarmDummy.js";
import {pagePath} from "@/routes/pagePath.js";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [active, setActive] = useState("");
  const [subActive, setSubActive] = useState("");
  const {navigateTo} = useCustomNavigation();

  const savedMenu = sessionStorage.getItem("activeMenu");
  const savedSubMenu = sessionStorage.getItem("activeSubMenu");

  useEffect(() => {

    if (savedMenu) {
      setActive(savedMenu);
    } else if(savedSubMenu){
      setSubActive(savedSubMenu);
    }
    alarmDummy.forEach((item) => {
      dispatch(addAlarm({...item}));
    })

  }, [savedSubMenu]);

  const handleMenuClick = (menu, flag) => {
    if(flag === 1){
      setActive(menu);
      setSubActive("");
      sessionStorage.setItem("activeMenu", menu);
      sessionStorage.removeItem("activeSubMenu");
    } else if(flag === 2){
      setActive(pagePath.JOB);
      setSubActive(menu);
      sessionStorage.setItem("activeMenu", pagePath.JOB);
      sessionStorage.setItem("activeSubMenu", menu);
    }
    navigateTo(menu);
  }

  return (
      <S.Container>
        <MainHeader isLogin={true} onClick={handleMenuClick}/>
        <SubHeader active={active} subActive={subActive} onClick={handleMenuClick}/>
      </S.Container>
  );
};

export default Header;

