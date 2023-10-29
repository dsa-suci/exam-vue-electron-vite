/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: '#3C3A3A',
      secondary: '#E1E1E1',
      darkMode: '#2A2F39',
      lightMode: '#D9D9D9',
      textSistem: '#D1CFCF',
      bgHeader: '#B0C2CC',
      title: '#3F6588',
      textContent: '#607080',
      bgGreen: '#B3D0B0',
      textBtn: '#FFFEFE',
      btnPrimary: '#3F6588',
      bgGagal: '#D0B0B6',
      bgCard: '#262a34',
      textKet: '#5D6165',
      borderBlue: '#3F6588',
      bluePrimary: '#3F6588',
      grayLight: '#EBEBEB',
      step: '#F4F4F1',
      environment: '#ECEBEB',
      header: '#EDEFF1',
      content: '#F1EFEF'
    },
    extend: {
      height: {
        27: '27px',
        33: '33px',
        57: '57px',
        92: '92px',
        100: '100px',
        109: '109px',
        193: '193px',
        210: '210px',
        250: '250px',
        251: '251px',
        258: '258px',
        262: '262px',
        280: '280px',
        300: '300px',
        330: '330px',
        354: '354px',
        358: '358px',
        360: '360px',
        368: '368px',
        400: '400px',
        447: '447px',
        497: '497px',
        500: '500px',
        868: '868px'
      },
      width: {
        27: '27px',
        33: '33px',
        57: '57px',
        92: '92px',
        100: '100px',
        109: '109px',
        193: '193px',
        210: '210px',
        250: '250px',
        251: '251px',
        258: '258px',
        262: '262px',
        280: '280px',
        300: '300px',
        330: '330px',
        354: '354px',
        358: '358px',
        360: '360px',
        368: '368px',
        400: '400px',
        447: '447px',
        497: '497px',
        500: '500px',
        868: '868px'
      },
      borderWidth: {
        3: '3px'
      },
      colors: {
        'vtd-primary': colors.blue, // Light mode Datepicker color
        'vtd-secondary': colors.gray // Dark mode Datepicker color
      },
      fontFamily: {
        chakra: 'Chakra Petch',
        chakraBold: 'Chakra Petch Bold',
        chakraSemibold: 'Chakra Petch SemiBold',
        chakraItalic: 'Chakra Petch Italic'
      },
      fontSize: {
        15: '15px',
        17: '17px',
        25: '25px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
