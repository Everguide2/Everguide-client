import * as S from "./style.js";
import {CheckBox} from "../../../components";

// eslint-disable-next-line react/prop-types
const FilterItem = ({category, total}) => {
  return (
      <S.ItemContainer>
        <CheckBox text={category}/>
        <p>{total}</p>
      </S.ItemContainer>
  );
};

export default FilterItem;