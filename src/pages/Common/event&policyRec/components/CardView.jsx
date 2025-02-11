import {styled} from "styled-components";
import Card from "@components/Card/Card.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const CardView = ({onClickCard}) => {
  const cardData = useSelector(state => state.information);
  const [isLogin, setIsLogin] = useState(false);

  return (
      <CardContainer>
        {cardData.map((data) => (
            <Card
                onClick={() => onClickCard(data.id)}
                key={data.id}
                title={data.title}
                subTitle={data.subTitle}
                category={data.category}
                img={data.image}
                assign={data.assign}
                bookmark={data.bookMark}
                dDay={data.dDay}
                isLogin={isLogin}
            />
        ))}
      </CardContainer>
  );
};

export default CardView;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 20px;
  margin-bottom: 11px;
`