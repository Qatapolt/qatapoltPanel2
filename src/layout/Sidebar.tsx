import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { appLogo, lineIcon, sLogout, userIcon } from "../assets/icons/indext";
import styles from "../styles/components/layout.module.scss";
import { sidebarMenu } from "../mock";
import { Avatar, Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = React.useState("");

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
		</Drawer>
	);
}
