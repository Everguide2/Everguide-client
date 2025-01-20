import {styled} from "styled-components";
import ListBookMark from "@pages/common/event&policyRec/components/List/ListBookMark.jsx";
import Category from "@pages/common/event&policyRec/components/Category.jsx";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const List = ({city, category, title, assign, duration, dDay, bookmark, isLogin}) => {
  return (
      <Container>
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
      //display: flex;
      //flex-direction: column;
      //align-items: center;
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
const Title = styled.p`
  ${({theme}) => theme.fonts.body1};
  color: ${({theme}) => theme.colors.realBlack};
`;
const Assign = styled.p`
  ${({theme}) => theme.fonts.body4};
  color: ${({theme}) => theme.colors.gray[700]};
  margin-top: 2px;
`;
