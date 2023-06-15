import React from "react";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

interface TSidebar {
	children: React.ReactNode;
}

const Layout = ({ children }: TSidebar) => {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Sidebar />
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
