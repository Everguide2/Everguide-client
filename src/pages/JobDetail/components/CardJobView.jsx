import {styled} from "styled-components";
import CardJob from "@pages/JobDetail/components/CardJob.jsx";
import {jobDummy} from "@test/jobDummy.js";

const CardJobView = () => {
  return (
      <CardContainer>
        {jobDummy.map((item) => (
          <CardJob
              key={item.id}
              company={item.company}
              location={item.location}
              title={item.title}
              state={item.state}
              duration={item.duration}
              bookmark={item.bookmark}
          />
        ))}

      </CardContainer>
  );
};

export default CardJobView;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 20px;
  margin-bottom: 11px;
`