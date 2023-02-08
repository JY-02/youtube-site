import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor=persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
