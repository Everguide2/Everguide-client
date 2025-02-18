import React from "react";
import styled from "styled-components";
import {
  icMyPagePencil,
  icMyPageBookmark,
  icMyPagePencilclick,
  icMyPageBookmarkclick,
} from "@/assets";

const Sidebar = ({ activeMenu, onMenuClick }) => {
  return (
    <Container>
      <Title>내 정보</Title>
      <Menu>
        <MenuItem
          $active={activeMenu === "info"}
          onClick={() => onMenuClick("info")}
        >
          <IconWrapper>
            <img
              src={activeMenu === "info" ? icMyPagePencilclick : icMyPagePencil}
              alt="내 정보 수정"
            />
          </IconWrapper>
          <Text $active={activeMenu === "info"}>내 정보 수정</Text>
        </MenuItem>
        <MenuItem
          $active={activeMenu === "saved"}
          onClick={() => onMenuClick("saved")}
        >
          <IconWrapper>
            <img
              src={
                activeMenu === "saved"
                  ? icMyPageBookmarkclick
                  : icMyPageBookmark
              }
              alt="저장한 목록"
            />
          </IconWrapper>
          <Text $active={activeMenu === "saved"}>저장한 목록</Text>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 262px;
  background-color: ${({ theme }) => theme.colors.realWhite};
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 130px 50px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 11px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.span`
  ${({ theme }) => theme.fonts.subHeader3};
  color: ${(props) =>
    props.$active
      ? props.theme.colors.primary[900]
      : props.theme.colors.gray[500]};
`;
