import * as S from "./style.js";
import {icSubLogo} from "../../../assets";
import {string} from "../../../constants";

const EverguideManual = () => {
  return (
      <S.GuideContainer>
        <S.GuideImg src={icSubLogo}/>
        <S.GuideText>{string.manual}</S.GuideText>
      </S.GuideContainer>
  );
};

export default EverguideManual;