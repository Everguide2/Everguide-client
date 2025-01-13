import { styled } from 'styled-components';
import { strings } from '../constants/strings';
import { useState } from "react";
import {path} from '../routes/path.js';

const Header = () => {
  const [active, setActive] = useState("");

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  return (
    <Container>
      <MainHeader>
        <HeaderContainer>

        </HeaderContainer>
      </MainHeader>
      <SubHeader>
        <HeaderContainer>
          <ul>
            <MenuItem active={active === path.FIND} onClick={() => {handleMenuClick(path.FIND)}}><p>{strings.findPolicy}</p></MenuItem>
            <MenuItem active={active === path.SUPPORT} onClick={() => {handleMenuClick(path.SUPPORT)}}><p>{strings.supportPolicy}</p></MenuItem>
            <MenuItem active={active === path.EVENT} onClick={() => {handleMenuClick(path.EVENT)}}><p>{strings.eventEducation}</p></MenuItem>
            <MenuItem active={active === path.WORK} onClick={() => {handleMenuClick(path.WORK)}}><p>{strings.workInformation}</p></MenuItem>
          </ul>
        </HeaderContainer>
      </SubHeader>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`
const HeaderContainer = styled.div`
  width: ${(props) => props.theme.size.safeArea};  
  margin: 0 auto;
`
const MainHeader = styled.div`
  height: 110px;
`
const SubHeader = styled.div`
  height: 74px;
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
    
  ul{
    ${(props) => props.theme.fonts.header6}
    color: ${(props) => props.theme.colors.gray[900]};
    display: flex;
    padding-left: 139px;
  }
`
const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  
  ::before {
    content: '';
    width: 1px;
    height: 28px;
    background-color: ${(props) => props.theme.colors.gray[200]};
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  :first-child::before{
    display: none;
  }
  
  p {
    padding: 18px 48px;
    color: ${(props) => (props.active ? props.theme.colors.primary[900] : props.theme.colors.gray[900])};
  }

  p:hover {
    color: ${(props) => props.theme.colors.primary[900]};
  }
  
  p::after,
  p:hover::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 102px;
    height: 6px;
  }
  p::after{
    background-color: ${(props) =>  (props.active ? props.theme.colors.primary[500] : undefined)};
  }
  p:hover::after{
    background-color: ${(props) =>  props.theme.colors.primary[500]};
  }

 
`