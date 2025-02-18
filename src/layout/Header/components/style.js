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
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`
export const Notify = styled.img`
  width: 48px;
  height: 48px;
`

export const PNContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const Profile = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${({theme}) => theme.colors.gray[300]};
  margin-left: 39px;
`

export const HeaderContainer = styled.div`
  position: relative;
  width: ${(props) => props.theme.size.safeArea};  
  margin: 0 auto;
`
export const Inner = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 60px;
`
export const SubHeader = styled.div`
  height: 74px;
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
`
export const SubHeaderMain = styled.ul`
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
`
export const JobSubHeader = styled.div`
    position: absolute;
    width: 220px;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.gray[300]};
    left: 679px;
    
    ul{
       ${({theme}) => theme.fonts.subHeader5};
        cursor:pointer;
    }
`

export const SubMenuItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    color: ${({ $active, theme }) =>
            $active ? theme.colors.primary[900] : theme.colors.gray[900]};
    
    &:hover{
        color: ${({theme}) => theme.colors.primary[900]};
    }
    &:first-child::after{
        content: '';
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 180px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.gray[300]};
    }
`
export const MenuItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  position: relative;
  cursor: pointer;

  p {
    padding: 18px 48px;
    color: ${({ $active, theme }) =>
    $active ? theme.colors.primary[900] : theme.colors.gray[900]};
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
    background-color: ${({ $active, theme }) =>
            $active ? theme.colors.primary[500] : "transparent"};
  }
  p:hover::after {
    background-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;