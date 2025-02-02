import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar"; // 캘린더 컴포넌트 가져오기
import { icSignupCalendar } from "../../../assets"; 

const DateOfBirthInput = ({ label, birthYear, birthMonth, birthDay, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false); // 캘린더 표시 상태

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (year, month, day) => {
    onChange({ target: { name: "birthYear", value: year } });
    onChange({ target: { name: "birthMonth", value: month } });
    onChange({ target: { name: "birthDay", value: day } });

    setShowCalendar(false); // 날짜 선택 후 캘린더 닫기
  };

  const handleInputChange = (e) => {
    onChange(e); // 사용자가 직접 입력할 때 변경 사항 반영
  };

  return (
    <DateInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <DateInputWrapper>
        <StyledInputField
          type="text"
          name="birthYear"
          placeholder="YYYY"
          value={birthYear}
          onChange={handleInputChange} // 사용자가 직접 입력 가능
          required
        />
        <StyledInputField
          type="text"
          name="birthMonth"
          placeholder="MM"
          value={birthMonth}
          onChange={handleInputChange} // 사용자가 직접 입력 가능
          required
        />
        <StyledInputField
          type="text"
          name="birthDay"
          placeholder="DD"
          value={birthDay}
          onChange={handleInputChange} // 사용자가 직접 입력 가능
          required
        />
        <CalendarIcon onClick={toggleCalendar}>
          <img src={icSignupCalendar} alt="캘린더 아이콘" />
        </CalendarIcon>
      </DateInputWrapper>

      {showCalendar && (
        <CalendarPopup>
          <Calendar onDateSelect={handleDateSelect} />
        </CalendarPopup>
      )}
    </DateInputContainer>
  );
};

export default DateOfBirthInput;

// Styled-components
const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
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
  width: 138px;
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

const CalendarPopup = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 10;
  background: white;
  border-radius: 19px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
