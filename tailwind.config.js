module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#FFFFFF',
          '200': '#F5F5F5',
          '300': '#E4E4E4',
          '400': '#C1C4CB',
          '500': '#7C8187',
          '600': '#5A6069',
          '700': '#35393F',
          '800': '#2B2D31',
          '900': '#1D1F22',
          '1000': '#151619',
        },
        'accent': '#E46643',
        'accent-hover': '#1D1F22',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Roboto-Mono': ['Roboto Mono', 'monospace'],
        'Roboto-Slab': ['Roboto Slab', 'serif'],
      },
      
      // spacing: {

      // },
      screens: {
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1440px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
