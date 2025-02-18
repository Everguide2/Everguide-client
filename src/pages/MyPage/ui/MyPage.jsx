import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "@pages/MyPage/ui/sidebar";
import UserInfoForm from "@pages/MyPage/ui/UserInfoForm";
import DeleteAccountModal from "../components/modal/DeleteAccountModal";
import LogoutModal from "../components/modal/LogoutModal";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "이채린",
    gender: "female",
    birthYear: "2002 / 07 / 22",
    birthMonth: "07",
    birthDay: "22",
    phone: "010-9872-7194",
    accounts: [
      { type: "Kakao", email: "Chaerin0722@Gmail.Com" },
      { type: "Naver", email: "Chaerin0722@Gmail.Com" },
    ],
  });

  const [activeMenu, setActiveMenu] = useState("info");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setUserInfo({ ...userInfo, gender });
  };

  const handleUpdate = () => {
    alert("수정 완료");
  };

  const handleLogout = () => {
    alert("로그아웃되었습니다.");
    setIsLogoutModalOpen(false);
  };

  const handleDeleteAccount = () => {
    alert("탈퇴가 완료되었습니다.");
    setIsDeleteModalOpen(false);
  };

  return (
    <Container>
      <SidebarWrapper>
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      </SidebarWrapper>

      <MainContent>
        <Content>
          <UserInfoForm
            userInfo={userInfo}
            onChange={handleChange}
            onGenderChange={handleGenderChange}
            onUpdate={handleUpdate}
            onLogout={() => setIsLogoutModalOpen(true)}
          />

          <ButtonContainer>
            <DeleteButton onClick={() => setIsDeleteModalOpen(true)}>탈퇴하기</DeleteButton>
            <LogoutButton onClick={() => setIsLogoutModalOpen(true)}>로그아웃</LogoutButton>
          </ButtonContainer>
        </Content>
      </MainContent>

      <DeleteAccountModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteAccount} />
      <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} onConfirm={handleLogout} />
    </Container>
  );
};

export default MyPage;

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
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  height: 41px;
  margin-right: 250px;
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
