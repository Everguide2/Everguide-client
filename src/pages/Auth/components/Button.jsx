import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, disabled, width, height }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${({ disabled, theme }) =>
    disabled ? "#F3F3F3" : theme.colors.primary[500]};
  width: ${({ width }) => width || "494px"};
  height: ${({ height }) => height || "56px"};
  color: ${({ disabled, theme }) =>
    disabled ? "#BBBBBB" : theme.colors.realWhite}; 
  border: none;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ theme }) => theme.fonts.subHeader5};

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? "#F3F3F3" : theme.colors.primary[600]}; 
  }
`;

