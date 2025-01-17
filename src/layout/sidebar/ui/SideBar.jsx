import {icEyes} from "../../../assets";
import {string} from "../../../constants";
import * as S from "./style.js"
import {FilterTitle, FilterSection, EverguideManual} from "../components";
import {sidebarData} from "../feature/sideBarData.js";

const SideBar = () => {
  return (
      <>
        <S.Container>
          <FilterTitle icon={icEyes} title={string.filter}/>
          {sidebarData.map((section) => (
              <FilterSection key={section.title} subtitle={section.title} items={section.items}/>
          ))}

        </S.Container>
        <EverguideManual/>
      </>
  );
};

export default SideBar;

