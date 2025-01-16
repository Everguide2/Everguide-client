import {styled} from "styled-components";

// FilterTitle
export const Title = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-bottom: 7px;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};
`;
export const Icon = styled.img`
  width: 28px;
  height: 34px;
`;
export const Text = styled.p`
  ${({theme}) => theme.fonts.subHeader1};
  margin-left: 9px;
`;

// FilterSection
export const SubTitle = styled.p`
  ${({theme}) => theme.fonts.subHeader5};
  color: ${({theme}) => theme.colors.gray[800]};
  margin-top: 13px;
`;

export const Container = styled.div`
  &:last-child div{
    border: none;
    padding-bottom: 0;
  }
`
export const SectionContainer = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};
`

// FilterItem
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

`
