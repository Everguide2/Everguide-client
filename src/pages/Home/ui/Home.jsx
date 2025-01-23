import React, { useState } from "react";
import styled from "styled-components";
import "./style.js";
import theme from "../../../theme/theme.js";
import DummyData from "../../../test/dummy.js";
import PoliciesThisWeek from "../components/block1/PoliciesThisWeek.jsx";
import NewPolicies from "../components/block2/NewPolicies.jsx";
import Advertising from "../components/block3/Advertising.jsx";
import ParticipatingEv from "../components/block4/ParticipatingEv.jsx";
import WeeklyJobInfo from "../components/block5/WeeklyJobInfo.jsx";
const Home = () => {
  const [dummy, setDummy] = useState(DummyData);
  return (
    <Container>
      <PoliciesThisWeek data={dummy} />
      <NewPolicies data={dummy} />
      <Advertising />
      <ParticipatingEv data={dummy.참여할만한행사프로그램} />
      <WeeklyJobInfo data={dummy.이번주의일자리정보} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  // background-color: black;
`;
