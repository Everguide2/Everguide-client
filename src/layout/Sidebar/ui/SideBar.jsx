import {icEyes} from "../../../assets";
import {string} from "../../../constants";
import * as S from "./style.js"
import {FilterTitle, FilterSection, EverguideManual} from "../components";
import {sideBarData} from "../feature/sidebarData.js";

const SideBar = () => {
  return (
      <S.Container>
        <S.FilterContainer>
          <FilterTitle icon={icEyes} title={string.filter}/>
          {sideBarData.map((section) => (
              <FilterSection key={section.title} subtitle={section.title} items={section.items}/>
          ))}
        </S.FilterContainer>
        <EverguideManual/>
      </S.Container>
  );
};

export default SideBar;

