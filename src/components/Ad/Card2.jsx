import React from "react";
import styled from "styled-components";
import { imgMap } from "@/assets";

const Card2 = () => {
  return (
    <CardContainer>
      <MapImage src={imgMap} alt="Map" />
    </CardContainer>
  );
};

export default Card2;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

`;

const MapImage = styled.img`
  width: 473px; 
  height: 404px; 
`;
