import { useState } from "react";
import * as S from "./style";
import SideBar from "@layout/sidebar/ui/SideBar.jsx";
import {DropDown, Paginations} from "@components/";
import {TabMenu, CardView, ListView} from "@pages/common/event&policyRec/components";
import {useSelector} from "react-redux";

const Common = () => {
  const listData = ["등록일 순", "신청 마감순"];
  const [activeTab, setActiveTab] = useState("left");
  const total = useSelector(state => state.paging.totalItems);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  }

  return (
      <S.Common>
        <S.Container>
          <SideBar/>
          <S.RightContent>
            <S.Header>
              <S.Total>총 {total}개</S.Total>
              <S.Setting>
                <DropDown initial={"정렬"} items={listData}/>
                <TabMenu activeTab={activeTab} onClickTab={onClickTab}/>
              </S.Setting>
            </S.Header>
            {activeTab === "left" ? <CardView /> : <ListView />}
            <Paginations />
          </S.RightContent>
        </S.Container>
      </S.Common>
  );
};

export default Common;