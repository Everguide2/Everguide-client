import * as S from "@layout/Header/components/style.js";
import {pagePath} from "@/routes/pagePath.js";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const SubHeader = ({active, onClick}) => {
  return (
      <S.SubHeader>
        <S.HeaderContainer>
          <ul>
            <S.MenuItem active={active === pagePath.POLICY} onClick={() => {onClick(pagePath.POLICY)}}><p>{string.findPolicy}</p></S.MenuItem>
            <S.MenuItem active={active === pagePath.SUPPORT} onClick={() => {onClick(pagePath.SUPPORT)}}><p>{string.supportPolicy}</p></S.MenuItem>
            <S.MenuItem active={active === pagePath.EVENT} onClick={() => {onClick(pagePath.EVENT)}}><p>{string.eventEducation}</p></S.MenuItem>
            <S.MenuItem active={active === pagePath.JOB} onClick={() => {onClick(pagePath.JOB)}}><p>{string.workInformation}</p></S.MenuItem>
          </ul>
        </S.HeaderContainer>
      </S.SubHeader>
  );
};

export default SubHeader;