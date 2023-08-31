import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RestaurantsContextProvider} from "./context/RestaurantContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestaurantsContextProvider>
      <App />
    </RestaurantsContextProvider>
  </React.StrictMode>
);

