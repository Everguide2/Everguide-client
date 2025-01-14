import { styled } from 'styled-components';
import { strings } from '../constants/strings';
import { useState } from "react";
import { icMainLogo } from "../assets";
import { Button, SearchBar } from "../components";
import {pagePath} from '../routes/pagePath.js';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [active, setActive] = useState("");

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  return (
    <Container>
      <MainHeader>
        <HeaderContainer>
          <div>
            <MainLogo src={icMainLogo} onClick={() => handleMenuClick()} />
            <SearchBar placeHolder={strings.searchBarPlaceHolder}/>
            {isLogin ? <LoginCheck></LoginCheck> : <Button text={strings.LoginRegister} />}
          </div>
        </HeaderContainer>
      </MainHeader>

      <SubHeader>
        <HeaderContainer>
          <ul>
            <MenuItem active={active === pagePath.FIND} onClick={() => {handleMenuClick(pagePath.FIND)}}><p>{strings.findPolicy}</p></MenuItem>
            <MenuItem active={active === pagePath.SUPPORT} onClick={() => {handleMenuClick(pagePath.SUPPORT)}}><p>{strings.supportPolicy}</p></MenuItem>
            <MenuItem active={active === pagePath.EVENT} onClick={() => {handleMenuClick(pagePath.EVENT)}}><p>{strings.eventEducation}</p></MenuItem>
            <MenuItem active={active === pagePath.WORK} onClick={() => {handleMenuClick(pagePath.WORK)}}><p>{strings.workInformation}</p></MenuItem>
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
  
  div{
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 60px;
    
    input{
      margin-left: -76px;
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
`
const SubHeader = styled.div`
  height: 74px;
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
    
  ul{
    ${({theme}) => theme.fonts.header6}
    color: ${({theme}) => theme.colors.gray[900]};
    display: flex;
    padding-left: 120px;
    
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