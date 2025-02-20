import {styled} from "styled-components";
export const Detail = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.gray[50]};
`
export const Container = styled.div`
  width: 100%;
  max-width: ${({theme}) => theme.size.safeArea};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 164px 142px 164px;
`

export const Article = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  border-radius: 11px;
  box-shadow: 0 0 26px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 62px 102px 0 102px;
  position: relative;
`

export const Category = styled.p`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 18px;
  border-radius: 51px;
  ${({theme}) => theme.fonts.subHeader5};
  color: ${({theme}) => theme.colors.realWhite};
  background-color: ${({theme}) => theme.colors.primary[500]};
`

export const Title = styled.p`
  ${({theme}) => theme.fonts.header0};
  color: ${({theme}) => theme.colors.gray[900]};
  margin-top: 4px;
`

export const SubTitle = styled.p`
  ${({theme}) => theme.fonts.subHeader3};
  color: ${({theme}) => theme.colors.gray[500]};
  margin-top: 4px;
`
export const BookMarks = styled.div`
  position: absolute;
  top: 78px;
  right: 101px;
`
export const Extra = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 16px;
`
export const Content = styled.div`
  margin-top: 24px;
`

export const Buttons = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 37px;
  padding-bottom: 64px;
  display: flex;
  gap: 18px;
  justify-content: center;
`