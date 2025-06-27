// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'; // ✅ Make sure this exists
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>               {/* Redux Provider */}
      <BrowserRouter>                      {/* React Router */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
