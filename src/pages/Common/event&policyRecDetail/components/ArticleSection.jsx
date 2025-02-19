import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const ArticleSection = ({title, data}) => {

  return (
      <Container>
        <div>
          <Divider/>
        </div>
        <div>
          <Title>{title}</Title>
          <Content>{data}</Content>
        </div>
      </Container>
  );
};

export default ArticleSection;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 11px;
  padding-bottom: 34px;
  border-bottom: 1px solid #EDEBE8;
  margin-top: 24px;
`

const Divider = styled.div`
  display: inline-block;
  width: 4px;
  height: 24px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.secondary[500]};
`
const Title = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray[900]};
`
const Content = styled.p`
  margin-top: 9px;
  ${({ theme }) => theme.fonts.subHeader6};
  color: ${({ theme }) => theme.colors.gray[900]};
    white-space: pre-line;
`