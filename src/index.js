import React from 'react';
import ReactDOM from 'react-dom/client';
// Css
import 'bulma/css/bulma.css';
// App
import App from './components/App';
// Scripts
import "./auth/firebase"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
