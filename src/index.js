import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
      padding: 0;
      margin: 0;
      overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  * {
      box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

