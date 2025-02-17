import {useState} from "react";
import {useSelector} from 'react-redux'
import * as S from "./style";
import {Paginations} from "@components/";
import SideBar from "@layout/Sidebar/ui/SideBar.jsx";
import {CommonHeader} from "@pages/Common/event&policyRec/components/index.js";
import CardJobView from "@pages/JobDetail/components/CardJobView.jsx";
import CardJobList from "@pages/JobDetail/components/CardJobList.jsx";

const SeniorJob = () => {
  const listData = ["시작일 순" , "마감일 순"];
  const [activeTab, setActiveTab] = useState("left");
  const total = useSelector(state => state.paging.totalItems)

  const onClickTab = (tab) => {
    setActiveTab(tab);
  }

  return (
      <S.SeniorJob>
        <S.Container>
          <SideBar type={"mypage"}/>
          <S.RightContent>
            <CommonHeader
                total={total}
                listData={listData}
                activeTab={activeTab}
                onClickTab={onClickTab}
                type={"big"}
            />
            {activeTab === "left" ? <CardJobView/>: <CardJobList/>}
          </S.RightContent>
        </S.Container>
      </S.SeniorJob>
  );
};

export default SeniorJob;