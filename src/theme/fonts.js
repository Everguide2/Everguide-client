const createFontStyle = (family, size, weight, lineHeight, letterSpacing) => `
    font-family: "${family}";
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${lineHeight}%; 
    letter-spacing: ${letterSpacing}%;
`
export const fonts = {
  header0: createFontStyle("NanumGothic-ExtraBold",44, 800, 160, -10),
  header1: createFontStyle("NanumGothic-Bold",44, 700, 160, 0),
  header2: createFontStyle("NanumGothic-Bold",40, 700, 160, 0),
  header3: createFontStyle("NanumGothic-Bold",36, 700, 160, 0),
  header4: createFontStyle("NanumGothic-Bold",32, 700, 160, 0),
  header5: createFontStyle("NanumGothic-Bold",28, 700, 160, 0),
  header6: createFontStyle("NanumGothic-Bold",24, 700, 160, 0),

  subHeader1: createFontStyle("NanumGothic-Bold",24, 700, 160, 0),
  subHeader2: createFontStyle("NanumGothic-Regular",24, 400, 160, 0),
  subHeader3: createFontStyle("NanumGothic-Bold",20, 700, 160, 0),
  subHeader4: createFontStyle("NanumGothic-Regular",20, 400, 160, 0),
  subHeader5: createFontStyle("NanumGothic-Bold",18, 700, 160, 0),
  subHeader6: createFontStyle("NanumGothic-Regular",18, 400, 160, 0),

  body1: createFontStyle("NanumGothic-Bold",20, 700, 160, 0),
  body2: createFontStyle("NanumGothic-Regular",20, 400, 160, 0),
  body3: createFontStyle("NanumGothic-Bold",16, 700, 160, 0),
  body4: createFontStyle("NanumGothic-Regular",16, 400, 160, 0),

  caption1: createFontStyle("NanumGothic-Bold",14, 700, 160, 0),
  caption2: createFontStyle("NanumGothic-Regular",14, 400, 160, 0),
  caption3: createFontStyle("NanumGothic-Bold",12, 700, 160, 0),
  caption4: createFontStyle("NanumGothic-Regular",12, 400, 160, 0),
};