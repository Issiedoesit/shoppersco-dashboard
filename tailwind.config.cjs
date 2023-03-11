/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Nav/Navbar.jsx",
    "./src/components/store/**/*.{js, ts,tsx, jsx}",
    "./src/components/App.jsx",
    "./src/components/NoMatchPage.jsx",
  ],
  theme: {
    extend: {
      colors:{
        brandDarkGreen1x: '#142D36',
        brandDarkGreen2x: '#123845',
        brandGreen1x: '#009933',
        brandGreen2x: '#2DA771',
        brandGreen3x: '#15CF741A',
        brandGreen4x: '#029834',
        brandGreen5x: '#1FAD66',
        brandGreen6x: '#01BA3E',
        brandGreen7x: '#28A952',
        brandLightGreen1x: '#B7EFD0',
        brandBlack1x: '#1E1E1E',
        brandBlack2x: '#252329',
        brandRed1x: '#FF3A44',
        brandRed2x: '#E75E79',
        brandRed3x: '#FF3A441A',
        brandRed4x: '#B31919',
        brandLightRed1x: '#FFD8DA',
        brandLightRed2x: '#F5C1C4',
        brandBlue1x: '#3992CC',
        brandBlue2x: '#00A1FF',
        brandBlue3x: '#3252FA1A',
        brandBlue4x: '#39A1FF',
        brandBlue5x: '#00A0FF',
        brandBlue6x: '#1E84C6',
        brandLightBlue1x: '#C1DFF3',
        brandPeach1x: '#FDF7DA',
        brandPeach2x: '#FFEBC8',
        brandYellow1x: '#F6DB49',
        brandYellow2x: '#FFE0001A',
        brandYellow3x: '#F6DB491A',
        brandYellow4x: '#FFBD0033',
        brandGray1x: '#898080',
        brandGray2x: '#6D7578',
        brandGray3x: '#F9FBFA',
        brandGray4x: '#F2F2F2',
        brandGray5x: '#F5F5F5',
        brandGray6x: '#E2E2E2',
        brandGray7x: '#F6F4F9',
        brandGray8x: '#7E7E7E',
        brandGray9x: '#D8D8D8',
        brandGray10x: '#B3B3B3',
        brandGray11x: '#DDDDDD',
        brandGray12x: '#7B7B7B', 
        brandGray13x: '#8C8C8C', 
        brandGray14x: '#848484', 
        brandGray15x: '#F8F8F8', 
        brandGray16x: '#ECECEC', 
        brandGray17x: '#909090', 
        brandGray18x: '#F6F6F6', 
        brandGray19x: '#A6A6A6', 
        brandGray20x: '#CCCCCC', 
        brandGray21x: '#D9D9D9', 
        brandGray22x: '#E1DFF4', 
        brandGray23x: '#A9A9A9', 
        brandGray24x: '#F9FBFA', 
        brandGray25x: '#4F4F4F', 
        brandGray26x: '#D6DBDD', 
        brandGray27x: '#AFAFAF', 
        brandGray28x: '#F3F1F1', 
        brandGray29x: '#9C9C9C', 
        brandGray30x: '#F1F1F1', 
        brandGray31x: '#797979', 
        brandGray32x: '#D6D6D6', 
        brandGray34x: '#9E9E9E', 
        brandGray35x: '#949494', 
        brandGray36x: '#EBEBEB', 
        brandGray37x: '#DEDEDE', 
        brandGray38x: '#F9F9F9', 
        brandGray39x: '#878787', 
        brandGray40x: '#ACACAC', 
        brandGray41x: '#263238', 
        brandGray42x: '#E6E6E6', 
        brandGray43x: '#EEEEEE', 
        brandGray44x: '#DCDCDC', 
        brandGray45x: '#777777', 
        brandGray46x: '#EAEAEA', 
        brandGray47x: '#959595', 
        brandGray48x: '#D2D2D2', 
        brandGray49x: '#E9E9E9', 
        brandGray50x: '#C2C5DC', 
        brandPurple1x: '#845CA7',
        brandPurple2x: '#8D8CFF33',
        brandPurple3x: '#8D8CFF',
        brandOrange1x: '#E09C16',
        brandLightOrange1x: '#FFEABF',
        brandWhite1x: '#FDFDFD',
        brandWhite2x: '#FBFBFB',
      },
      fontFamily:{
        HkGrotesk: ["HK Grotesk", "sans-serif"],
        moderat: ["Moderat", "sans-serif"],
        milligramLight300: ["Milligram Trial Light", "sans-serif"],
        milligramRegular400: ["Milligram Trial Regular", "sans-serif"],
        milligramBold700: ["Milligram Trial Bold", "sans-serif"],
        avenirRoman: ["avenir-roman", "sans-serif"],
        avenirBlack: ["avenir-black", "sans-serif"],
        avenirBook: ["avenir-book", "sans-serif"],
        avenirMedium: ["avenir-medium", "sans-serif"],
        avenirHeavy: ["avenir-heavy", "sans-serif"],
        avenirRegular: ["avenir-regular", "sans-serif"],
        avenirLight: ["avenir-light", "sans-serif"],
        grinched: ["Grinched", "sans-serif"],
        spaceGroteskBold: ["spacegrotesk-bold", "sans-serif"],
        spaceGroteskLight: ["spacegrotesk-light", "sans-serif"],
        spaceGroteskMedium: ["spacegrotesk-medium", "sans-serif"],
        spaceGroteskRegular: ["spacegrotesk-regular", "sans-serif"]
      },
      fontSize:{
        xxs:'10px'
      },
      borderRadius:{
        four: "0.25rem",
        five: "0.3125rem",
        six: "0.375rem",
        eight: "0.5rem",
        '8point66px': '0.54125rem',
        ten: "0.625rem",
        fifteen: "0.9375rem",
        twenty: "1.25rem",
        thirty: "1.875rem",
        forty: "2.5rem",
        fifty: "3.125rem",
        sixty: "3.75rem",
        eighty: "5rem",
        hundred: "6.25rem",
        twoFifty: "15.625rem",
        fiveHundred: "31.25rem",
        fiftyPercent: "50%"
      },
      borderWidth: {
        '0.5': '0.5px',
        '10': '10px',
        '12': '12px',
      },
      outlineWidth:{
        '0.5': '0.5px',
        '1': '1px',
        '10': '10px',
        '12': '12px',
      },
      spacing:{
        'sixPixel': "0.375rem",
        '18': '4.5rem',
        '0.75': '0.1875rem',
        'top18.5': '74px',
        '8point66px': '0.54125rem',
        '14px': '0.875rem',
        '18px': '1.125rem',
        '30px': '1.875rem',
        '40px': '2.5rem',
        '45px': '2.8125rem',
        '50px': '3.125rem',
        '55px': '3.4375rem',
        '60px': '3.75rem',
        '66px': '4.125rem',
        '67px': '4.1875rem',
        '68px': '4.25rem',
        '71px': '4.4375rem',
        '76px': '4.75rem',
        '130px': '8.125rem',
        '140px': '8.75rem',
        '145px': '9.0625rem',
        '150px': '9.375rem',
        '180px': '11.25rem',
        '254': '15.875rem',
        '307': '19.1875rem',
        '322': '20.125rem',
        '350': '21.875rem',
        '380': '23.75rem',
        '410': '25.625rem',
        '500': '31.25rem',
        '550': '34.375rem',
        '560': '35rem',
        '570': '35.625rem',
        '580': '36.25rem',
        '618': '38.625rem',
        '700': '43.75rem',
        '750': '46.875rem',
        '70px': '4.375rem',
        navIcon: '20px',
        authWrapper: '34%',
        dashScrollableHeight: 'calc(100% - 10px)',
        icon: '20px',
        onePixel: '0.0625rem',
        threePixel: '0.150rem',
        tenPixel: '0.625rem',
        '11.9': '11.9%',
        '14.5': '14.5%',
        '16.15': '16.15%',
        '20.4': '20.4%',
        fivePercent: '5%',
        eightPercent: '8%',
        ninePercent: '9%',
        tenPercent: '10%',
        tenFivePercent: '10.5%',
        elevenPercent: '11%',
        elevenFivePercent: '11.5%',
        twelvePercent: '12%',
        thirteenPercent: '13%',
        fourteenPercent: '14%',
        fifteenPercent: '15%',
        fifteenOnePercent: '15.1%',
        fifteenPlusOnePercent: 'calc(15% + 1px)',
        fifteenTwoPercent: '15.2%',
        fifteenFivePercent: '15.5%',
        seventeenPercent: '17%',
        eighteenPercent: '18%',
        nineteenPercent: '19%',
        nineteenOnePercent: '19.1%',
        nineteenTwoPercent: '19.2%',
        nineteenFivePercent: '19.5%',
        twentyPercent: '20%',
        twentyTwoPercent: '22%',
        twentyFourPercent: '24%',
        twentyFivePercent: '25%',
        twentySixPercent: '26%',
        thirtyPercent: '30%',
        thirtyOnePercent: '31%',
        thirtyTwoPercent: '32%',
        thirtyThreePercent: '33%',
        thirtyFivePercent: '35%',
        thirtySixPercent: '36%',
        thirtyEightPercent: '38%',
        fortyPercent: '40%',
        fortyFivePercent: '45%',
        fortySevenPercent: '47%',
        fortyEightPercent: '48%',
        fortyNinePercent: '49%',
        fiftyPercent: '50%',
        fiftyOnePercent: '51%',
        fiftyTwoPercent: '52%',
        fiftyThreePercent: '53%',
        fiftyFourPercent: '54%',
        fiftyFivePercent: '55%',
        sixtyPercent: '60%',
        sixtyTwoPercent: '62%',
        sixtyFivePercent: '65%',
        sixtySixPercent: '66%',
        sixtySevenPercent: '67%',
        seventyPercent: '70%',
        seventyFivePercent: '75%',
        seventyEightPercent: '78%',
        eightyPercent: '80%',
        eightyOnePercent: '81%',
        eightyThreePercent: '83%',
        eightyFourPercent: '84%',
        eightyFivePercent: '85%',
        eightyEightPercent: '88%',
        ninetyPercent: '90%',
        ninetyFivePercent: '95%',
        ninetyEightPercent: '98%',
        ninetyNinePercent: '99%',
        hundredPercent: '100%',
        oneTwentyPercent: '120%',
        oneFiftyPercent: '150%',
        threeHundredPercent: '300%'
      },
      screens:{
        'mds': {'min': '500px', 'max': '639px'},
        'xs': {'min': '200px', 'max': '300px'},
        'xsHeight': { 'raw': '(max-height:510px)'},
        'btwmdlg':{'min': '1000px', 'max': '1100px'},
      },
      maxWidth:{
        '160px': '10rem',
        '171px': '10.6875rem',
        '240px': '15rem',
        '450px': '28.125rem',
        '500px': '31.25rem',
        '750px': '46.875rem',
      },
      minWidth:{
        '5': '1.25rem',
        '8': '2rem',
        '160px': '10rem',
        '171px': '10.6875rem',
        '240px': '15rem',
        '305px': '19.0625rem',
        '450px': '28.125rem',
        '500px': '31.25rem',
        '750px': '46.875rem',
      },
      zIndex: {
        '70': '70',
        '80': '80',
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130',
        '150': '150',
        '180': '180',
        '200': '200',
        '250': '250'
      },
      minHeight: {
        '1/2': '50%',
        '160px': '10rem',
        '200px': '12.5rem',
        '350': '21.875rem',
      }
    },
  },
  plugins: [],
}
