module.exports = {
  content: [
    './public/index.html',
    './src/pages/**/index.tsx',
    './src/components/**/*.tsx',
    './src/assets/**/*.tsx'
  ],
  theme: {
    extend: {},
    colors: {
      darkText: '#393B45',
      lightText: '#6E7889',
      lightBkgnd: '#FFFFFF  ',
      darkBkgnd: '#D8D9DE',
      lightAccent: '#F3B54A',
      darkAccent: '#584848'
    },
    spacing: {
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem', 
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      36: '9rem',
      48: '12rem',
      72: '18rem',
      96: '24rem',
    },
    plugins: [],
  }
};