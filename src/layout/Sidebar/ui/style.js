import {styled} from "styled-components";

export const Container = styled.aside`
    width: 268px;
    display: flex;
    flex-direction: column;
    gap: 23px;
`;

export const FilterContainer = styled.aside`
  width: 100%;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 22px;
  box-shadow: 0 0 11px rgba(0,0,0,0.1);
  background-color: ${({theme}) => theme.colors.realWhite};
`;


