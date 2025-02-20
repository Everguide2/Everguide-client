const createFontStyle = (family, size, weight, lineHeight, letterSpacing) => `
    font-family: "${family}";
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${lineHeight}%; 
    letter-spacing: ${letterSpacing}%;
`
export const fonts = {
  header0: createFontStyle("Nanum Gothic",44, 800, 160, -10),
  header1: createFontStyle("Nanum Gothic",44, 700, 160, 0),
  header2: createFontStyle("Nanum Gothic",40, 700, 160, 0),
  header3: createFontStyle("Nanum Gothic",36, 700, 160, 0),
  header4: createFontStyle("Nanum Gothic",32, 700, 160, 0),
  header5: createFontStyle("Nanum Gothic",28, 700, 160, 0),
  header6: createFontStyle("Nanum Gothic",24, 700, 160, 0),

  subHeader1: createFontStyle("Nanum Gothic",24, 700, 160, 0),
  subHeader2: createFontStyle("Nanum Gothic",24, 400, 160, 0),
  subHeader3: createFontStyle("Nanum Gothic",20, 700, 160, 0),
  subHeader4: createFontStyle("Nanum Gothic",20, 400, 160, 0),
  subHeader5: createFontStyle("Nanum Gothic",18, 700, 160, 0),
  subHeader6: createFontStyle("Nanum Gothic",18, 400, 160, 0),

  body1: createFontStyle("Nanum Gothic",20, 700, 160, 0),
  body2: createFontStyle("Nanum Gothic",20, 400, 160, 0),
  body3: createFontStyle("Nanum Gothic",16, 700, 160, 0),
  body4: createFontStyle("Nanum Gothic",16, 400, 160, 0),

  caption1: createFontStyle("Nanum Gothic",14, 700, 160, 0),
  caption2: createFontStyle("Nanum Gothic",14, 400, 160, 0),
  caption3: createFontStyle("Nanum Gothic",12, 700, 160, 0),
  caption4: createFontStyle("Nanum Gothic",12, 400, 160, 0),
};