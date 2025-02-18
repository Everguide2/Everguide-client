import {styled} from "styled-components";

export const SeniorJob = styled.div`
    width: 100%;
    height: 100%;
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
