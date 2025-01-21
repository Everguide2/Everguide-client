import {styled} from "styled-components";

export const Common = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.gray[50]};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: ${({theme}) => theme.size.safeArea};
  margin: 0 auto;
  padding: 48px 30px 82px 40px;
`

export const RightContent = styled.div`
  width: 1068px;
  margin-left: 34px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`

export const Total = styled.p`
  ${({theme}) => theme.fonts.body4}
`

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 20px;
`

export const Setting = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 30px;
`