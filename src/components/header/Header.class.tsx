import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/tripadvisor.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
// 引入HOC高階函數
import { withRouter, RouteComponentProps } from "react-router-dom";
// 引入store倉庫
import store from "../../redux/store";
// 引入語言reducer
import { LanguageState } from "../../redux/language/languageReducer";
// 引入語言切換的高階函數
import { withTranslation, WithTranslation } from "react-i18next";
// 導入action集中工廠
import { changeLanguageActionCreator } from "../../redux/language/languageActions";

// 繼承languagereducer裡面定義好的state接口
interface State extends LanguageState {}

// 宣告component繼承react.component然後泛型代入routecomponentprops
// 使用store 保存本地變量get.state
class HeaderComponnet extends React.Component<RouteComponentProps & WithTranslation, State> {
  // 導入構造函數
  constructor(props) {
    super(props);
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
    store.subscribe(this.handleStoreChange);
  }
  // 使用state的this.setstate更新函數
  handleStoreChange = ()=>{
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    });
  }

  // 導入click事件與dispatch異位回傳的action
  // type 類型名稱 playload 任意類型的key 向store dispatch new state
  menuClickHandler = (e) => {
    console.log(e);
    const action = changeLanguageActionCreator(e.key)
    store.dispatch(action);
  };

  render() {
    const { history, t } = this.props;
    return (
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                /* 加入點擊事件的監聽action */
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map((l) => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                  })}
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => history.push("register")}>{t("header.register")}</Button>
              <Button onClick={() => history.push("signin")}>{t("header.signin")}</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="logo" className={styles["App-logo"]} />
            <Typography.Title level={4} className={styles.title}>
            {t("header.title")}
            </Typography.Title>
          </span>

          <Input.Search
            placeholder={"請輸入旅遊目的地、主题、或關鍵字"}
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key={1}> {t("header.group")} </Menu.Item>
          <Menu.Item key={2}> {t("header.airplane")} </Menu.Item>
          <Menu.Item key={3}> {t("header.booking")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.subject")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.highway")} </Menu.Item>
          <Menu.Item key="10"> {t("header.ticket")} </Menu.Item>
          <Menu.Item key="11"> {t("header.visa")} </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export const Header = withTranslation()(withRouter(HeaderComponnet));
