import * as S from "./style.js";
import {icMainLogo, icNotify} from "@assets/index.js";
import {Button, SearchBar} from "@components/index.js";
import {string} from "@constants/index.js";
import {pagePath} from "@/routes/pagePath.js";

// eslint-disable-next-line react/prop-types
const MainHeader = ({onClick ,isLogin}) => {
  return (
      <S.MainHeader>
        <S.HeaderContainer>
          <div>
            <S.MainLogo src={icMainLogo} onClick={() => onClick('/')} />
            <SearchBar placeHolder={string.searchBarPlaceHolder}/>
            <S.LoginCheck>
              {isLogin ?
                  <>
                    <S.Notify src={icNotify} />
                    <S.Profile></S.Profile>
                  </>
                  :
                  <Button text={string.LoginRegister} onClick={() => onClick(pagePath.LOGIN)} />
              }
            </S.LoginCheck>
          </div>
        </S.HeaderContainer>
      </S.MainHeader>
  );
};

export default MainHeader;