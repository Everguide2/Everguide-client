import React from "react";
import styled from "styled-components";
import CategoryLine from "./CategoryLine";
import ResultsSlide from "./ResultsSlide";

const HaveResults = ({ dummy, query, category, categoryCount }) => {
  return (
    <DetailContents>
      <CategoryLine category={category} categoryCount={categoryCount} />
      <ResultsSlide
        dummy={dummy}
        query={query}
        category={category}
        categoryCount={categoryCount}
      />
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
