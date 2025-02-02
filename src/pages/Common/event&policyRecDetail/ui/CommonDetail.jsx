import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import * as S from "./style.js";
import {SmallButton, LargeButton, BookMark} from "@pages/Common/event&policyRecDetail/components/";
import {icShare, icPrint} from "@assets/";
import {string} from "@constants/";

const CommonDetail = () => {
  const navigate = useNavigate();
  const detail = useSelector(state => state.detail);
  const [isLogin, setIsLogin] = useState(false);

  return (
      <S.Detail>
        <S.Container>
          <S.Article>
            <S.Category>{detail.category}</S.Category>
            <S.Title>{detail.title}</S.Title>
            <S.SubTitle>{detail.subTitle}</S.SubTitle>
            {isLogin && <S.BookMarks><BookMark isBookMarked={detail.bookMark}/></S.BookMarks>}
            <S.Extra>
              <SmallButton image={icShare}/>
              <SmallButton image={icPrint}/>
            </S.Extra>
            <S.Content>{detail.content}</S.Content>
            <S.Buttons>
              <LargeButton text={string.toListBtn} type={"border"} onClick={() => navigate(-1)} />
              <LargeButton text={string.checkArticleBtn} type={"primary"}/>
            </S.Buttons>
          </S.Article>
        </S.Container>
      </S.Detail>
  );
};

export default CommonDetail;