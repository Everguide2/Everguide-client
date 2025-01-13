const createFontStyle = (size, weight, lineHeight, letterSpacing) => `
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${lineHeight}%; 
    letter-spacing: ${letterSpacing}%;
`
export const fonts = {
  header0: createFontStyle(44, 'bold', 160, -10),
  header1: createFontStyle(44, 'bold', 160, 0),
  header2: createFontStyle(40, 'bold', 160, 0),
  header3: createFontStyle(36, 'bold', 160, 0),
  header4: createFontStyle(32, 'bold', 160, 0),
  header5: createFontStyle(28, 'bold', 160, 0),
  header6: createFontStyle(24, 'bold', 160, 0),

  subHeader1: createFontStyle(24, 'bold', 160, 0),
  subHeader2: createFontStyle(24, 600, 160, 0),
  subHeader3: createFontStyle(20, 'bold', 160, 0),
  subHeader4: createFontStyle(20, 600, 160, 0),
  subHeader5: createFontStyle(18, 'bold', 160, 0),
  subHeader6: createFontStyle(18, 600, 160, 0),

  body1: createFontStyle(20, 'bold', 160, 0),
  body2: createFontStyle(20, 600, 160, 0),
  body3: createFontStyle(16, 'bold', 160, 0),
  body4: createFontStyle(16, 600, 160, 0),

  caption1: createFontStyle(14, 'bold', 160, 0),
  caption2: createFontStyle(14, 600, 160, 0),
  caption3: createFontStyle(12, 'bold', 160, 0),
  caption4: createFontStyle(12, 600, 160, 0),
};