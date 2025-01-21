import {styled} from "styled-components";
import {icDropDownDown} from "@assets/index.js";
import {useState, useEffect, useRef} from "react";

// eslint-disable-next-line react/prop-types
const DropDown = ({initial, items}) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(initial);


  const handleSelectValue = (e) => {
    const selectedValue = e.target.getAttribute("value");
    setIsOpen(false);
    setCurrentValue(selectedValue);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <Container ref={selectRef}>
        <button onClick={() => {setIsOpen(!isOpen)}}>{currentValue}<img src={icDropDownDown} alt="dropdown"/></button>
        {isOpen && (
            <ul>
              {items.map((item, index) => (
                  <li key={index} value={item} onClick={(e) => handleSelectValue(e)}>{item}</li>
              ))}
            </ul>
        )}
      </Container>
  );
};

export default DropDown;

const Container = styled.div`
  display: inline-block;
  color: ${({theme}) => theme.colors.gray[800]};
  ${({theme}) => theme.fonts.caption2};
  position: relative;
  
  button {
    width: 154px;
    height: 40px;
    text-align: left;
    border-radius: 12px;
    ${({theme}) => theme.fonts.caption2}
    border: 1px solid ${({theme}) => theme.colors.gray[300]};
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  button:hover {
    border: 1px solid ${({theme}) => theme.colors.gray[800]};
  }

  ul {
    width: 154px;
    border: 1px solid ${({theme}) => theme.colors.gray[300]};
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 12px;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.16);
    position: absolute;
    top: 40px;
    z-index: 999;

    li {
      box-sizing: border-box;
      padding: 9px 0 9px 20px;
    }

    li:hover {
      background-color: ${({theme}) => theme.colors.primary[50]};
      color: ${({theme}) => theme.colors.primary[500]};
    }

    li:first-child:hover {
      border-radius: 12px 12px 0 0;
    }

    li:last-child:hover {
      border-radius: 0 0 12px 12px;
    }
  }
`
