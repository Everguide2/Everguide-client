import ArticleSection from "@pages/Common/event&policyRecDetail/components/ArticleSection.jsx";

const JobContent = ({data}) => {
  console.log(data);
  return (
    <div>
      <ArticleSection title={"구인 사항"} data={`주소 :${data.location}\n상세 내용:${data.content}`}/>
      <ArticleSection title={"근로 조건"} data={`모집 인원 :${data.etcs}명\n연령:${data.age}`}/>
      <ArticleSection title={"전형 사항"} data={`접수 방법 :${data.registration}`}/>
      <ArticleSection title={"문의처"} data={`구인 담당자: ${data.assigner}\n담당자 연락처: ${data.assignNumber}`}/>
    </div>
  );
};

export default JobContent;