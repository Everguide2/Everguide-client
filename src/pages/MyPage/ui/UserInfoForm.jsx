import React, { useState } from "react";
import styled from "styled-components";
import { imgProfile } from "@/assets"; 
import ProfileImageModal from "../components/modal/ProfileImageModal";

const UserInfoForm = ({ userInfo, onChange, onGenderChange, onUpdate, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  return (
    <OuterContainer>
      <InnerContainer>
        <Header>
          <Title>내 정보 수정</Title>
          <Subtitle>여기서 계정 정보를 관리하세요</Subtitle>
        </Header>
        <Form>
          {/* 프로필 이미지 - 클릭 시 모달 열기 */}
          <ProfileImage
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)} // 클릭 시 모달 열기
          >
            {isHovered ? <ProfileImg src={imgProfile} alt="프로필 이미지" /> : null}
          </ProfileImage>

          <FormGroup>
            <Label>이름</Label>
            <Input type="text" name="name" value={userInfo.name} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <Label>성별</Label>
            <RadioGroup>
              <RadioButton>
                <input
                  type="radio"
                  name="gender"
                  checked={userInfo.gender === "male"}
                  onChange={() => onGenderChange("male")}
                />
                남성
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  name="gender"
                  checked={userInfo.gender === "female"}
                  onChange={() => onGenderChange("female")}
                />
                여성
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  name="gender"
                  checked={userInfo.gender === "not-specified"}
                  onChange={() => onGenderChange("not-specified")}
                />
                미표기
              </RadioButton>
            </RadioGroup>
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
          <FormGroup>
            <Label>계정</Label>
            {userInfo.accounts.map((account, index) => (
              <Account key={index}>
                <AccountType>{account.type}</AccountType>
                <AccountEmail>{account.email}</AccountEmail>
              </Account>
            ))}
          </FormGroup>
        </Form>
      </InnerContainer>

      {/* 프로필 모달 - isModalOpen이 true일 때만 표시 */}
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
  padding: 30px;
  border-radius: 42px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

// ✅ 프로필 이미지 (클릭 시 모달 오픈)
const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer; /* 클릭 가능하도록 */
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: 20px;
`;

const Label = styled.label`
  display: block;
  ${({ theme }) => theme.fonts.subHeader3};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.subHeader5};
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const DateInput = styled.div`
  display: flex;
  gap: 5px;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const AccountType = styled.div`
  font-size: 14px;
  background-color: #f3f3f3;
  padding: 5px 10px;
  border-radius: 8px;
`;

const AccountEmail = styled.div`
  font-size: 14px;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#FFD700" : "#F3F3F3")};
  color: ${(props) => (props.primary ? "#000" : "#333")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#FFC107" : "#E0E0E0")};
  }
`;
