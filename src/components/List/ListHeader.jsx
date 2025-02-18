import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const ListHeader =
    ({
       th1 = "분류",
       type,
       th3 = "지역",
       th4 = "일시",
       th5 = "마감기한",
       isLogin,
       isMyPage,
       isJob,
     }) => {
      return (
          <Container>
            <tr>
              <Thead $width={"8%"}>{th1}</Thead>
              <Thead $width={isJob ? "15%" : "10%"}>{th3}</Thead>
              <Thead $width={isJob? "31%" : "36%"}>{type ? type+" 이름" : "채용제목"} </Thead>
              <Thead $width={isJob? "25%" : "23%"}>{th4}</Thead>
              <Thead $width={"11%"}>{th5}</Thead>
              {isLogin && <Thead $width={"10%"}>저장</Thead>}
              {isMyPage && <Thead $width={"10%"}>선택</Thead>}
            </tr>
          </Container>
      );
    }
;

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
