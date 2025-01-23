import React from "react";
import styled from "styled-components";
import { icLoginLogo } from "../../../assets"; 
import { useNavigate } from "react-router-dom"; 

const Logo = ({ title, description, width, height }) => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <LogoImage width={width} height={height} onClick={handleLogoClick}>
        <img src={icLoginLogo} alt="EverGuide Logo" />
      </LogoImage>
      <Subtitle>{title}</Subtitle>
      <Description>{description}</Description>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.div`
  margin-bottom: 10px;

  img {
    width: ${({ width }) => width || "248px"};
    height: ${({ height }) => height || "40px"};
    cursor: pointer;
  }
`;

const Subtitle = styled.h2`
  ${({ theme }) => theme.fonts.header2};
  color: black;
  margin-bottom: 10px;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: #BBBBBB;
  margin-bottom: 30px;
`;
