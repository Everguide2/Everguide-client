import {styled} from "styled-components";
import {TabButton} from "../../../components";
import {icTabList, icTabCard} from "../../../assets";
import {useState, useEffect} from "react";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("left");

  const onClickTab = (tab) => {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab);
  }

  useEffect(() => {
    const savedTabs = sessionStorage.getItem("activeTab");
    if(savedTabs){
      setActiveTab(savedTabs);
    }
  }, []);

  return (
      <Container>
        <TabButton image={icTabCard} active={activeTab === "left"} onClick={() => onClickTab("left")} />
        <TabButton image={icTabList} active={activeTab === "right"} onClick={() => onClickTab("right")} />
      </Container>
  );
};

export default TabMenu;

const Container = styled.div`
  display: flex;
  gap: 16px;
`