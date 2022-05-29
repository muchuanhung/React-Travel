import React from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  BusinessPartners,
} from "../../components";
// 導入類似Bootstrap Grid-layout-system
import { Row, Col, Typography } from "antd";
// 導入Product mock-data
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_1.png";
import sideImage2 from "../../assets/images/sider_2.png";
import sideImage3 from "../../assets/images/sider_3.png";
// 引入語言切換的高階函數
import { withTranslation, WithTranslation } from "react-i18next";

class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    // console.log(this.props.t)
    const { t } = this.props;
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
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.best_schedule")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
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

// 括號語言命名空間 / 組件
export const HomePage = withTranslation()(HomePageComponent);
