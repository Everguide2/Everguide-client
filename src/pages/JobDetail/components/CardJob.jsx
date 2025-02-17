import {styled} from "styled-components";
import CardBookMark from "@components/Card/CardBookMark.jsx";


// eslint-disable-next-line react/prop-types
const CardJob = ({company, location, title, state, duration, isLogin, bookmark}) => {
  return (
      <Container>
        <Company>{company}</Company>
        <Location>{location}</Location>
        {isLogin && <CardBookMark isBookmarked={bookmark}/>}
        <Title>{title}</Title>
        <Bottom>
          <State>{state}</State>
          <Duration>{duration}</Duration>
        </Bottom>
      </Container>
  );
};

export default CardJob;

export const Container = styled.div`
    width: 340px;
    border-radius: 26px;
    box-sizing: border-box;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    padding: 14px;
    position: relative;
`


export const Company = styled.p`
    ${({theme}) => theme.fonts.subHeader5}
    color: ${({theme}) => theme.colors.state.blue};
`

export const Location = styled.p`
    ${({theme}) => theme.fonts.subHeader5}
`

export const Title = styled.p`
    ${({theme}) => theme.fonts.header4};
    margin-top: 38px;
`

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 75px;
`

export const State = styled.p`
    color: ${({theme}) => theme.colors.white};
    ${({theme}) => theme.fonts.caption1};
    padding: 6px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.primary[500]};
`

export const Duration = styled.p`
    ${({theme}) => theme.fonts.subHeader3}
    color: ${({theme}) => theme.colors.secondary[500]};
    
`