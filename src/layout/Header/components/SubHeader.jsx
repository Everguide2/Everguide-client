import { useState } from 'react';

import * as S from "@layout/Header/components/style.js";
import {pagePath} from "@/routes/pagePath.js";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const SubHeader = ({active, subactive, onClick}) => {
  const [isHover, setHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHover = (state) => {
    setHover(state);
  }


  return (
      <S.SubHeader>
        <S.HeaderContainer>
          <S.SubHeaderMain>
            <S.MenuItem $active={active === pagePath.POLICY} onClick={() => {onClick(pagePath.POLICY, 1)}}><p>{string.findPolicy}</p></S.MenuItem>
            <S.MenuItem $active={active === pagePath.SUPPORT} onClick={() => {onClick(pagePath.SUPPORT, 1)}}><p>{string.supportPolicy}</p></S.MenuItem>
            <S.MenuItem $active={active === pagePath.EVENT} onClick={() => {onClick(pagePath.EVENT, 1)}}><p>{string.eventEducation}</p></S.MenuItem>
            <S.MenuItem $active={active === pagePath.JOB}  onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}><p>{string.workInformation}</p></S.MenuItem>
          </S.SubHeaderMain>
          {isHover && <S.JobSubHeader onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <ul>
              <S.SubMenuItem $active={subactive === pagePath.JOBSENIOR} onClick={() => onClick(pagePath.JOBSENIOR, 2)}>노인 일자리</S.SubMenuItem>
              <S.SubMenuItem $active={subactive === pagePath.JOBMORE} onClick={() => onClick(pagePath.JOBMORE, 2)}>일자리 더보기</S.SubMenuItem>
            </ul>
          </S.JobSubHeader>}
        </S.HeaderContainer>
      </S.SubHeader>
  );
};

export default SubHeader;