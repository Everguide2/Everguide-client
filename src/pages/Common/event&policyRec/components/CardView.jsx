import {styled} from "styled-components";
import Card from "@components/Card/Card.jsx";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const CardView = ({type, onClickCard, isLogin}) => {
  const cardData = useSelector(state => type === "행사/교육" ? state.event : state.policy);

  const onClickBookMark = (isMarked, setIsMarked) => {
    setIsMarked(!isMarked);
  }

  return (
      <CardContainer>
        {cardData.map((data) => (
            <Card
                onClick={() => onClickCard(data?.id)}
                key={data?.id}
                title={data?.title}
                subTitle={data?.subTitle}
                category={data?.category}
                img={data?.image}
                assign={data?.assign}
                bookmark={data?.bookMark}
                dDay={data?.dDay}
                isLogin={isLogin}
                isEvent={type === "행사/교육"}
                onClickBookMark={onClickBookMark}
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