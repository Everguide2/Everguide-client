import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Links from "./Links";

const FixedFooter = ({ onSubmit, links }) => (
  <Footer>
    <Button type="submit" width="494px" height="56px" onClick={onSubmit}>
      가입하기
    </Button>
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
