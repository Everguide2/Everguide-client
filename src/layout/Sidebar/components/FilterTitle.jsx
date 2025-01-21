import * as S from "./style.js";

// eslint-disable-next-line react/prop-types
const FilterTitle = ({icon, title}) => {
  return (
      <S.Title>
        <S.Icon src={icon} alt="eyes"/>
        <S.Text>{title}</S.Text>
      </S.Title>
  );
};

export default FilterTitle;