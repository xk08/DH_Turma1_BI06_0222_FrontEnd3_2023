import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* STRICT-MODE: ferramenta que sinaliza potenciais problemas em uma aplicação. */
  /* REF: https://react.dev/reference/react/StrictMode */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);