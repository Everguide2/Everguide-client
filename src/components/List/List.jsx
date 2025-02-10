import {styled} from "styled-components";
import ListBookMark from "@components/List/ListBookMark.jsx";
import Category from "@pages/Common/event&policyRec/components/Category.jsx";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const List = ({city, category, title, assign, duration, dDay, bookmark, isLogin, isMyPage, onClick}) => {
  return (
      <Container onClick={onClick}>
        <tr>
          <td><Category text={category}/></td>
          <td>{city}</td>
          <td>
            <div>
              <Title>{title}</Title>
              <Assign>{assign}</Assign>
            </div>
          </td>
          <td>{duration}</td>
          <td>{dDay === 0 ? string.dDay : string.dTitle + dDay}</td>
          {isLogin && <td><ListBookMark isBookMarked={bookmark}/></td>}
          {isMyPage && <Td><CheckInput type="checkbox"/></Td>}
        </tr>
      </Container>
  );
};

export default List;

const Container = styled.tbody`
  border-top: 1px solid ${({theme}) => theme.colors.gray[300]};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray[300]};

  tr {
    td {
      text-align: center;
      vertical-align: middle;
      padding: 12px 0;
      box-sizing: border-box;
      cursor: pointer;
    }

    td:nth-child(2) {
      ${({theme}) => theme.fonts.body3};
      color: ${({theme}) => theme.colors.gray[700]};
    }

    td:nth-child(3) {
      padding-left: 47px;

      p {
        text-align: left;
      }
    }

    td:nth-child(4) {
      ${({theme}) => theme.fonts.body2};
      color: ${({theme}) => theme.colors.gray[900]};
    }

    td:nth-child(5) {
      ${({theme}) => theme.fonts.body1};
      color: ${({theme}) => theme.colors.secondary[500]};
    }
  }
`

const Td = styled.td`
  vertical-align: middle;
`
const Title = styled.p`
  ${({theme}) => theme.fonts.body1};
  color: ${({theme}) => theme.colors.realBlack};
`;
const Assign = styled.p`
  ${({theme}) => theme.fonts.body4};
  color: ${({theme}) => theme.colors.gray[700]};
  margin-top: 2px;
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  appearance: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  
  &:checked{
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.21053L5.81482 9L13 1' stroke='%23E75058' stroke-width='3'/%3E%3C/svg%3E%0A");
  }
`