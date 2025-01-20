import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Common from "@pages/common/event&policyRec/ui/Common.jsx";
import {dummyData} from "@test/eventDummy.js";
import {add} from "@stores/slices/informationSlice.js";
import {setPage} from "@stores/slices/pagingSlice.js";


const Event = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dummyData.forEach((item) => {
      dispatch(add({...item}));
    });

    dispatch(setPage({itemsCount: 22, totalItems: 160, pageRange:5}))
  }, []);
  return (
      <Common />
  );
};

export default Event;