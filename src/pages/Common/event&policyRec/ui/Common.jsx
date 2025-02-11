import { useState } from "react";
import * as S from "./style";
import SideBar from "@layout/Sidebar/ui/SideBar.jsx";
import {Paginations} from "@components/";
import {CardView, ListView, CommonHeader} from "@pages/Common/event&policyRec/components";
import {useSelector} from "react-redux";
import {pagePath} from "@/routes/pagePath.js";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";

const Common = ({type}) => {
  const {navigateTo} = useCustomNavigation()
  const listData = ["등록일 순", "신청 마감순"];
  const [activeTab, setActiveTab] = useState("left");
  const total = useSelector(state => state.paging.totalItems);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  }

  const onClickItem = (id) => {
    if(type === "행사/교육"){
      navigateTo(`/${pagePath.EVENT}/${id}`);
    } else{
      navigateTo(`/${pagePath.EVENT}/${id}`);
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
            {activeTab === "left" ? <CardView onClickCard={onClickItem}/> : <ListView type={type} onClickList={onClickItem}/>}
            <Paginations />
          </S.RightContent>
        </S.Container>
      </S.Common>
  );
};

export default Common;