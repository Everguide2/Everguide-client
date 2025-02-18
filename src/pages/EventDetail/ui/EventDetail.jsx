import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import CommonDetail from "@pages/Common/event&policyRecDetail/ui/CommonDetail.jsx";
import {addArticle} from "@stores/common/detailSlice.js";
import {dummyData} from "@test/eventDetailDummy.js";
import ScrollToTop from "@/utils/scrollToTop.js";

const EventDetail = () => {
  const ids = useParams().eventId;
  const dispatch = useDispatch();

  const article = dummyData.find(data => data.id == ids);

  useEffect(() => {
    dispatch(addArticle({...article}));
  }, [])

  return (
      <>
        <ScrollToTop/>
        <CommonDetail type={"행사/교육"}/>
      </>
  );
};

export default EventDetail;