import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RemembrallContextProvider } from './context/RemembrallContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RemembrallContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RemembrallContextProvider>
);
