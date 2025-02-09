import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const ListHeader = ({isLogin, isMyPage}) => {
  return (
      <Container>
        <tr>
          <Thead $width={"7%"}>분류</Thead>
          <Thead $width={"10%"}>지역</Thead>
          <Thead $width={"36%"}>정책 이름</Thead>
          <Thead $width={"23%"}>일시</Thead>
          <Thead $width={"11%"}>마감기한</Thead>
          {isLogin && <Thead $width={"13%"}></Thead>}
          {isMyPage && <Thead $width={"13%"}>선택</Thead>}
        </tr>
      </Container>
  );
};

export default ListHeader;

const Container = styled.thead`
  ${({theme}) => theme.fonts.body3};
  color: ${({theme}) => theme.colors.gray[700]};
`

const Thead = styled.th`
  width: ${({$width}) => $width};
  box-sizing: border-box;
  padding: 20px 0;
`
