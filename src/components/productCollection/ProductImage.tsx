import React from "react";
import { Image, Typography } from "antd";
// 引入Hoc高階函數 Link組件
import { withRouter, RouteComponentProps, Link } from "react-router-dom";

// interface dummmy-data element
interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

// 用slice短顯示title
// 使用ＨＯＣ函數封裝component history push 推進哪一個頁面進入navigation
const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
  history,
  location,
  match,
}) => {
  return (
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image
          src={imageSrc}
          height={285}
          width={490}
          style={{ borderRadius: "5px" }}
        />
      ) : (
        <Image
          src={imageSrc}
          height={120}
          width={240}
          style={{ borderRadius: "5px" }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography.Text type="secondary">{title.slice(0, 20)}</Typography.Text>
        <Typography.Text type="danger" strong>
          $ {price} 起
        </Typography.Text>
      </div>
    </Link>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
