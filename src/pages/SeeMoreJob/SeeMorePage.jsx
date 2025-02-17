import React from "react";
import styled from "styled-components";
import IntroArea from "../JobDetail/components/IntroArea.jsx";
import SiteArea from "../JobDetail/components/SiteArea.jsx";

const SeeMorePage = () => {
  return (
    <Screen>
      <IntroArea />
      <SiteArea />
    </Screen>
  );
};

export default SeeMorePage;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
