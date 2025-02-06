import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import { useSelector } from "react-redux";
const NoHaveResults = () => {
  const { queryName, category } = useSelector((state) => state.Search);
  return (
    <>
      <DetailContents>
        <Categories>
          {category.map((name, index) => {
            const isLast = index === category.length - 1;
            return (
              <>
                <EachCategory isOn={false} key={index}>
                  {name}
                </EachCategory>
                <CountCategory>(0)</CountCategory>
                {!isLast && <Contour>|</Contour>}
              </>
            );
          })}
        </Categories>
      </DetailContents>
      <NoResults>
        <NoQuery>{queryName}</NoQuery>
        <NoEx>에 대한 검색결과가 없어요</NoEx>
      </NoResults>
    </>
  );
};

export default NoHaveResults;

const DetailContents = styled.div`
  width: 1319px;
  display: flex;
  flex-direction: column;
  margin-bottom: 192px;
`;

const Categories = styled.p`
  color: black;
  height: 100px;
  margin-left: 110px;
  margin-top: 20px;
  display: flex;
  ${({ theme }) => theme.fonts.subHeader5};
`;
const EachCategory = styled.div`
  color: ${({ isOn, theme }) =>
    isOn ? theme.colors.primary[500] : theme.colors.gray[500]};
`;

const CountCategory = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
const Contour = styled.p`
  margin-left: 12px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
const NoResults = styled.div`
  display: flex;
  // height: 297px;
  ${({ theme }) => theme.fonts.header0};
  padding-bottom: 100px;
  margin-bottom: 234px;
`;

const NoQuery = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const NoEx = styled.p`
  color: ${({ theme }) => theme.colors.gray[800]};
`;
