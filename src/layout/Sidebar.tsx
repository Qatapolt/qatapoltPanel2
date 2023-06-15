import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { appLogo, sLogout, userIcon } from "../assets/icons/indext";
import styles from "../styles/components/layout.module.scss";
import { sidebarMenu } from "../mock";
import { Avatar, Typography } from "@mui/material";
const drawerWidth = 240;

const SidebarFooter = () => {
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
export default function Sidebar() {
	return (
		<Drawer
			sx={{
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
			<Toolbar className={styles.sidebarLogo}>
				<img src={appLogo} alt="img" />
			</Toolbar>
			<List sx={{ flex: 2, lineHeight: 2 }}>
				{sidebarMenu.map(({ name, icon, pathName }, index) => (
					<ListItem key={name} disablePadding>
						<ListItemButton>
							<ListItemIcon sx={{ minWidth: "40px" }}>
								<img src={icon} alt="icon" />
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<Toolbar sx={{ flex: 0.3 }}>
				<SidebarFooter />
			</Toolbar>
		</Drawer>
	);
}
