import {styled} from "styled-components";
import {string} from "@constants/index.js";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";
import {pagePath} from "@/routes/pagePath.js";

// eslint-disable-next-line react/prop-types
const Profile = ({onMouseEnter, onMouseLeave}) => {
  const {navigateTo} = useCustomNavigation();
  const onClickMenu = (path) => {
    navigateTo(path);
  }

  return (
      <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ProfileContainer>
          <Profiles></Profiles>
          <Information>
            <Name>홍길동</Name>
            <Email>gildoeng@naver.com</Email>
          </Information>
        </ProfileContainer>
        <MypageContainer onClick={()=> onClickMenu(pagePath.MYPAGE)}>{string.myPage}</MypageContainer>
        <LogoutContainer onClick={()=> onClickMenu(pagePath.HOME)}>{string.logout}</LogoutContainer>
      </Container>
  );
};

export default Profile;

const Container = styled.div`
  position: absolute;
  top: 108px;
  right: -14px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 4px 13.4px rgba(0,0,0,0.3);
  width: 260px;
  z-index: 99;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  gap: 15px;
`
const Profiles = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${({theme}) => theme.colors.gray[300]};
`
const Information = styled.div``
const Name = styled.p`
  ${({theme}) => theme.fonts.subHeader5};
  color: #1E1E1E;
`
const Email = styled.p`
  ${({theme}) => theme.fonts.body4};
  color: ${({theme}) => theme.colors.gray[400]};
`
const CommonContainer = styled.div`
  ${({theme}) => theme.fonts.body2};
  background-color: ${({theme}) => theme.colors.gray[50]};
  text-align: center;
  padding: 12px 0;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.gray[200]};
  }
`


const MypageContainer = styled(CommonContainer)`
  color: ${({theme}) => theme.colors.gray[900]};
  border-top: 1px solid ${({theme}) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};

`
const LogoutContainer = styled(CommonContainer)`
  color: ${({theme}) => theme.colors.state.red};
  border-radius: 0 0 12px 12px;
`