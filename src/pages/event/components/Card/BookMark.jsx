import {styled} from "styled-components";
import {ReactSVG} from "react-svg";
import {icBookmark} from "../../../../assets/index.js";

// eslint-disable-next-line react/prop-types
const BookMark = ({isBookmarked}) => {
  return (
      <Container>
        <ReactSVG
            src={icBookmark}
            beforeInjection={(svg) =>{
              const path = svg.querySelector('path');
              if(path) {
                path.setAttribute('fill', isBookmarked ? '#FFBF00' : '#CBC9C5');
                path.setAttribute('stroke', isBookmarked ? '#E8AE00' : '#AAA9A6');
              }
            }}
        />
      </Container>
  );
};

export default BookMark;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 26px;
`