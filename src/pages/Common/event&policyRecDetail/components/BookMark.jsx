import {ReactSVG} from "react-svg";
import {icBookmark} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const BookMark = ({isBookMarked}) => {
  return (
      <ReactSVG
          src={icBookmark}
          beforeInjection={(svg) =>{
            const path = svg.querySelector('path');
            if(path) {
              path.setAttribute('fill',  isBookMarked ? '#FFBF00':'#CBC9C5');
              path.setAttribute('stroke', isBookMarked ? '#E8AE00' : '#AAA9A6');
            }
          }}
      />
  );
};

export default BookMark;