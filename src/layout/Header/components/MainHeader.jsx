import {useState} from "react";
import * as S from "./style.js";
import {icMainLogo, icNotify} from "@assets/index.js";
import {Button, SearchBar, Alarm, Profile} from "@components/index.js";
import {string} from "@constants/index.js";
import {pagePath} from "@/routes/pagePath.js";

// eslint-disable-next-line react/prop-types
const MainHeader = ({onClick ,isLogin}) => {
  const [isNotifyHovered, setIsNotifyHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const handleHover = (type, state) => {
    type === 1 ? setIsNotifyHovered(state) : setIsProfileHovered(state);
  }

  return (
      <S.MainHeader>
        <S.HeaderContainer>
          <S.Inner>
            <S.MainLogo src={icMainLogo} onClick={() => onClick('/')} />
            <SearchBar placeHolder={string.searchBarPlaceHolder}/>
            <S.LoginCheck>
              {isLogin ?
                  <>
                    <S.PNContainer onMouseEnter={() => handleHover(1, true)} onMouseLeave={() => handleHover(1, false)}>
                      <S.Notify src={icNotify} />
                    </S.PNContainer>
                    {isNotifyHovered && <Alarm onMouseEnter={() => setIsNotifyHovered(true)} onMouseLeave={() => setIsNotifyHovered(false)}/>}
                    <S.PNContainer onMouseEnter={() => handleHover(2, true)} onMouseLeave={() => handleHover(2, false)}>
                      <S.Profile></S.Profile>
                    </S.PNContainer>
                    {isProfileHovered && <Profile onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}/>}
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