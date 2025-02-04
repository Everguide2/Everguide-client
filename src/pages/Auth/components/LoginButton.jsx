import React from "react";
import styled from "styled-components";

const LoginButton = ({ bgColor, textColor, icon, altText, label, onClick }) => (
  <StyledButton bgColor={bgColor} textColor={textColor} onClick={onClick}>
    <Icon src={icon} alt={altText} />
    {label}
  </StyledButton>
);

export default LoginButton;

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  width: 494px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.body1};
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;