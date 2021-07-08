import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    font-family: 'Arial', 'sans-serif';
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    color: #333333;
    font-size: 16px; 
}

body {
    min-width: 320px;
}
`;
