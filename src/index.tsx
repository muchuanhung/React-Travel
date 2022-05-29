import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 導入ＵＩ組件
import "antd/dist/antd.min.css";
// 導入語言切換組件
import "./i18n/configs"
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

