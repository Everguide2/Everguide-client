import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Common from "@pages/Common/event&policyRec/ui/Common.jsx";
import {dummyData} from "@test/eventDummy.js";
import {addEvent} from "@stores/common/eventSlice.js";
import {setPage} from "@stores/paging/pagingSlice.js";


const Event = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dummyData.forEach((item) => {
      dispatch(addEvent({...item}));
    });

    dispatch(setPage({itemsCount: 22, totalItems: 160, pageRange: 5}))
  }, [dispatch]);

  return (
      <Common type={"행사/교육"}/>
  );
};

export default Event;