import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ExImg from "../../../../assets/images/img-image240.svg";

const B1Left = (dummy) => {
  const navigate = useNavigate();
  const policy = dummy.data.data.이번주마감되는정책?.[0];

  const goToDetailPolicy = (id) => {
    navigate(`support/${id}`);
  };

  return (
    <PBox1>
      {policy && (
        <>
          <IMG1 src={ExImg} />
          <InfoLine>
            <Location>{policy.location}</Location>
            <Category>{policy.category}</Category>
            <Company>{policy.company}</Company>
          </InfoLine>
          <PolicyTitle onClick={() => goToDetailPolicy(policy.id)}>
            {policy.title}
          </PolicyTitle>
          <BriefEx>{policy.subTitle}</BriefEx>
        </>
      )}
    </PBox1>
  );
};

export default B1Left;

const PBox1 = styled.div`
  width: 598px;
  height: 481px;
  background-color: #ffe28a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #8f8d8a;
`;

const IMG1 = styled.img`
  width: 518px;
  height: 247px;
  object-fit: cover;
`;

const InfoLine = styled.div`
  display: flex;
  width: 518px;
  height: 32px;
  margin-top: 22px;
`;

const Location = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  margin-right:22px;
  color: #d32f2f;
`;

const Category = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  margin-right:22px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Company = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  color: ${({ theme }) => theme.colors.state.blue};
`;

const PolicyTitle = styled.button`
  margin-top: 4px;
  width: 518px;
  height: 38px;
  border: none;
  background-color: #ffe28a;
  display: flex;
  ${({ theme }) => theme.fonts.subHeader1}
  cursor: pointer;
  margin-bottom: 4px;
`;

const BriefEx = styled.p`
  width: 518px;
  height: 52px;
  margin-top: 4px;
  ${({ theme }) => theme.fonts.body4}
  margin-left:10px;
`;
