import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <Test>
      <TestTitle>헤더 영역</TestTitle>
    </Test>
  );
};

export default Header;

// 삭제 예정
const Test = styled.div`
  width: 100%;
  height: 184px;
  background-color: ${(props) => props.theme.colors.primary[900]};
`

const TestTitle = styled.h1`
  ${(props) => props.theme.fonts.header0 }
`