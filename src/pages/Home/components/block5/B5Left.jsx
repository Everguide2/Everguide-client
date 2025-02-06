import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

const B5Left = (dummy) => {
  return (
    <TitleAndList>
      <TitleLine>
        <Title>이번주의 일자리 정보</Title>
        <MoreButton>더보기 &gt;</MoreButton>
      </TitleLine>
      {/*추후 API작업 시에 바꿀 예정 */}
      {[0, 1, 2, 3, 4, 5].map((number, idx) => {
        return <JobLine key={idx}>{dummy.data.data[0].content}</JobLine>;
      })}
    </TitleAndList>
  );
};

export default B5Left;

const TitleAndList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const TitleLine = styled.div`
  display: flex;
  align-items: center;
  width: 576px;
  height: 70px;
  margin-bottom: 27px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.header0}
  margin-right:63px;
`;

const MoreButton = styled.button`
  width: 110px;
  height: 37px;
  background-color: #ffbf00;
  border: none;
  ${({ theme }) => theme.fonts.subHeader5}
  color:#FDFDFD;
  word-spacing: 12px;
`;

const JobLine = styled.div`
  //   width: 576px;
  height: 36px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[900]};
  align-items: center;
  ${({ theme }) => theme.fonts.body2}
  margin-bottom:4px;
`;
