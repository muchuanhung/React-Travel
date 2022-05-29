import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 導入ＵＩ組件
import "antd/dist/antd.min.css";
// 導入語言切換組件
import "./i18n/configs"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

