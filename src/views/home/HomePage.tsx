import React from "react";
import styles from "./HomePage.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from "../../components";
// 導入類似Bootstrap Grid-layout-system
import { Row, Col, Typography } from "antd";
// 導入Product mock-data
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_1.png";
import sideImage2 from "../../assets/images/sider_2.png";
import sideImage3 from "../../assets/images/sider_3.png";

 
export class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.App}>
      <Header />
      {/* 页面内容 Main-content */}
      <div className={styles["page-content"]}>
        {/* Banner */}
        <Row style={{ margin: 20 }}>
          <Col span={4}>
            {/* sidemenu */}
            <SideMenu />
          </Col>
          <Col span={20}>
            {/* swiper 輪播系統 */}
            <Carousel />
          </Col>
        </Row>

        {/* Product-collection */}
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              熱門推薦
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
             <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              精選行程
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              國內外旅遊推薦
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </div>
    );
  }
}
