import React from "react";
import styles from "./App.module.css";
import { Header, Footer, Carousel, SideMenu } from "./components";
// 導入類似Bootstrap Grid-layout-system
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      
      <Header />
      {/* 页面内容 Main-content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={4}>
            {/* sidemenu */}
            <SideMenu />
          </Col>
          <Col span={20}>
             {/* swiper 輪播系統 */}
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
