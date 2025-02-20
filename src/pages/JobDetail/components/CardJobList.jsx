import {styled} from "styled-components";
import {ListHeader} from "@components/index.js";
import {jobDummy} from "@test/jobDummy.js";
import {List} from "@components/index.js";
import {useValidateLogin} from "@hooks/useValidateLogin.js";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";

const CardJobList = () => {
  const {navigateTo} = useCustomNavigation();
  const {isLogin} = useValidateLogin();

  return (
      <Container>
        <ListHeader
            th1={"접수중"}
            th3={"근무 지역"}
            th4={"접수일"}
            isJob={true}
            isLogin={isLogin}
        />
        {jobDummy.map((data) => (
            <List
                key={data.id}
                category={data.state}
                city={data.location}
                title={data.title}
                assign={data.company}
                dDay={0}
                duration={data.duration}
                isJob={true}
                isLogin={isLogin}
                onClick={() => navigateTo(`/job-senior/${data.id}`)}
            />
        ))}
      </Container>
  );
};

export default CardJobList;

const Container = styled.table`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 1px solid ${({theme}) => theme.colors.gray[900]};
`