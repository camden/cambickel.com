import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.5625,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['300i, 900, 900i'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Merriweather', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
});

export default typography;
