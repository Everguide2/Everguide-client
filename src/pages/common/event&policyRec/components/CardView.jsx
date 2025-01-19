import {styled} from "styled-components";
import Card from "@pages/common/event&policyRec/components/Card/Card.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";

const CardView = () => {
  const card = useSelector(state => state.card);
  const [isLogin, setIsLogin] = useState(false);

  return (
      <CardContainer>
        {card.map((item) => (
            <Card
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                category={item.category}
                img={item.image}
                assign={item.assign}
                bookmark={item.bookMark}
                dDay={item.dDay}
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