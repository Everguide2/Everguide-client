import React, { useState } from "react";
import styled from "styled-components";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, eachDayOfInterval, isSameDay } from "date-fns";
import { icCalendarLeft, icCalendarRight } from "@/assets"; // 아이콘 추가

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleDateClick = (day) => {
    setSelectedDate(day);
    const year = format(day, "yyyy");
    const month = format(day, "MM");
    const dayNumber = format(day, "dd");
    onDateSelect(year, month, dayNumber); // 연도, 월, 일 전달
  };

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <CalendarContainer>
      <Header>
        <MonthYear>{format(currentDate, "yyyy년 M월")}</MonthYear>
        <ArrowButtons>
          <ArrowButton onClick={prevMonth}>
            <img src={icCalendarLeft} alt="이전 달" />
          </ArrowButton>
          <ArrowButton onClick={nextMonth}>
            <img src={icCalendarRight} alt="다음 달" />
          </ArrowButton>
        </ArrowButtons>
      </Header>
      <WeekDays>
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>
      <DatesGrid>
        {days.map((day) => (
          <DateCell
            key={day}
            isSelected={isSameDay(day, selectedDate)}
            isCurrentMonth={day.getMonth() === currentDate.getMonth()}
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </DateCell>
        ))}
      </DatesGrid>
    </CalendarContainer>
  );
};

export default Calendar;

// Styled-components
const CalendarContainer = styled.div`
  width: 470px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
`;

const MonthYear = styled.div`
  ${({ theme }) => theme.fonts.header6};
`;

const ArrowButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => theme.fonts.subHeader2};
`;

const WeekDay = styled.div`
  text-align: center;
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  margin-top: 10px;
`;

const DateCell = styled.div`
  width: 60px;  /* 동그라미 크기 */
  height: 60px; /* 동그라미 크기 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  ${({ theme }) => theme.fonts.body1};

  line-height: 30px; /* 글자를 정확한 높이에 맞추기 */
  color: ${(props) => (props.isCurrentMonth ? "#333" : "#bbb")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[300]};
    color: white;
  }

  ${(props) =>
    props.isSelected &&
    `background: ${props.theme.colors.primary[500]};
     color: white;`}
`;
