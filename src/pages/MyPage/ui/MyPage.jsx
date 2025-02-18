import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import UserInfoForm from "./UserInfoForm";
import DeleteAccountModal from "../components/modal/DeleteAccountModal";
import LogoutModal from "../components/modal/LogoutModal";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "이채린",
    gender: "female",
    birthYear: "2002 / 07 / 22",
    phone: "010-9872-7194",
    accounts: [
      { type: "Kakao", email: "Chaerin0722@Gmail.Com" },
      { type: "Naver", email: "Chaerin0722@Gmail.Com" },
    ],
    email: "chaerin0722@gmail.com",
  });

  const [activeMenu, setActiveMenu] = useState("info");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  //  소셜 로그인 여부 확인 (카카오 또는 네이버 계정이 있을 경우)
  const isSocialLogin = userInfo.accounts && userInfo.accounts.length > 0;

  return (
    <Container>
      <SidebarWrapper>
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      </SidebarWrapper>

      <MainContent>
        <Content>
          <UserInfoForm
            userInfo={userInfo}
            onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
          />

          {/*  소셜 로그인 여부에 따라 margin-top 값 변경 */}
          <ButtonContainer isSocialLogin={isSocialLogin}>
            <DeleteButton onClick={() => setIsDeleteModalOpen(true)}>탈퇴하기</DeleteButton>
            <LogoutButton onClick={() => setIsLogoutModalOpen(true)}>로그아웃</LogoutButton>
          </ButtonContainer>
        </Content>
      </MainContent>

      <DeleteAccountModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
      <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} />
    </Container>
  );
};

export default MyPage;

/* ✅ Styled Components */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  height: 1293px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

const SidebarWrapper = styled.div`
  width: 300px;
  padding: 20px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  max-width: 907px;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 600px;
  gap: 20px;
  height: 41px;
  margin-top: ${({ isSocialLogin }) => (isSocialLogin ? "200px" : "-60px")}; /* 소셜 로그인 여부에 따라 변경 */
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[500]};
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  cursor: pointer;
  width: 110px;
`;

const LogoutButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors.secondary[600]};
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary[600]};
  cursor: pointer;
  width: 110px;
`;
