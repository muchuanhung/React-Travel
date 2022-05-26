import React from "react";
import { Image, Typography } from "antd";

// interface dummmy-data element
interface PropsType {
    id: string | number;
    size: "large" | "small";
    imageSrc: string;
    price: number | string;
    title: string;
}

// 用slice短顯示title
export const ProductImage: React.FC<PropsType> = ({id, size, imageSrc, price, title}) => {
    return (
      <>
        {size === "large" ? (
          <Image src={imageSrc} height={285} width={490} style={{ borderRadius:"5px" }} />
        ) : (
          <Image src={imageSrc} height={120} width={240} style={{ borderRadius:"5px" }} />
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography.Text type="secondary">
            {title.slice(0, 20)}
          </Typography.Text>
          <Typography.Text type="danger" strong>
            $ {price} 起
          </Typography.Text>
        </div>
      </>
    );
}