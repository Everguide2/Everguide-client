import {styled} from "styled-components";
import {string} from "@constants/index.js";

// eslint-disable-next-line react/prop-types
const AlarmItem = ({dDay, category, time, title, description, read, type}) => {
  return (
      <Container $read={read.toString()}>
        <InfoContainer>
          <Dday $type={type} $read={read.toString()}>{type === "D-Day" ? string.dTitle + dDay : type}</Dday>
          <Category>{category}</Category>
          <Time>{time}</Time>
        </InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
  );
};

export default AlarmItem;

const Container = styled.div`
  width: 329px;
  height: 99px;
  border-radius: 14px;
  background-color:white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 12px 18px 16px 18px;
  opacity: ${({$read}) => $read === "true" ? '43%': '' };
`

const InfoContainer = styled.div`
  display: flex;
  gap: 7px;
`
const Dday = styled.p`
  ${({theme}) => theme.fonts.caption3};
  color: ${({theme, $type, $read}) => $type === "D-Day" ? $read === "false" ? theme.colors.state.red: theme.colors.gray[400]:$read === "false"  ? theme.colors.primary[500] : theme.colors.gray[400]};
`
const Category = styled.p`
  ${({theme}) => theme.fonts.caption3};
  color: ${({theme}) => theme.colors.gray[600]};
`
const Time = styled.p`
  ${({theme}) => theme.fonts.caption4};
  color: ${({theme}) => theme.colors.gray[300]};
`

const Title = styled.p`
  ${({theme}) => theme.fonts.caption1};
  color: ${({theme}) => theme.colors.gray[900]};
  margin-top: 8px;
`
const Description = styled.p`
  ${({theme}) => theme.fonts.caption2};
  color: ${({theme}) => theme.colors.gray[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`