import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Common from "@pages/Common/event&policyRec/ui/Common.jsx";
import {dummyData} from "@test/eventDummy.js";
import {add} from "@stores/common/informationSlice.js";
import {setPage} from "@stores/paging/pagingSlice.js";
import {useGetTest} from "@hooks/api/test/useGetTest.js";


const Event = () => {
  const dispatch = useDispatch();

  const {data} = useGetTest();

  console.log(data?.message);
  useEffect(() => {
    dummyData.forEach((item) => {
      dispatch(add({...item}));
    });

    dispatch(setPage({itemsCount: 22, totalItems: 160, pageRange: 5}))
  }, []);

  return (
      <Common type={"행사/교육"}/>
  );
};

export default Event;