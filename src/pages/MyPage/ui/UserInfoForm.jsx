import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { imgProfile, imgDefault, icMyPageUpdate } from "@/assets";
import { icMyPageKakao, icMyPageNaver } from "@/assets";
import ProfileImageModal from "../components/modal/ProfileImageModal";
import ChangePasswordModal from "../components/modal/ChangePasswordModal";

const UserInfoForm = ({ userInfo, onChange, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(imgDefault);
  const [savedUserInfo, setSavedUserInfo] = useState(userInfo);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const hasChanged = JSON.stringify(userInfo) !== JSON.stringify(savedUserInfo);
    setIsUpdated(hasChanged);
    if (hasChanged) {
      setIsSaved(false); // 🔥 새로운 변경이 발생하면 다시 활성화
    }
  }, [userInfo, savedUserInfo]);
  

  // 간편 로그인 여부 확인 (카카오 or 네이버 계정 존재 여부)
  const isSocialLogin = userInfo.accounts && userInfo.accounts.length > 0;

  const handleImageUpload = (imageUrl) => {
    setProfileImage(imageUrl);
  };

  const handleUpdate = async () => {
    if (!isUpdated) return; // 이미 비활성화 상태라면 실행 안 함

    try {
      await onUpdate(); // 부모 컴포넌트에 업데이트 요청
      setSavedUserInfo({ ...userInfo }); // 최신 상태 저장
      setIsUpdated(false); // 🔥 저장 후 버튼 비활성화
    } catch (error) {
      console.error("업데이트 실패:", error);
    }
  };
  

  const handleBirthChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // 숫자만 입력 가능
    let formattedValue = "";

    if (value.length > 4) {
      formattedValue = `${value.slice(0, 4)} / ${value.slice(4, 6)}`;
    } else {
      formattedValue = value;
    }
    if (value.length > 6) {
      formattedValue = `${value.slice(0, 4)} / ${value.slice(4, 6)} / ${value.slice(6, 8)}`;
    }

    onChange({ target: { name: "birthYear", value: formattedValue } });
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Header>
          <Title>내 정보 수정</Title>
          <Subtitle>여기서 계정 정보를 관리하세요</Subtitle>
        </Header>
        <Form>
          <ProfileImageWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
          >
            {profileImage && !isHovered && <ProfileImg src={profileImage} alt="프로필 이미지" />}
            {isHovered && <ProfileImg src={imgProfile} alt="프로필 변경 미리보기" />}
          </ProfileImageWrapper>

          {/* 사용자 정보 입력 */}
          <FormGroup>
            <Label>이름</Label>
            <Input type="text" name="name" value={userInfo.name} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <Label>생년월일</Label>
            <BirthInput
              type="text"
              name="birthYear"
              value={userInfo.birthYear}
              onChange={handleBirthChange}
              maxLength="14"
            />
          </FormGroup>
          <FormGroup>
            <Label>전화번호</Label>
            <Input type="text" name="phone" value={userInfo.phone} onChange={onChange} />
          </FormGroup>

          {isSocialLogin ? (
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

              <UpdateButton onClick={handleUpdate} disabled={!isUpdated || isSaved} isUpdated={isUpdated} isSaved={isSaved}>
                수정하기
                {isSaved && <SaveIcon src={icMyPageUpdate} alt="저장 완료" />}
              </UpdateButton>
            </>
          ) : (
            <>
              <FormGroup>
                <Label>이메일</Label>
                <Input type="text" name="email" value={userInfo.email} onChange={onChange} />
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

      {isModalOpen && (
        <ProfileImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onImageUpload={handleImageUpload} />
      )}
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
  position: relative;
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
  padding: 5px 0;
  width: 412px;
  padding-left: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 354px;
  margin: 200px auto 0;
  padding: 15px;
  border-radius: 28px;
  border: none;
  
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.gray[200] : theme.colors.primary[500])};

  color: ${({ disabled, theme }) => 
    disabled ? theme.colors.gray[300] : "white"};

  cursor: ${({ disabled }) => 
    disabled ? "default" : "pointer"};

  box-shadow: ${({ disabled }) => 
    disabled ? "none" : "0px 4px 15px rgba(251, 227, 0, 0.5)"};

  ${({ theme }) => theme.fonts.header5};
`;


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

const BirthInput = styled(Input)`
  text-align: center;
  ${({ theme }) => theme.fonts.subHeader5};
  max-width: 412px;
  letter-spacing: 10px;

`;

