import {useState, useEffect} from "react";
import {styled} from "styled-components";
import {string} from "@constants/index.js";
import {CommonHeader} from "@pages/Common/event&policyRec/components/index.js";
import {ListHeader, List, Paginations, MyPageButton} from "@components/index.js";
import {useSelector, useDispatch} from "react-redux";
import {setPage} from "@stores/paging/pagingSlice.js";
import {addSavedList, deleteSavedList} from "@stores/mypage/savedListSlice.js";
import {noImageData} from "@test/policyDummy.js";

const SavedList = () => {
  const listData = ["등록일 순", "신청 마감순"];
  const [deleteList, setDeleteList] = useState([]);
  const [active, setActive] = useState(string.policy);
  const [activeTab, setActiveTab] = useState("right");
  const total = useSelector(state => state.paging.totalItems);
  const bookMarks = useSelector(state => state.savedList);
  const dispatch = useDispatch();

  const onClickTabs = (tabs) => {
    setActive(tabs);
  }

  const onClickTabMenu = (tab) => {
    setActiveTab(tab);
  }

  const onClickBookMarkList = (id) => {
    setDeleteList(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  }

  const onClickCheckDelete = () => {
  }

  useEffect(() => {
    dispatch(setPage({itemsCount: 10, totalItems: 160, pageRange: 5}));
    noImageData.forEach((item) => {
      dispatch(addSavedList({...item}));
    })

  }, []);

  return (
      <Container>
        <MyPageHeader>
          <Title>{string.savedlistTitle}</Title>
          <SubTitle>{string.savedlistDescription}</SubTitle>
        </MyPageHeader>
        <Content>
          <TabContainer>
            <Tab $active={active === string.policy} onClick={() => onClickTabs(string.policy)}>{string.policy}</Tab>
            <Tab $active={active === string.eventEducation} onClick={() => onClickTabs(string.eventEducation)}>{string.eventEducation}</Tab>
            <Tab $active={active === string.work} onClick={() => onClickTabs(string.work)} >{string.work}</Tab>
          </TabContainer>
          <ListContainer>
            <CommonHeader
                total={total}
                listData={listData}
                activeTab={activeTab}
                onClickTab={onClickTabMenu}
                type={"small"}
            />
            <ListViewContainer>
              <ListHeader isMyPage={true} type={active}/>
              {bookMarks.map((item) => (
                  <List
                    key={item.id}
                    isMyPage={true}
                    city={item.city}
                    category={item.category}
                    title={item.title}
                    assign={item.assign}
                    duration={item.duration}
                    dDay={item.dDay}
                    onClickCheckBox={() => onClickBookMarkList(item.id)}
                  />
              ))}
            </ListViewContainer>
            <BottomContainer>
              <Blank/>
              <Paginations/>
              <MyPageButton text={string.checkDelete} active={deleteList.length > 0} onClick={onClickCheckDelete}/>
            </BottomContainer>
          </ListContainer>
        </Content>
      </Container>
  );
};

export default SavedList;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
`
const MyPageHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`
const Title = styled.p`
  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.primary[900]};
`
const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  color: #BBBBBB;
`
const Content = styled.div`
  margin-top: 18px;
  position: relative;
`
const TabContainer = styled.div`
  display: flex;
  position: relative;
`
const Tab = styled.button`
  ${({ theme }) => theme.fonts.header6}
  width: 190px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-bottom: ${({ theme, $active }) => $active ? 'none' : `1px solid ${theme.colors.gray[300]}`};
  border-radius: 42px 42px 0 0;
  background-color: ${({ theme, $active }) => $active ? theme.colors.white : theme.colors.gray[200]};
  color: ${({ theme, $active }) => $active ? theme.colors.primary[900] : theme.colors.gray[400]};
  box-sizing: border-box;
  padding: 14px 0 6px 0;
  cursor: pointer;
  position: relative;
  margin-left: -10px;

  &:first-child:hover,
  &:nth-child(2):hover,
  &:last-child:hover
  {
    color: ${({ theme }) => theme.colors.primary[900]};
    background-color: ${({ theme }) => theme.colors.white};
    //position: relative;
    //z-index: 99;
  }
  
  &:first-child {
    z-index: 4;
    margin-left: 0;
  }
  
  &:nth-child(2) {
    z-index: ${({ $active }) => $active ? 99 : 3};
  }
  
  &:last-child {
    z-index: ${({ $active }) => $active ? 99 : 2};
  }
`
const ListContainer = styled.div`
  width: 1010px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 42px 42px 42px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  position: relative;
  top: -2px;
  padding: 29px 0;
  
  & > div {
    padding-left: 19px;
  }
`

const ListViewContainer = styled.table`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 1px solid ${({theme}) => theme.colors.gray[900]};
  margin-top: 17px;
`

const Blank = styled.div``

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-top: 25px;
`