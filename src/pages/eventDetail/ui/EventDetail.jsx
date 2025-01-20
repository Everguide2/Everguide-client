import CommonDetail from "@pages/common/event&policyRecDetail/ui/CommonDetail.jsx";
import {useParams} from "react-router-dom";

const EventDetail = () => {
  const ids = useParams().eventId;
  console.log(ids);
  return (
      <CommonDetail />
  );
};

export default EventDetail;