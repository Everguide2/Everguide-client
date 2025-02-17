import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme";

const BlockArea = ({ img, Shortcut, text }) => {
  return (
    <SiteBlock>
      <SiteBanner>
        <img src={img} />
      </SiteBanner>
      <SiteEx>
        {text.map((str) => {
          return <EachEx>{str}</EachEx>;
        })}
      </SiteEx>
      <ShortcutButton>
        <ButtonImg src={Shortcut} />
      </ShortcutButton>
    </SiteBlock>
  );
};

export default BlockArea;

const SiteBlock = styled.div`
  width: 1313px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-top: 4px solid ${({ theme }) => theme.colors.primary[600]};
`;

const SiteBanner = styled.div`
  width: 100%;
  height: 248px;
  border: 2px solid ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

const SiteEx = styled.p`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EachEx = styled.p`
  ${({ theme }) => theme.fonts.header5};
  color: ${({ theme }) => theme.colors.gray[900]};
`;
const ShortcutButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 30px;
`;

const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill; /* 이미지가 버튼 크기에 맞춰 정확하게 채워짐 */
`;
