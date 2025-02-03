import React from "react";

const Question = ({ questionData, onSelect, selectedOption }) => {
  if (!questionData) return <h2>오류가 발생했습니다. 다시 시도해주세요.</h2>;

  const { question, options } = questionData;

  return (
    <div>
      <h2>{question}</h2>
      <div style={{ margin: "20px 0" }}>
        {options.map((option, index) => {
          const optionText = option.text || option; // 옵션이 객체인지 문자열인지 확인
          const isSelected = selectedOption === optionText;

          return (
            <button key={index} style={choiceButtonStyle(isSelected)} onClick={() => onSelect(option)}>
              {optionText}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// 버튼 스타일 함수
const choiceButtonStyle = (isSelected) => ({
  display: "block",
  margin: "10px auto",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  border: `1px solid ${isSelected ? "#fbc02d" : "#ddd"}`,
  backgroundColor: isSelected ? "#fff7e6" : "#f9f9f9",
  cursor: "pointer",
});

export default Question;
