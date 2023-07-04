import * as React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { appLogo, lineIcon } from "../assets/icons/indext";
import styles from "../styles/components/layout.module.scss";
import { sidebarMenu } from "../mock";
import { SidebarFooter } from "./Sidebar";
import { Menu } from "@mui/icons-material";

interface TNavItem {
  activeTab: string;
  handleTab: (arg: any, arg1: any) => void;
  handleDrawerToggle?: () => void;
}
const NavItem = ({ activeTab, handleTab }: TNavItem) => {
  return (
    <>
      <Toolbar className={styles.sidebarLogo}>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, color: "#fff", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton> */}
        <img src={appLogo} alt="img" className="pointer" />
      </Toolbar>
      <div style={{ textAlign: "center" }}>
        <img src={lineIcon} alt={"line"} />
      </div>
      <List sx={{ flex: 2, lineHeight: 2 }}>
        {sidebarMenu.map(({ name, icon, key, aIcon }, index) => {
          let [textColor, iconColor] = ["sidebar-tab-text", "white_icon"];
          [textColor, iconColor] =
            activeTab === key?.toLowerCase()
              ? ["active-tab", "active_icon"]
              : ["sidebar-tab-text", "white_icon"];

          return (
            <ListItem
              key={key}
              disablePadding
              onClick={(e) => handleTab(e, key)}
              className={textColor}
              sx={{ pl: 1 }}
            >
              {activeTab === key?.toLowerCase() && (
                <span className="activeBorder"></span>
              )}
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <img
                    src={activeTab === key?.toLowerCase() ? aIcon : icon}
                    alt="icon"
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <div style={{ textAlign: "center" }}>
        <img src={lineIcon} alt={"line"} />
      </div>
      <Toolbar sx={{ flex: 0.3 }}>
        <SidebarFooter />
      </Toolbar>
    </>
  );
};

export default NavItem;
