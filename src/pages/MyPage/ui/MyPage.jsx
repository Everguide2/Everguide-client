import { useState } from "react";
import styled from "styled-components";
import { useGetMypage } from "../feature/useGetMypage"; 
import SavedList from "@pages/MyPage/components/SavedList.jsx";
import Sidebar from "@pages/MyPage/ui/Sidebar.jsx";
import UserInfoForm from "@pages/MyPage/ui/UserInfoForm";
import DeleteAccountModal from "@pages/MyPage/components/modal/DeleteAccountModal";
import LogoutModal from "@pages/MyPage/components/modal/LogoutModal";

const MyPage = () => {
  const { data: userInfo, isLoading, error } = useGetMypage();
  const [activeMenu, setActiveMenu] = useState("info");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  if (isLoading) console.log("로딩 중..");
  if (error) console.log(error.message);

  const isSocialLogin = userInfo?.accounts && userInfo.accounts.length > 0;

  return (
    <Container>
      <Inner>
        <SidebarWrapper>
          <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        </SidebarWrapper>

        <MainContent>
          {activeMenu === "info" && (
            <Content>
              <UserInfoForm userInfo={userInfo} />
              <ButtonContainer isSocialLogin={isSocialLogin}>
                <DeleteButton onClick={() => setIsDeleteModalOpen(true)}>탈퇴하기</DeleteButton>
                <LogoutButton onClick={() => setIsLogoutModalOpen(true)}>로그아웃</LogoutButton>
              </ButtonContainer>
            </Content>
          )}
          {activeMenu === "saved" && (
            <Content>
              <SavedList />
            </Content>
          )}
        </MainContent>

        <DeleteAccountModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
        <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} />
      </Inner>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.gray[50]};
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: ${({theme}) => theme.size.safeArea};
  margin: 0 auto;
`
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
  margin-top: ${({isSocialLogin}) => (isSocialLogin ? "200px" : "-60px")}; 
`;

const DeleteButton = styled.button`
  background-color: ${({theme}) => theme.colors.gray[100]};
  color: ${({theme}) => theme.colors.gray[500]};
  padding: 8px 10px;
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
  border-radius: 8px;
  cursor: pointer;
  width: 110px;
`;

const LogoutButton = styled.button`
  background-color: white;
  color: ${({theme}) => theme.colors.secondary[600]};
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.secondary[600]};
  cursor: pointer;
  width: 110px;
`;
