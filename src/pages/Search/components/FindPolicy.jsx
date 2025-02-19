import React from "react";
import styled from "styled-components";
import BGImg from "../../../assets/images/img_Frame290548.png";
import theme from "../../../theme/theme";
import ArrowImo from "../../../assets/images/img-Frame290705.svg";
const FindPolicy = () => {
  return (
    <>
      <PolicyForMe>
        <FindBGImg src={BGImg} />
      </PolicyForMe>
      <Explanation>
        <ExTitle>나를 위한 정책 찾기</ExTitle>
        <ExSubTitle>40초 설문으로 나에게 맞는 정책을 확인해보세요!</ExSubTitle>
        <ExButton>
          <ButtonEx>
            <ButtonTitle>나의 맞춤정책 확인하기</ButtonTitle>
            <ExImo src={ArrowImo} alt="화살표" />
          </ButtonEx>
        </ExButton>
      </Explanation>
    </>
  );
};

export default FindPolicy;

const PolicyForMe = styled.div`
  width: 100%;
  height: 434px;
  display: flex;
  flex-direction: column;
`;
const FindBGImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Explanation = styled.div`
  position: relative;
  width: 586px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: black;
  top: -170px;
  margin-top: -220px; /* 이동한 만큼 공간을 상쇄 */
`;

const ExTitle = styled.p`
  ${({ theme }) => theme.fonts.header0};
  color: white;
`;
const ExSubTitle = styled.p`
  ${({ theme }) => theme.fonts.header5};
  color: ${({ theme }) => theme.colors.primary[50]};
`;

const ExButton = styled.button`
  margin-top: 24px;
  width: 450px;
  height: 80px;
  border-radius: 57px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonEx = styled.div`
  ${({ theme }) => theme.fonts.header6};
  color: ${({ theme }) => theme.colors.primary[900]};
  display: flex;
`;
const ButtonTitle = styled.p``;

const ExImo = styled.img`
  margin-left: 24px;
`;
