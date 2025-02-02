import {styled} from "styled-components";
import {TabButton} from "@components/index.js";
import {icTabList, icTabCard} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const TabMenu = ({activeTab, onClickTab}) => {
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