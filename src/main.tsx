import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./styles/globals.scss";
import App from "./App";
import React from "react";
import { lighTheme } from "./theme";
import "react-circular-progressbar/dist/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={lighTheme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);
