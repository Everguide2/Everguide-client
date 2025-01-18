import React from 'react';

const Question = ({ questionData, onSelect, selectedOption }) => {
  const { question, options } = questionData; 
  return (
    <div>
      <h2>{question}</h2>
      <div style={{ margin: '20px 0' }}>
      {options.map((option, index) => {
          return (
            <button
              key={index}
              style={choiceButtonStyle(selectedOption === option)}
              onClick={() => {
                onSelect(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const choiceButtonStyle = (isSelected) => ({
  display: 'block',
  margin: '10px auto',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: `1px solid ${isSelected ? '#fbc02d' : '#ddd'}`,
  backgroundColor: isSelected ? '#fff7e6' : '#f9f9f9',
  cursor: 'pointer',
  pointerEvents : 'auto',
});

export default Question;
