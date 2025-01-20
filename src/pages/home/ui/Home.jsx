import React, { useState } from "react";
import styled from "styled-components";
import "./style.js";
import theme from "../../../theme/theme.js";
import DummyData from "../../../test/dummy.js";
import PoliciesThisWeek from "../components/PoliciesThisWeek.jsx";
import NewPolicies from "../components/NewPolicies.jsx";
import Advertising from "../components/Advertising.jsx";
import ParticipatingEv from "../components/ParticipatingEv.jsx";
import WeeklyJobInfo from "../components/WeeklyJobInfo.jsx";
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
