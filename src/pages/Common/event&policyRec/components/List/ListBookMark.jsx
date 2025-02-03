import {ReactSVG} from "react-svg";
import {icStar} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const ListBookMark = ({isBookMarked}) => {
  return (
      <ReactSVG
          src={icStar}
          beforeInjection={(svg) =>{
            const path = svg.querySelector('path');
            if(path) {
              path.setAttribute('fill',  isBookMarked ? '#FFBF00':'#CBC9C5');
            }
          }}
      />
  );
};

export default ListBookMark;