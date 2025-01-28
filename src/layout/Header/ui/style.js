import {styled} from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 29px rgba(0,0,0,0.13);
  z-index: 9999;
`
