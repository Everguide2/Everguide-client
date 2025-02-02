import React from "react";
import styled from "styled-components";

const GenderButtonGroup = ({ selectedGender, onGenderSelect }) => {
  return (
    <GenderWrapper>
      <Label>성별</Label>
      <ButtonGroup>
        <GenderButton
          isSelected={selectedGender === "남자"}
          onClick={() => onGenderSelect("남자")}
        >
          남자
        </GenderButton>
        <GenderButton
          isSelected={selectedGender === "여자"}
          onClick={() => onGenderSelect("여자")}
        >
          여자
        </GenderButton>
      </ButtonGroup>
    </GenderWrapper>
  );
};

export default GenderButtonGroup;

const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const GenderButton = styled.button`
  ${({ theme }) => theme.fonts.subHeader5};
  flex: 1;
  height: 56px;
  border: 2px solid ${({ isSelected, theme }) => (isSelected ? theme.colors.primary[500] : theme.colors.gray[200])};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.primary[500] : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#787878")};
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.primary[600] : theme.colors.gray[100])};
  }
`;
