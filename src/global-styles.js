import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Montserrat','Open Sans','Martel Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #333333;
  font-size: 16px;
  box-sizing: content-box;

  *, *:before, *:after {
    box-sizing:inherit;
  }
  
}`;
