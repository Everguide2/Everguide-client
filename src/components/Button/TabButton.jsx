import {styled} from "styled-components";
import { ReactSVG } from "react-svg";

// eslint-disable-next-line react/prop-types
const TabButton = ({image, onClick, active}) => {

  return (
      <Container onClick={onClick} >
        <ReactSVG
            src={image}
            beforeInjection={(svg) =>{
              const path = svg.querySelector('path');
              if(path) {
                path.setAttribute('fill', active ? '#4E4C49' : '#CBC9C5');
              }
            }}
        />
      </Container>
  );
};

export default TabButton;

const Container = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
`