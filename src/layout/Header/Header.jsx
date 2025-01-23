import { styled } from 'styled-components';
import { useCustomNavigation } from "@/hooks/useCustomNavigation.js";
import { string } from '../../constants/index.js';
import {useEffect, useState} from "react";
import { icMainLogo, icNotify } from "../../assets/index.js";
import { Button, SearchBar } from "../../components/index.js";
import {pagePath} from '../../routes/pagePath.js';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [active, setActive] = useState("");
  const {navigateTo} = useCustomNavigation();

  useEffect(() => {
    const savedMenu = sessionStorage.getItem("activeMenu");
    if (savedMenu) {
      setActive(savedMenu);
    }
  }, []);

  const handleMenuClick = (menu) => {
    setActive(menu);
    sessionStorage.setItem("activeMenu", menu);
    navigateTo(menu);
  }

  return (
    <Container>
      <MainHeader>
        <HeaderContainer>
          <div>
            <MainLogo src={icMainLogo} onClick={() => handleMenuClick('/')} />
            <SearchBar placeHolder={string.searchBarPlaceHolder}/>
            <LoginCheck>
              {isLogin ?
                  <>
                    <Notify src={icNotify} />
                    <Profile></Profile>
                  </>
              :
                <Button text={string.LoginRegister} onClick={() => handleMenuClick(pagePath.LOGIN)} />
              }
            </LoginCheck>
          </div>
        </HeaderContainer>
      </MainHeader>

      <SubHeader>
        <HeaderContainer>
          <ul>
            <MenuItem active={active === pagePath.POLICY} onClick={() => {handleMenuClick(pagePath.POLICY)}}><p>{string.findPolicy}</p></MenuItem>
            <MenuItem active={active === pagePath.SUPPORT} onClick={() => {handleMenuClick(pagePath.SUPPORT)}}><p>{string.supportPolicy}</p></MenuItem>
            <MenuItem active={active === pagePath.EVENT} onClick={() => {handleMenuClick(pagePath.EVENT)}}><p>{string.eventEducation}</p></MenuItem>
            <MenuItem active={active === pagePath.JOB} onClick={() => {handleMenuClick(pagePath.JOB)}}><p>{string.workInformation}</p></MenuItem>
          </ul>
        </HeaderContainer>
      </SubHeader>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 29px rgba(0,0,0,0.13);
`

const HeaderContainer = styled.div`
  width: ${(props) => props.theme.size.safeArea};  
  margin: 0 auto;
  
  div:first-child {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 60px;
    
    input{

    }
    
  }
`
const MainHeader = styled.div`
  height: 100%;
`
const MainLogo = styled.img`
  width: 168px;
  height: 72px;
  cursor: pointer;
`
const LoginCheck = styled.div`
  flex-basis: 260px;
  display: flex;
  justify-content: flex-end;
`
const Notify = styled.img`
  width: 48px;
  height: 48px;
`
const Profile = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${({theme}) => theme.colors.gray[400]};
  margin-left: 39px;
`
const SubHeader = styled.div`
  height: 74px;
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
    
  ul{
    ${({theme}) => theme.fonts.header6}
    color: ${({theme}) => theme.colors.gray[900]};
    display: flex;
    padding-left: 110px;
    
    li::before {
      content: "";
      width: 1px;
      height: 28px;
      background-color: ${({ theme }) => theme.colors.gray[200]};
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    :first-child::before {
      display: none;
    }
  }
`
const MenuItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  position: relative;
  cursor: pointer;

  p {
    padding: 18px 48px;
    color: ${({ active, theme }) =>
            active ? theme.colors.primary[900] : theme.colors.gray[900]};
  }

  p:hover {
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  p::after,
  p:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 102px;
    height: 6px;
  }
  p::after {
    background-color: ${({ active, theme }) =>
            active ? theme.colors.primary[500] : "transparent"};
  }
  p:hover::after {
    background-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;