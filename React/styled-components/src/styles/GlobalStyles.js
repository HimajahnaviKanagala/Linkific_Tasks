import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
body{
margin:0;
padding:0;
font-family:sans-serif;
background:${(props) => props.theme.bg};
color:${(props) => props.theme.text};
transition:0.3s ease;
}`;
