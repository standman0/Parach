const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme:{
        extend: {
           fontFamily: {
        'cabinet-grotesk': ['var(--font-cabinet-grotesk)', 'sans-serif'], // Define the utility class
      },
        },
      }
    },
  },
};

export default config;
