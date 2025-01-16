import { styled } from "styled-components"
import { icFooterLogo, icInstagram, icKakao, icNaver } from "../../assets/index.js";
import { string } from "../../constants/index.js";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <SectionContainer>
          <Section1>
            <FooterLogo src={icFooterLogo} alt="footerlogo" />
            <SocialContainer>
              <a href="https://www.instagram.com/" target="_blank"><img src={icInstagram} alt="icInstagram" /></a>
              <a href="https://www.kakaocorp.com/page/" target="_blank"><img src={icKakao} alt="icKakao" /></a>
              <a href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0" target="_blank"><img src={icNaver} alt="icNaver" /></a>
            </SocialContainer>
          </Section1>
          <Section2>
            <ul>
              <li>{string.footerIntroduction}</li>
              <li>
                <p>{string.csTitle}</p>
                <p>{string.phoneNumber}</p>
              </li>
              <li>
                <p>{string.emailTitle}</p>
                <p>{string.email}</p>
              </li>
              <li>
                <p>{string.businessTitle}</p>
                <p>{string.number}</p>
              </li>
            </ul>
          </Section2>
          <Section3>
            <ul>
              <li>{string.usePolicy}</li>
              <li>{string.usePersonalInfo}</li>
              <li>{string.ask}</li>
            </ul>
          </Section3>
          <CopyRight>{string.copyRight}</CopyRight>
        </SectionContainer>

      </FooterContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.gray[50]};
`

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray[500]};
  width: ${({theme}) => theme.size.safeArea};  
  height: 335px;
  margin: 0 auto;
`
const SectionContainer = styled.div`
  margin-left: 165px;
`
const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  padding-right: 170px;
`
const FooterLogo = styled.img`
  width: 158px;
  height: 25px;
`
const SocialContainer = styled.div`
  display: flex;
  gap: 27px;
  
  img{
    width: 40px;
    height: 40px;
  }
`

const Section2 = styled.div`
  ul{
    display: flex;
    gap: 44px;
    margin-top: 70px;
    
    li{
      display: flex;
      position: relative;
      gap: 20px;
      p:first-child{
        
      }
      p:first-child::after{
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 20px;
        margin-left: 10px;
        background-color: ${({ theme }) => theme.colors.gray[500]};
      }
    }
    li:first-child{
      color: ${({ theme }) => theme.colors.primary[800]};
    }
  }
`
const Section3 = styled.div`
  ul{
    display: flex;
    gap: 66px;
    margin-top: 21px;
  }
`
const CopyRight = styled.p`
  ${({ theme }) => theme.fonts.caption2}
  margin-top: 76px;
`
