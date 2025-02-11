import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {styled} from "styled-components";
import {pagePath} from "@/routes/pagePath.js";
import ListHeader from "@components/List/ListHeader.jsx";
import List from "@components/List/List.jsx";


const ListView = ({type}) => {
  const navigate = useNavigate();
  const listData = useSelector(state => state.information);
  const [isLogin, setIsLogin] = useState(false);

  const onClickList = (id) => {
    navigate(`/${pagePath.EVENT}/${id}`);
  }

  return (
      <Container>
        <ListHeader isLogin={isLogin} type={type}/>
        {listData.map((data) => (
            <List
                onClick={() => onClickList(data.id)}
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