import {icEyes} from "../../../assets";
import {string} from "../../../constants";
import * as S from "./style.js"
import FilterSection from "../components/FilterSection.jsx";
import FilterTitle from "../components/FilterTitle.jsx";
import {sidebarData} from "../feature/sideBarData.js";

const SideBar = () => {
  return (
      <S.Container>
        <FilterTitle icon={icEyes} title={string.filter}/>
        {sidebarData.map((section) => (
            <FilterSection key={section.title} subtitle={section.title} items={section.items}/>
        ))}
      </S.Container>
  );
};

export default SideBar;

