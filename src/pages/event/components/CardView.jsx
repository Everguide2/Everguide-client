import {styled} from "styled-components";
import Card from "./Card/Card.jsx";
import {useSelector} from "react-redux";

const CardView = () => {
  const event = useSelector(state => state.event);
  console.log(event);
  return (
      <CardContainer>
        {event.map((item) => (
            <Card
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                category={item.category}
                img={item.image}
                assign={item.assign}
                bookmark={item.bookMark}
                dDay={item.dDay}
            />
        ))};
      </CardContainer>
  );
};

export default CardView;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 20px;
`