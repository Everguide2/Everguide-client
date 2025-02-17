import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import CommonDetail from "@pages/Common/event&policyRecDetail/ui/CommonDetail.jsx";
import ScrollToTop from "@/utils/scrollToTop.js";
import {addArticle} from "@stores/common/detailSlice.js";
import {jobDetailDummy} from "@test/jobDetailDummy.js";

const JobDetail = () => {
  const ids = useParams().jobId;
  const dispatch = useDispatch();

  const article = jobDetailDummy.find(data => data.id == ids);

  useEffect(() => {
    dispatch(addArticle({
      category: article.state,
      title:article.title,
      subtitle: article.company,
      content: article.content,
      bookMark:article.bookMark,
    }))
  }, []);

  return (
    <div>
      <ScrollToTop/>
      <CommonDetail/>
    </div>
  );
};

export default JobDetail;