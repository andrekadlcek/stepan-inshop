module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte'],
  plugins : [
    require('@tailwindcss/forms'),
  ],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        cta: '#ff5858',
        orange: '#f09819',
        red: '#db1037',
        blue: '#2173AD',
        inshopRed: {
          DEFAULT: '#E43722',
          dark: '#9b2c2c'
        }
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: { // for the utilities
    fluidContainer: ['responsive'], // defaults to ['responsive']
  }
}