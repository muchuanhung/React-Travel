import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/tripadvisor.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            語言
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button>註冊</Button>
            <Button>登入</Button>
          </Button.Group>
        </div>
      </div>

      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="logo" className={styles["App-logo"]} />
        <Typography.Title level={4} className={styles.title}>
          Holiday Travel
        </Typography.Title>
        <Input.Search
          placeholder={"請輸入旅遊目的地、主题、或關鍵字"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>團體</Menu.Item>
        <Menu.Item key={2}>機票</Menu.Item>
        <Menu.Item key={3}>訂房</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 主題旅遊 </Menu.Item>
        <Menu.Item key="6"> 郵輪 </Menu.Item>
        <Menu.Item key="7"> 酒店+景點 </Menu.Item>
        <Menu.Item key="8"> 當地旅行 </Menu.Item>
        <Menu.Item key="9"> 高鐵旅行 </Menu.Item>
        <Menu.Item key="10"> 票卷旅遊 </Menu.Item>
        <Menu.Item key="11"> 簽證 </Menu.Item>
      </Menu>
    </div>
  );
};
