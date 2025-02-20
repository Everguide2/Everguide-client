import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import CommonDetail from "@pages/Common/event&policyRecDetail/ui/CommonDetail.jsx";
import ScrollToTop from "@utils/scrollToTop.js";
import {addJobArticle} from "@stores/common/jobDetailSlice.js";
import {jobDetailDummy} from "@test/jobDetailDummy.js";

const JobDetail = () => {
  const ids = useParams().jobId;
  const dispatch = useDispatch();

  const article = jobDetailDummy.find(data => data.id == ids);

  useEffect(() => {
    dispatch(addJobArticle({
      category: article.state,
      title:article.title,
      subTitle: article.company,
      bookmark:article.bookmark,
      startDate: article.startDate,
      endDate: article.endDate,
      location: article.location,
      content: article.content,
      etcs: article.etcs,
      age: article.age,
      registration: article.registration,
      assigner: article.assigner,
      assignNumber: article.assignNumber,
    }))
  }, []);

  return (
    <div>
      <ScrollToTop/>
      <CommonDetail type={"일자리"}/>
    </div>
  );
};

export default JobDetail;