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
import { Row, Col, Typography, Spin } from "antd";
// 導入Postman API資料

import sideImage from "../../assets/images/sider_1.png";
import sideImage2 from "../../assets/images/sider_2.png";
import sideImage3 from "../../assets/images/sider_3.png";
// 引入語言切換的高階函數
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";

//定義state接口
interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}

class HomePageComponent extends React.Component<WithTranslation, State> {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      productList: [],
    };
  }

  // 創造生命週期函數-api抓資料的寫法
  // api 抓取錯誤使用try & catch
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8089/api/productCollections"
      );
      this.setState({
        loading: false,
        error: null,
        productList: data,
      });
    } catch (error) {
      this.setState({
        error: null,
        loading: false,
      });
    }
  }

  render() {
    // console.log(this.props.t)
    const { t } = this.props;
    const { productList, loading, error } = this.state;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            margin: "200 auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>網站錯誤：{error}</div>;
    }
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
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.best_schedule")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
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
