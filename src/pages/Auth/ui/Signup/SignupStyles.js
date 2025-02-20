import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 150px;
`;

export const Content = styled.div`
  margin-top: 100px;
  padding: 10px;
  border-radius: 20px;
  width: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

export const ScrollArea = styled.div`
  height: 722px;
  overflow-y: auto;
  width: 100%;
  margin-top: 20px;
  padding: 0 45px;

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #F3F3F3;
    border-radius: 100px;
    height: 200px; 
  }

  &::-webkit-scrollbar-track {
    background-color: white; 
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const Label = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
  margin-top: 10px;
`;
