import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme";
import { useNavigate } from "react-router-dom";

const B2Left = (dummy) => {
  const navigate = useNavigate();
  const newPolicy = dummy.data.data.새로나온정책?.slice(0, 4) || []; // 데이터가 없을 경우 빈 배열 사용

  const goToDetailPolicy = (id) => {
    navigate(`support/${id}`);
  };

  return (
    <EachBoard>
      {newPolicy.map((policy) => (
        <NewPolicyBox
          key={policy.id}
          onClick={() => goToDetailPolicy(policy.id)}
        >
          <DateAndCategoryNew>
            <NewPoLocation>
              {policy.location || "데이터가 없습니다."}
            </NewPoLocation>
            <Dot>·</Dot>
            <NewPoCategory>
              {policy.category || "데이터가 없습니다."}
            </NewPoCategory>
          </DateAndCategoryNew>
          <NewPoTitle>{policy.title || "데이터가 없습니다."}</NewPoTitle>
        </NewPolicyBox>
      ))}
    </EachBoard>
  );
};

export default B2Left;

const EachBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  height: 340px;
  border-top: 1px solid black;
  margin-right: 42px;
`;
const NewPolicyBox = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #8f8d8a;
  background-color: #f6f4f2;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
`;

const DateAndCategoryNew = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.body4}
`;

const NewPoLocation = styled.p`
  color: #d32f2f;
  margin-right: 13px;
`;
const Dot = styled.p`
  color: #8f8d8a;
  width: 11px;
  ${({ theme }) => theme.fonts.subHeader6}
`;
const NewPoCategory = styled.p`
  color: #8f8d8a;
`;
const NewPoTitle = styled.p`
  ${({ theme }) => theme.fonts.subHeader3};
  text-align: left;
`;
