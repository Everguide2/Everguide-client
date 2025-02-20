import {styled} from "styled-components";
import {useSelector} from "react-redux";
import {string} from "@constants/index.js";
import AlarmItem from "@components/Modal/Alarm/components/AlarmItem.jsx";

// eslint-disable-next-line react/prop-types
const Alarm = ({onMouseEnter, onMouseLeave}) => {

  const alarmDatas = useSelector(state => state.alarm);

  return (
      <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Notification>
          <Triangle/>
          <Header>
            <Title>{string.noRead}</Title>
            <TotalContainer>
              <Total>10</Total>
            </TotalContainer>
          </Header>
          <Content>
            {alarmDatas.map((item) => (
              <AlarmItem
                key={item.id}
                dDay={item.dDay}
                category={item.category}
                time={item.time}
                title={item.title}
                description={item.description}
                read={item.read}
                type={item.type}
              />
            ))}
          </Content>
        </Notification>
      </Container>
  );
};

export default Alarm;


const Container = styled.div`
  width: 365px;
  position: absolute;
  top: 120px;
  right: 58px;
  background-color: ${({theme}) => theme.colors.gray[50]};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  box-sizing: border-box;
  z-index: 99;
`

const Notification = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Triangle = styled.div`
  position: absolute;
  top: -25px;
  right: 33px;
  width: 0;
  height: 0;
  border-left: 28px solid transparent;
  border-right: 28px solid transparent;
  border-bottom: 27px solid ${({theme}) => theme.colors.white};

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -28px; 
    width: 0;
    height: 0;
    border-left: 28px solid transparent;
    border-right: 28px solid transparent;
    border-bottom: 27px solid rgba(0, 0, 0, 0.2);
    filter: blur(6px);
    z-index: -1;
  }
`

const Header = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 24px 24px 0 0;
  background-color: ${({theme}) => theme.colors.white};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 21px 0 20px;
`

const Title = styled.p`
  ${({theme}) => theme.fonts.caption3};
  color: ${({theme}) => theme.colors.gray[600]};
`

const TotalContainer = styled.div`
  height: 16px;
`

const Total = styled.p`
  ${({theme}) => theme.fonts.caption3};
  background-color: ${({theme}) => theme.colors.secondary[500]};
  color: ${({theme}) => theme.colors.white};
  height: 100%;
  text-align: center;
  padding: 0 6px 2px 6px;
  border-radius: 4px;
`

const Content = styled.div`
  display: flex;
  height: 377px;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  padding: 16px 0;
  gap: 12px;
  overflow-y: scroll;
  scrollbar-width: none;
`