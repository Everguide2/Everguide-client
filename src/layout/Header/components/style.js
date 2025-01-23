import {styled} from "styled-components";

export const MainHeader = styled.div`
  height: 100%;
`
export const MainLogo = styled.img`
  width: 168px;
  height: 72px;
  cursor: pointer;
`
export const LoginCheck = styled.div`
  flex-basis: 260px;
  display: flex;
  justify-content: flex-end;
`
export const Notify = styled.img`
  width: 48px;
  height: 48px;
`
export const Profile = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${({theme}) => theme.colors.gray[400]};
  margin-left: 39px;
`

export const HeaderContainer = styled.div`
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

export const SubHeader = styled.div`
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
export const MenuItem = styled.li.withConfig({
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