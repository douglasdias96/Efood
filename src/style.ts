import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
  }

  body{
    background-color:#FFF8F1;
  }

  .container {
    max-width: 1024px;
    width:100%;
    margin:0 auto;

    @media (max-width: 768px) {
    margin-left: 14px;
  }
  }
`