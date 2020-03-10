import { createGlobalStyle } from 'styled-components';

// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font: 14px 'Roboto', 'sans-serif';
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 16px;
    text-transform: uppercase;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }
  .Toastify__toast.Toastify__toast--error.toast-container,
  .Toastify__toast.Toastify__toast--success.toast-container {
    border-radius: 4px !important;
    padding: 15px !important;
  }
  .Toastify__toast.Toastify__toast--error.toast-container.Toastify__toast--error {
    background: #de3b3b;
  }
`;
