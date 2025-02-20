import CommonDetail from "@pages/Common/event&policyRecDetail/ui/CommonDetail.jsx";
import ScrollToTop from "@utils/scrollToTop.js";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {policydummy} from "@test/policyDetailDummy.js";
import {addPolicyArticle} from "@stores/common/policyDetailSlice.js";

const PolicySupportDetail = () => {
  const ids = useParams().supportId;
  const dispatch = useDispatch();

  const article = policydummy.find(data => data.id == ids);

  useEffect(() => {
    dispatch(addPolicyArticle({...article}));
  },[])

  return (
    <>
      <ScrollToTop/>
      <CommonDetail type={"지원정책"}/>
    </>
  );
};

export default PolicySupportDetail;