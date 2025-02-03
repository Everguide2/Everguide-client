import React from "react";
import styled from "styled-components";
import CategoryLine from "./CategoryLine";
import ResultsSlide from "./ResultsSlide";

const HaveResults = () => {
  return (
    <DetailContents>
      <CategoryLine />
      <ResultsSlide />
    </DetailContents>
  );
};

export default HaveResults;

const DetailContents = styled.div`
  width: 1319px;
  display: flex;
  flex-direction: column;
  margin-bottom: 192px;
`;
