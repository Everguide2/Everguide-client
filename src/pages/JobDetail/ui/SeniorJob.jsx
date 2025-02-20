import {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import * as S from "./style";
import {Paginations} from "@components/";
import SideBar from "@layout/Sidebar/ui/SideBar.jsx";
import {CommonHeader} from "@pages/Common/event&policyRec/components/index.js";
import CardJobView from "@pages/JobDetail/components/CardJobView.jsx";
import CardJobList from "@pages/JobDetail/components/CardJobList.jsx";
import {setPage} from "@stores/paging/pagingSlice.js";
import {useValidateLogin} from "@hooks/useValidateLogin.js";

const SeniorJob = () => {
  const dispatch = useDispatch();
  const listData = ["시작일 순" , "마감일 순"];
  const [activeTab, setActiveTab] = useState("left");
  const total = useSelector(state => state.paging.totalItems)
  const {isLogin} = useValidateLogin();

  const onClickTab = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {
    dispatch(setPage({itemsCount: 10, totalItems: 160, pageRange: 5}));
  }, []);

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
            {activeTab === "left" ? <CardJobView isLogin={isLogin}/>: <CardJobList isLogin={isLogin}/>}
            <Paginations/>
          </S.RightContent>
        </S.Container>
      </S.SeniorJob>
  );
};

export default SeniorJob;