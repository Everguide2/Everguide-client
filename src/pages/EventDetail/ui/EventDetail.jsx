import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import CommonDetail from "@pages/Common/event&policyRecDetail/ui/CommonDetail.jsx";
import {addEventArticle} from "@stores/common/eventDetailSlice.js";
import {dummyData} from "@test/eventDetailDummy.js";
import ScrollToTop from "@/utils/scrollToTop.js";

const EventDetail = () => {
  const ids = useParams().eventId;
  const dispatch = useDispatch();

  const article = dummyData.find(data => data.id == ids);

  useEffect(() => {
    dispatch(addEventArticle({
      title: article.title,
      subTitle: article.subTitle,
      category: article.category,
      content: article.content,
      bookMark: article.bookMark,
      startDate: article.startDate,
      endDate: article.endDate,
      fee: article.fee,
      registration: article.registration,
    }));
  }, [])

  return (
      <>
        <ScrollToTop/>
        <CommonDetail type={"행사/교육"}/>
      </>
  );
};

export default EventDetail;