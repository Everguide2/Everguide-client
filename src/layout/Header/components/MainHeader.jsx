import * as S from "./style.js";
import {icMainLogo, icNotify} from "@assets/index.js";
import {Button, SearchBar, Alarm} from "@components/index.js";
import {string} from "@constants/index.js";
import {pagePath} from "@/routes/pagePath.js";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const MainHeader = ({onClick ,isLogin}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <S.MainHeader>
        <S.HeaderContainer>
          <S.Inner>
            <S.MainLogo src={icMainLogo} onClick={() => onClick('/')} />
            <SearchBar placeHolder={string.searchBarPlaceHolder}/>
            <S.LoginCheck>
              {isLogin ?
                  <>
                    <S.Notify src={icNotify} />
                    <S.ProfileContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                      <S.Profile></S.Profile>
                    </S.ProfileContainer>
                    {isHovered && <Alarm onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>}
                  </>
                  :
                  <Button text={string.LoginRegister} onClick={() => onClick(pagePath.LOGIN)} />
              }
            </S.LoginCheck>
          </S.Inner>
        </S.HeaderContainer>
      </S.MainHeader>
  );
};

export default MainHeader;