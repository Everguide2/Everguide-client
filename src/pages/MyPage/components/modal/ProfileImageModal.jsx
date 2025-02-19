import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { icMyPageCamera, icModalClose } from "@/assets";

const ProfileImageModal = ({ isOpen, onClose, onImageUpload }) => {
  const [image, setImage] = useState(null); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "auto"; 
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  // 파일 업로드 핸들러
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageUpload(imageUrl); // 부모(UserInfoForm)로 업로드된 이미지 전달
    }
  };

  if (!isOpen) return null; 

  return (
    <Overlay>
      <ModalContainer>
        {/* 닫기 버튼 */}
        <CloseButton onClick={onClose}>
          <img src={icModalClose} alt="닫기" />
        </CloseButton>

        <Title>프로필 이미지를 변경해보세요</Title>

        <ProfileImageWrapper>
          {image ? <ProfileImg src={image} alt="프로필 이미지" /> : <GrayCircle />}
        </ProfileImageWrapper>

        {/* 파일 업로드 버튼 */}
        <FileInputLabel>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
          프로필 사진 추가
          <CameraIcon src={icMyPageCamera} alt="카메라 아이콘" />
        </FileInputLabel>
      </ModalContainer>
    </Overlay>
  );
};

export default ProfileImageModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 배경 더 진하게 조정
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding-top: 100px;
`;

const ModalContainer = styled.div`
  background: white;
  width: 626px;  // 💡 모달 크기 조정
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.header5};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 18px;
`;

const ProfileImageWrapper = styled.div`
  width: 200px; 
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f2f2f2;
  margin-bottom: 40px;
`;

const GrayCircle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 50%;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const FileInputLabel = styled.label`
  ${({ theme }) => theme.fonts.subHeader5};
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #ddd;

  &:hover {
    background: #f2f2f2;
  }
`;

const CameraIcon = styled.img`
  width: 20px;
  height: 20px;
`;
