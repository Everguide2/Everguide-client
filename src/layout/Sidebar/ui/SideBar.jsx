import {icEyes} from "@/assets";
import {string} from "@/constants";
import {BasicButton} from "@/components"
import * as S from "./style.js"
import {sideBarData} from "@layout/Sidebar/feature/sideBarData.js";
import {sideBarJobData} from "@layout/Sidebar/feature/sideBarJobData.js";
import {FilterTitle, FilterSection, EverguideManual} from "@layout/Sidebar/components";


const SideBar = ({type = "normal"}) => {
  return (
      <S.Container>
        {type === "mypage" && <BasicButton text={string.alarmContinue}/> }
        <S.FilterContainer>
          <FilterTitle icon={icEyes} title={string.filter}/>
          {type === "normal" ? sideBarData.map((section) => (
              <FilterSection key={section.title} subtitle={section.title} items={section.items}/>
          )) : sideBarJobData.map((section) => (
              <FilterSection key={section.title} subtitle={section.title} items={section.items}/>
          ))
          }
        </S.FilterContainer>
        <EverguideManual/>
      </S.Container>
  );
};

export default SideBar;

