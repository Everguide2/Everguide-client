import {useSelector} from "react-redux";
import {styled} from "styled-components";
import ListHeader from "@components/List/ListHeader.jsx";
import List from "@components/List/List.jsx";


// eslint-disable-next-line react/prop-types
const ListView = ({type, onClickList, isLogin}) => {
  const listData = useSelector(state => type === "행사/교육" ? state.event : state.policy);

  return (
      <Container>
        <ListHeader isLogin={isLogin} type={type} th4={type === "지원정책" ? "제공유형&신청방법" : "일시"}/>
        {listData.map((data) => (
            <List
                onClick={() => onClickList(data?.id)}
                key={data?.id}
                city={data?.city}
                category={data?.category}
                title={data?.title}
                assign={data?.assign}
                duration={type === "지원정책" ? data?.subTitle : data?.duration}
                dDay={data?.dDay}
                bookmark={data?.bookMark}
                isLogin={isLogin}
                isEvent={type === "행사/교육"}
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