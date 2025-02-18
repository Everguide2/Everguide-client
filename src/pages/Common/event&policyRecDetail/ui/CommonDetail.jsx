import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import * as S from "./style.js";
import {SmallButton, LargeButton, BookMark, ArticleSection} from "@pages/Common/event&policyRecDetail/components/";
import {icShare, icPrint} from "@assets/";
import {string} from "@constants/";

const CommonDetail = ({type = 1}) => {
  const navigate = useNavigate();
  const detail = useSelector(state => state.detail);
  const [isLogin, setIsLogin] = useState(false);

  return (
      <S.Detail>
        <S.Container>
          <S.Article>
            <S.Category>{type === 1 ?string.education: detail.category}</S.Category>
            <S.Title>{detail.title}</S.Title>
            <S.SubTitle>{detail.subTitle}</S.SubTitle>
            {isLogin && <S.BookMarks><BookMark isBookMarked={detail.bookMark}/></S.BookMarks>}
            <S.Extra>
              <SmallButton image={icShare}/>
              <SmallButton image={icPrint}/>
            </S.Extra>
            <S.Content>
              <ArticleSection title={"신청기간"} data={detail.content}/>
              <ArticleSection title={"신청기간"} data={detail.content}/>
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