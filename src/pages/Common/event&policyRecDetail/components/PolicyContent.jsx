import ArticleSection from "@pages/Common/event&policyRecDetail/components/ArticleSection.jsx";

const PolicyContent = ({data}) => {
  console.log(data)
  return (
    <div>
      <ArticleSection title={"신청자격"} data={`${data.supplyfor}\n${data.standard}`} />
      <ArticleSection title={"지원내용"} data={`${data.content}\n- 채용공고 모집인원: ${data.total}\n- 연령: ${data.age}`} />
      <ArticleSection title={"전형사항"} data={data.registration}/>
      <ArticleSection title={"문의처"}/>
    </div>
  );
};

export default PolicyContent;