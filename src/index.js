import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginProvider from './Context/LoginProvider';
import RecipesProvider from './Context/RecipesProvider';
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
