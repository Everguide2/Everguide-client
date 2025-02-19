import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Common from "@pages/Common/event&policyRec/ui/Common.jsx";
import {noImageData} from "@test/eventDummyNoImages.js";
import {addPolicy} from "@stores/common/policySlice.js";
import {setPage} from "@stores/paging/pagingSlice.js";

const PolicySupport = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noImageData.forEach((item) => {
      dispatch(addPolicy({...item}));
    });

    dispatch(setPage({itemsCount: 22, totalItems: 160, pageRange: 5}))
  }, [dispatch]);


  return (
      <Common type={"지원정책"}/>
  );
};

export default PolicySupport;