import * as S from "./style.js";
import FilterItem from "./FilterItem";

// eslint-disable-next-line react/prop-types
const FilterSection = ({subtitle, items}) => {
  return (
      <S.Container>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.SectionContainer>
          {items.map((item) => (
              <FilterItem key={item.id} category={item.label} total={item.count}/>
          ))}
        </S.SectionContainer>
      </S.Container>
  );
};

export default FilterSection;