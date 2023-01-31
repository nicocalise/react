import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { LangProvider } from './context/LanguageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LangProvider>
        <App />
      </LangProvider>
    </Router>
  </React.StrictMode>
);

