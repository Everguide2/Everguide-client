import { useState } from "react";
import * as S from "./style";
import SideBar from "@layout/Sidebar/ui/SideBar.jsx";
import {Paginations} from "@components/";
import {CardView, ListView, CommonHeader} from "@pages/Common/event&policyRec/components";
import {useSelector} from "react-redux";
import {pagePath} from "@/routes/pagePath.js";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";
import {useValidateLogin} from "@hooks/useValidateLogin.js";

// 지원정책, 행사/교육 페이지 공통 사용
const Common = ({type}) => {
  const [activeTab, setActiveTab] = useState("left");
  const listData = ["등록일 순", "신청 마감순"];
  const total = useSelector(state => state.paging.totalItems);

  const {navigateTo} = useCustomNavigation()
  const {isLogin} = useValidateLogin();

  const onClickTab = (tab) => {
    setActiveTab(tab);
  }

  const onClickItem = (id) => {
    if(type === "행사/교육"){
      navigateTo(`/${pagePath.EVENT}/${id}`);
    } else{
      navigateTo(`/${pagePath.SUPPORT}/${id}`);
    }
  }

  return (
      <S.Common>
        <S.Container>
          <SideBar/>
          <S.RightContent>
            <CommonHeader
                total={total}
                listData={listData}
                activeTab={activeTab}
                onClickTab={onClickTab}
                type={"big"}
            />
            {activeTab === "left" ? <CardView type={type} onClickCard={onClickItem} isLogin={isLogin}/> : <ListView type={type} onClickList={onClickItem} isLogin={isLogin}/>}
            <Paginations />
          </S.RightContent>
        </S.Container>
      </S.Common>
  );
};

export default Common;