import React from "react";
import styled from "styled-components";

const Divider = ({ children }) => {
  return <StyledDivider>{children}</StyledDivider>;
};

export default Divider;

const StyledDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    margin: 0 10px;
  }
`;
