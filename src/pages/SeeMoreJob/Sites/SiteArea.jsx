import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme";
import Saramin from "../../../assets/images/img-saramin.svg";
import SeoulNoin from "../../../assets/images/img-seoulnoin.svg";
import Shortcut from "../../../assets/images/img-shortcutButton.svg";
import { string } from "@/constants";
import BlockArea from "./BlockArea";
const SiteArea = () => {
  return (
    <SiteList>
      <SiteTitle>노인 일자리를 제공하는 사이트 목록</SiteTitle>
      <BlockArea
        img={Saramin}
        Shortcut={Shortcut}
        text={string.jobsiteExplain[0].text}
        href="https://www.saramin.co.kr"
      />
      <BlockArea
        img={SeoulNoin}
        Shortcut={Shortcut}
        text={string.jobsiteExplain[1].text}
        href="https://www.seoulnoin.or.kr"
      />
    </SiteList>
  );
};

export default SiteArea;

const SiteList = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const SiteTitle = styled.div`
  margin-top: 42px;
  width: 1313px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  ${({ theme }) => theme.fonts.header2};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  margin-bottom: 47px;
`;
