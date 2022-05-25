import React from "react";
import logo from "./logo.svg";

import "./App.module.css";
import styles from "./App.module.css";
import { Layout, Typography, Input } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Layout.Header>
          <img src={logo} alt="logo" />
          <Typography.Title level={3}>Asia Travel</Typography.Title>
          <Input.Search 
            placeholder={"請输入旅游目的地、主题、或關鍵字"}
            className={styles["search-input"]}
          >
          </Input.Search>
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
