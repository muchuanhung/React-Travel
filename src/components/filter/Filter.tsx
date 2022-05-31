import React, { Fragment } from "react";
import { Typography, Divider } from "antd";
const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title} :{" "}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1)
          return < div key={`filter${index}`}>{t}</div>;
        return (
          <span key={`filter${index}`}>
            <div>{t}</div>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
