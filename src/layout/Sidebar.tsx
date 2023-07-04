import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { sLogout, userIcon } from "../assets/icons/indext";
import styles from "../styles/components/layout.module.scss";
import { Avatar, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { Menu } from "@mui/icons-material";
const drawerWidth = 240;

export const SidebarFooter = () => {
  return (
    <div className={styles.sidebarFooterWrapper}>
      <div className={styles.footer}>
        <Avatar
          src={userIcon}
          alt="user"
          sx={{ mr: 1, width: 48, height: 48 }}
        />
        <div>
          <Typography variant="body1">John Doe</Typography>
          <Typography variant="body2">qata-polt</Typography>
        </div>
      </div>
      <div className={styles.footerLogout}>
        <img src={sLogout} alt="logout" />
      </div>
    </div>
  );
};

export default function Sidebar(props: any) {
  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    highlightActiveTab();
  }, [location.pathname]);

  const highlightActiveTab = () => {
    let pathname = location.pathname.split("/");
    let activeTab = pathname[1];

    if (activeTab === "") {
      setActiveTab("dashboard");
    } else {
      setActiveTab(activeTab);
    }
  };

  const handleTab = (e: React.MouseEvent<HTMLElement>, menu: string) => {
    e.preventDefault();
    navigate(`/${menu}`);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      sx={{
        display: { xs: "none", sm: "block" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#233F35",
          borderRadius: "24px",
          color: "#fff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <NavItem activeTab={activeTab} handleTab={handleTab} />
    </Drawer>
  );
}
