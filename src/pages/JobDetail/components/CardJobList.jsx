import {styled} from "styled-components";
import {ListHeader} from "@components/index.js";
import {jobDummy} from "@test/jobDummy.js";
import {List} from "@components/index.js";

const CardJobList = () => {
  return (
      <Container>
        <ListHeader
            th1={"접수중"}
            th3={"근무 지역"}
            th4={"접수일"}
            isJob={true}
        />
        {jobDummy.map((data) => (
            <List
                key={data.id}
                category={data.state}
                city={data.location}
                title={data.title}
                assign={data.company}
                dDay={"Day"}
                duration={data.duration}
                isJob={true}
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