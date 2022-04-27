import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginProvider from './context/LoginProvider';
import RecipesProvider from './context/RecipesProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <RecipesProvider>
          <App />
        </RecipesProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
