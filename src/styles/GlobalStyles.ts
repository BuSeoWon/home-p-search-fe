import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --pink-400: #F96F99;
    --pink-350: #F97CA1;
    --pink-300: #FF90B1;
    --pink-200: #FFC1D3;
    --pink-100: #FFE7EE;

    --blue-350: #1A83FF;
    --blue-300: #4B9EFF;
    --blue-250: #6FB1FF;
    --blue-200: #93C5FF;
    --blue-150: #B7D8FF;
    --blue-100: #DBECFF;
    --blue-050: #EDF5FF;

    --gray-350: #2C2C2C;
    --gray-300: #565656;
    --gray-250: #808080;
    --gray-200: #ABABAB;
    --gray-150: #D5D5D5;
    --gray-100: #EAEAEA;
    --gray-050: #F6F6F6;

    --system-error: #F54D4D;
    --system-success: #54D372;

    --primary: var(--pink-400);
    --primary-disabled: var(--pink-100);
  }

  a{
      text-decoration: none;
      color: inherit;
  }

  *{
      box-sizing: border-box;
      font-family: Pretendard-Regular;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    caret-color: #1A83FF;
  }
  
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: Pretendard-bold;
    color: #FFF;
    border-radius: 8px;
    height: 48px;
  }
`;

export default GlobalStyles;
