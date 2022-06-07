import React from "react";
import { Row, Col, Divider } from "antd";
import styles from "./BusinessPartners.modules.css";
import image1 from "../../assets/images/cereales-226142.png";
import image2 from "../../assets/images/dominos-226179.png";
import image3 from "../../assets/images/green-226210.png";
import image4 from "../../assets/images/hardees-226220.png";
import image5 from "../../assets/images/burger-226125.png";
import image6 from "../../assets/images/kfc-226245.png";

const companies = [
  { src: image1, title: "Cereales" },
  { src: image2, title: "Dominos" },
  { src: image3, title: "Green" },
  { src: image4, title: "Hardees" },
  { src: image5, title: "Burger" },
  { src: image6, title: "Kfc" },
];

// 泛型接口對接API section標題
interface PropsType {
  title: JSX.Element;
}

export const BusinessPartners: React.FC<PropsType> = ({ title }) => {
  return (
    <div
      style={{ backgroundColor: "white", marginTop: "30px", padding: "20px" }}
    >
      <Divider orientation="left">{title}</Divider>
      <Row style={{ backgroundColor: "white" }}>
        {companies.map((c, index) => (
          <Col span={4} key={"bussiness-partner-" + index}>
            <img
              alt="bussiness-partner"
              src={c.src}
              style={{
                width: "80%",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
