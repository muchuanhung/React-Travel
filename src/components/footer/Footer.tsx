import React from "react";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={5} style={{ textAlign: "center" }}>
        CopyRight @ Holiday Travel
      </Typography.Title>
    </Layout.Footer>
  );
};
