import React from "react";
import styles from "./SideMenu.module.css";
// 導入假資料
import { sideMenuList } from "./mockup";
import { Menu } from "antd";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {/* 使用map 函式 第一級菜單*/}
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu key={`side-menu-${index}`} title={<span>{m.title}</span>}>
          {/* 使用map 函式 第二級菜單*/}
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={<span>{sm.title}</span>}
            >
              {/* 使用map 函式 第三級菜單*/}
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span>{sms}</span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
