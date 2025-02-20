import ArticleSection from "@pages/Common/event&policyRecDetail/components/ArticleSection.jsx";

// eslint-disable-next-line react/prop-types
const EventContent = ({duration, content, fee, registration}) => {
  return (
    <div>
      <ArticleSection title={"접수 기간"} data={duration}/>
      <ArticleSection title={"상세 안내"} data={content}/>
      <ArticleSection title={"참가비"} data={`${fee}원`}/>
      <ArticleSection title={"신청방법"} data={registration}/>
    </div>
  );
};

export default EventContent;