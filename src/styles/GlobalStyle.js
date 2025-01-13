import { createGlobalStyle } from "styled-components";
import {NanumGothicRegular, NanumGothicBold, NanumGothicExtraBold} from "../assets";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NanumGothic-Regular";
        font-weight: 400;
        src: url(${NanumGothicRegular}) format("truetype");
    }

    @font-face {
        font-family: "NanumGothic-Bold";
        font-weight: 700;
        src: url(${NanumGothicBold}) format("truetype");
    }

    @font-face {
        font-family: "NanumGothic-ExtraBold";
        font-weight: 800;
        src: url(${NanumGothicExtraBold}) format("truetype");
    }
    
  body {
    font-family: 'NanumGothic-Regular',sans-serif;
  }
`;

export default GlobalStyle;