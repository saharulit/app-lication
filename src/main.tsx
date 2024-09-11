import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';
import { config } from './config/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>TEST Sahar</div>
    <BrowserRouter basename={config.BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
