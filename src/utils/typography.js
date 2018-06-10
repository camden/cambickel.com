import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5625,
  googleFonts: [
    {
      name: 'Source Serif Pro',
      styles: ['400, 700'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Source Serif Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
});

export default typography;
