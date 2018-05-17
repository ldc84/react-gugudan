import Typography from 'typography';

const typography = new Typography({
  baseFontSize:'18px',
  baseLineHeight: 1,
  googleFonts: [
    {
      name: 'Monstserrat',
      styles: ['700']
    },
    {
      name: 'Open Sans',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Monstserrat', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
})

typography.injectStyles();

export default typography;