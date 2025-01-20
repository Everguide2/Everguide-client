import {styled} from "styled-components";
import ListHeader from "@pages/common/event&policyRec/components/List/ListHeader.jsx";
import List from "@pages/common/event&policyRec/components/List/List.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";

const ListView = () => {
  const datas = useSelector(state => state.card);
  const [isLogin, setIsLogin] = useState(false);

  return (
      <Container>
        <ListHeader isLogin={isLogin}/>
        {datas.map((data) => (
            <List
                key={data.id}
                city={data.city}
                category={data.category}
                title={data.title}
                assign={data.assign}
                duration={data.duration}
                dDay={data.dDay}
                bookmark={data.bookMark}
                isLogin={isLogin}
            />
        ))}

      </Container>
  );
};

export default ListView;

const Container = styled.table`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 1px solid ${({theme}) => theme.colors.gray[900]};
`