import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { imgProfile } from "@/assets";
import { icMyPageKakao, icMyPageNaver } from "@/assets";
import ProfileImageModal from "../components/modal/ProfileImageModal";
import ChangePasswordModal from "../components/modal/ChangePasswordModal";

const UserInfoForm = ({ userInfo, onChange, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [originalUserInfo, setOriginalUserInfo] = useState(userInfo);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // 변경 사항 감지
  useEffect(() => {
    const hasChanged = JSON.stringify(userInfo) !== JSON.stringify(originalUserInfo);
    setIsUpdated(hasChanged);
  }, [userInfo, originalUserInfo]);

  // 간편 로그인 여부 확인 (카카오 or 네이버 계정 존재 여부)
  const isSocialLogin = userInfo.accounts && userInfo.accounts.length > 0;

  return (
    <OuterContainer>
      <InnerContainer>
        <Header>
          <Title>내 정보 수정</Title>
          <Subtitle>여기서 계정 정보를 관리하세요</Subtitle>
        </Header>
        <Form>
          {/* 프로필 이미지 */}
          <ProfileImageWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
          >
            {isHovered ? <ProfileImg src={imgProfile} alt="프로필 이미지" /> : <DefaultProfile />}
          </ProfileImageWrapper>

          {/* 사용자 정보 입력 */}
          <FormGroup>
            <Label>이름</Label>
            <Input type="text" name="name" value={userInfo.name} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <Label>생년월일</Label>
            <DateInput>
              <Input type="text" name="birthYear" value={userInfo.birthYear} onChange={onChange} />
            </DateInput>
          </FormGroup>
          <FormGroup>
            <Label>전화번호</Label>
            <Input type="text" name="phone" value={userInfo.phone} onChange={onChange} />
          </FormGroup>

          {isSocialLogin ? (
            //  소셜셜 로그인 사용자 (카카오/네이버)
            <>
              <FormGroup>
                <Label>계정</Label>
                <AccountContainer>
                  {userInfo.accounts.map((account, index) => (
                    <AccountRow key={index}>
                      <AccountIcon src={account.type === "Kakao" ? icMyPageKakao : icMyPageNaver} alt={account.type} />
                      <AccountEmail>{account.email}</AccountEmail>
                    </AccountRow>
                  ))}
                </AccountContainer>
              </FormGroup>

              {/* 소셜 로그인 사용자만 수정하기 버튼 보이기 */}
              <UpdateButton onClick={onUpdate} disabled={!isUpdated} isUpdated={isUpdated}>
                수정하기
              </UpdateButton>
            </>
          ) : (
            // 일반반 로그인 사용자
            <>
              <FormGroup>
                <Label>이메일</Label>
                <Input type="text" name="email" value={userInfo.email} onChange={onChange}/>
              </FormGroup>
              <FormGroup>
                <Label>비밀번호</Label>
                <ChangePasswordButton onClick={() => setIsPasswordModalOpen(true)}>변경하기</ChangePasswordButton>
              </FormGroup>

              <ChangePasswordModal isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} />
            </>
          )}

        </Form>
      </InnerContainer>

      {isModalOpen && <ProfileImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </OuterContainer>
  );
};

export default UserInfoForm;


const OuterContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 904px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header0};
  color: ${({ theme }) => theme.colors.primary[900]};
  margin: 0;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.subHeader3};
  color: #bbbbbb;
  margin-top: 10px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 907px;
  background-color: white;
  padding: 30px 80px;
  border-radius: 42px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
`;

const Label = styled.label`
  min-width: 100px;
  ${({ theme }) => theme.fonts.subHeader3};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Input = styled.input`
  width: 412px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.subHeader5};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const AccountRow = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[200]};
  padding-left: 10px;
  border-radius: 4px;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  width: 412px;
`;

const AccountIcon = styled.img`
  width: 40px;
  height: 38px;
`;

const AccountEmail = styled.span`
  font-size: 14px;
  color: #333;
  flex: 1;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const UpdateButton = styled.button`
  display: block;
  width: 354px;
  margin: 200px auto;
  margin-bottom: 0px;
  padding: 15px;
  border-radius: 28px;
  border: none;
  background-color: ${({ isUpdated, theme }) => (isUpdated ? theme.colors.primary[500] : theme.colors.gray[200])};
  color: ${({ isUpdated, theme }) => (isUpdated ? "white" : theme.colors.gray[300])};
  cursor: ${({ isUpdated }) => (isUpdated ? "pointer" : "default")};
  box-shadow: ${({ isUpdated }) => (isUpdated ? "0px 4px 15px rgba(251, 227, 0, 0.5)" : "none")};
  ${({ theme }) => theme.fonts.header5};
`;

const DefaultProfile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #D9D9D9;
`;


const DateInput = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;
;`

const ChangePasswordButton = styled.button`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  color: ${({ theme }) => theme.colors.gray[800]}
  ${({ theme }) => theme.fonts.body3};
  width: 110px;
  height: 41px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 315px;
`;