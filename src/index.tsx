import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 導入ＵＩ組件
import "antd/dist/antd.min.css";
// 導入語言切換組件
import "./i18n/configs"
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
       <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

