import {styled} from "styled-components";
import BookMark from "./BookMark.jsx";
import LastDay from "./LastDay.jsx";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const Card = ({title,subTitle,category,bookmark,assign,dDay,isLogin,img}) => {

  return (
      <Container rest={dDay}>
        <Top img={img}>
          {img && <Image src={img}/>}
          <Title img={''}>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Category>{category}</Category>
          {isLogin && <BookMark isBookmarked={bookmark}/>}
        </Top>
        <Bottom img={img}>
          {img && <Title img={img}>{title}</Title>}
          <Assign>{assign}</Assign>
          <Dday rest={dDay}>{dDay === 0 ? string.end : string.dTitle + dDay}</Dday>
          {dDay === 1 && <LastDay/>}
        </Bottom>
      </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 340px;
  border-radius: 26px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  opacity: ${({rest}) => rest === 0 ? '43%': '' };
`
const Top = styled.div`
  width: 100%;
  height: ${({img}) => img ? `178px` : `156px`};
  overflow: hidden;
  border-radius: 26px 26px 0 0 ;
  position: relative; 
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Category = styled.p`
  ${({theme}) => theme.fonts.caption4};
  box-sizing: border-box;
  padding: 1px 12px;
  border-radius: 33px;
  background-color: ${({theme}) => theme.colors.gray[100]};
  position: absolute;
  top: 13px;
  left: 17px;
`

const SubTitle= styled.p`
  ${({theme}) => theme.fonts.caption1};
  color: ${({theme}) => theme.colors.gray[500]};
  margin: 5px 0 0 17px;
`
const Bottom = styled.div`
  width: 100%;
  height: ${({img}) => img ? `104px` : `100px`};
  border-radius: 0 0 26px 26px;
  background-color: ${({theme}) => theme.colors.white};
  box-sizing: border-box;
  position: relative;
`

const Title = styled.p`
  ${({theme}) => theme.fonts.body1};
  color: ${({theme}) => theme.colors.gray[900]};
  padding: ${({img}) => img ? `5px 0 0 12px` : `46px 0 0 17px`};
`
const Assign = styled.p`
  position: absolute;
  bottom: 10px;
  left: 16px;
  ${({theme}) => theme.fonts.caption1};
  color: ${({theme}) => theme.colors.gray[700]};
`
const Dday = styled.p`
  position: absolute;
  bottom: 10px;
  right: 14px;
  ${({theme}) => theme.fonts.body3};
  color: ${({rest, theme}) => rest === 0 ? theme.colors.black : theme.colors.secondary[500]};
`
