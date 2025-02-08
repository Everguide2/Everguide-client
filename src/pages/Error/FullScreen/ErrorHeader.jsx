import React from "react";
import styled from "styled-components";
import ModalImg from "../../../assets/images/img-manu.svg";
import TitleImg from "../../../assets/images/img-image3.svg";
import HomeImg from "../../../assets/images/img-HOME.svg";
import ServiceImg from "../../../assets/images/img-SERVICE.svg";
import SearchIcon from "../../../assets/images/img-searchicon.svg";
import AlarmIcon from "../../../assets/images/img-alarmicon.svg";
import LoveIcon from "../../../assets/images/img-Group33753.svg";
import { Search } from "@/pages";

const ErrorHeader = () => {
  return (
    <HeaderArea>
      <ModalArea>
        <ModalButton>
          <img src={ModalImg} alt="에러창 모달버튼" />
        </ModalButton>
        <EverguideName src={TitleImg} alt="프로젝트명(Everguide)" />
      </ModalArea>
      <OptionArea>
        <HomeButton>
          <img src={HomeImg} alt="Home버튼" />
        </HomeButton>
        <ServiceButton>
          <img src={ServiceImg} alt="Service버튼" />
        </ServiceButton>
        <EachButton>
          <img src={SearchIcon} alt="검색버튼" />
        </EachButton>
        <EachButton>
          <img src={AlarmIcon} alt="알림버튼" />
        </EachButton>
        <LoveButton>
          <img src={LoveIcon} alt="정확한 기능 아직 모름름" />
        </LoveButton>
      </OptionArea>
    </HeaderArea>
  );
};

export default ErrorHeader;

const HeaderArea = styled.div`
  width: 1440px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const ModalArea = styled.div`
  width: 159px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
`;
const ModalButton = styled.button`
  width: 28px;
  height: 28px;
  background-color: white;
  border: none;
  margin-right: 20px;
`;
const EverguideName = styled.img`
  width: 110px;
  height: 20px;
`;
const OptionArea = styled.div`
  width: 270px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 60px;
`;

const HomeButton = styled.button`
  width: 45px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: white;
  border: none;
`;

const ServiceButton = styled.button`
  width: 60px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: white;
  border: none;
`;

const EachButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 6px;
  background-color: white;
  border: none;
`;

const LoveButton = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  background-color: white;
  border: none;
`;
