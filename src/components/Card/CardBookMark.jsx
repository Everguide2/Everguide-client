import {styled} from "styled-components";
import {ReactSVG} from "react-svg";
import {useState} from "react";
import {icBookmark} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const CardBookMark = ({isBookmarked, onClickBookMark}) => {
  const [isMarked, setIsMarked] = useState(isBookmarked);

  return (
      <Container>
        <ReactSVG
            src={icBookmark}
            beforeInjection={(svg) =>{
              const path = svg.querySelector('path');
              if(path) {
                path.setAttribute('fill', isMarked ? '#FFBF00' : '#CBC9C5');
                path.setAttribute('stroke', isMarked ? '#E8AE00' : '#AAA9A6');
              }
            }}
            onClick={() => onClickBookMark(isMarked, setIsMarked)}
        />
      </Container>
  );
};

export default CardBookMark;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 26px;
`