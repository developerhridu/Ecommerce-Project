import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import 'antd/dist/reset.css';
import {AuthProvider} from "./context/auth";
import {CartProvider} from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
          <CartProvider>
              <App />
          </CartProvider>

      </AuthProvider>

  </React.StrictMode>
);

