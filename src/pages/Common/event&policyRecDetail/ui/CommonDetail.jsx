import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import * as S from "./style.js";
import {SmallButton, LargeButton, BookMark, EventContent, JobContent, PolicyContent} from "@pages/Common/event&policyRecDetail/components/";
import ArticleSection from "@pages/Common/event&policyRecDetail/components/ArticleSection.jsx";
import {icShare, icPrint} from "@assets/";
import {string} from "@constants/";


// 정책 지원, 행사/교육, 일자리 정보 공통 사용
const CommonDetail = ({type}) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const detail = useSelector(state => {
    if (type === "지원정책") return state.policyDetail;
    if (type === "행사/교육") return state.eventDetail;
    return state.jobDetail;
  });

  return (
      <S.Detail>
        <S.Container>
          <S.Article>
            <S.Category>{type === "행사/교육" ?string.education: detail?.category}</S.Category>
            <S.Title>{detail?.title}</S.Title>
            <S.SubTitle>{detail?.subTitle}</S.SubTitle>
            {isLogin && <S.BookMarks><BookMark isBookMarked={detail?.bookMark}/></S.BookMarks>}
            <S.Extra>
              <SmallButton image={icShare}/>
              <SmallButton image={icPrint}/>
            </S.Extra>

            <S.Content>
              <ArticleSection title={"신청기간"} data={`${detail?.startDate}~${detail.endDate}`}/>
              {type === "행사/교육" &&
                <EventContent
                  duration={`${detail?.startDate}~${detail.endDate}`}
                  content={detail?.content}
                  fee={detail?.fee}
                  registration={detail?.registration}
              />}
            </S.Content>

            <S.Buttons>
              <LargeButton text={string.toListBtn} type={"border"} onClick={() => navigate(-1)} />
              <LargeButton text={type === 1 ? string.checkArticleBtn : string.receiptBtn} type={"primary"}/>
            </S.Buttons>

          </S.Article>
        </S.Container>
      </S.Detail>
  );
};

export default CommonDetail;