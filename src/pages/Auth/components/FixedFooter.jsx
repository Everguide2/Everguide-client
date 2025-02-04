import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Links from "./Links";

const FixedFooter = ({ links, onSubmit, isEnabled }) => (
  <Footer>
    <StyledButton type="button" width="494px" height="56px" onClick={onSubmit} disabled={!isEnabled}>
      가입하기
    </StyledButton>
    <Links links={links} />
  </Footer>
);

export default FixedFooter;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-bottom: 40px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? "#d9d9d9" : "#ffcc00")}; /* ✅ 버튼 활성화 여부에 따른 색상 변경 */
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; /* ✅ 비활성화 시 커서 변경 */
  color: ${({ disabled }) => (disabled ? "#ffffff" : "#000000")}; /* ✅ 버튼 텍스트 색상 */
  transition: background-color 0.3s ease, color 0.3s ease;
`;
