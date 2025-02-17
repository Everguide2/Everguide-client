import React from 'react';
import * as S from './style';
import {styled} from "styled-components";
import IntroArea from "@pages/JobDetail/components/IntroArea.jsx";
import SiteArea from "@pages/JobDetail/components/SiteArea.jsx";

const MoreJob = () => {
  return (
      <Screen>
        <IntroArea />
        <SiteArea />
      </Screen>
  );
};

export default MoreJob;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
