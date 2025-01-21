import React from "react";
import styled from "styled-components";
import { icSignupCalendar } from "../../../assets"; 

const DateOfBirthInput = ({ label, birthYear, birthMonth, birthDay, onChange }) => {
  return (
    <DateInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>} 
      <DateInputWrapper>
        <StyledInputField
          type="text"
          name="birthYear"
          placeholder="YYYY"
          value={birthYear}
          onChange={onChange}
          required
        />
        <StyledInputField
          type="text"
          name="birthMonth"
          placeholder="MM"
          value={birthMonth}
          onChange={onChange}
          required
        />
        <StyledInputField
          type="text"
          name="birthDay"
          placeholder="DD"
          value={birthDay}
          onChange={onChange}
          required
        />
        <CalendarIcon>
          <img src={icSignupCalendar} alt="캘린더 아이콘" />
        </CalendarIcon>
      </DateInputWrapper>
    </DateInputContainer>
  );
};

export default DateOfBirthInput;

const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
`;

const DateInputWrapper = styled.div`
  display: flex;
  align-items: center; 
  gap: 8px;
`;

const StyledInputField = styled.input`
  height: 56px;
  width: 138px;; 
  padding: 0 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box; 
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const CalendarIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray[200]}; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 36px; 
    height: 36px;
  }
`;
