import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import { useSelector } from "react-redux";
const CategoryLine = () => {
  const { category, categoryCount } = useSelector((state) => state.Search);

  return (
    <Categories>
      {category.map((name, index) => {
        const isLast = index === category.length - 1;
        return categoryCount[index] > 0 ? (
          <>
            <EachCategory isOn={true} key={index}>
              {name}
            </EachCategory>
            <CountCategory>({categoryCount[index]})</CountCategory>
            {!isLast && <Contour>|</Contour>}
          </>
        ) : (
          <>
            <EachCategory isOn={false} key={index}>
              {name}
            </EachCategory>
            <CountCategory>({categoryCount[index]})</CountCategory>
          </>
        );
      })}
    </Categories>
  );
};

export default CategoryLine;

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
