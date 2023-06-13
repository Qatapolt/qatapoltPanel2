import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./styles/globals.scss";
import App from "./App";
import React from "react";
import { lighTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={lighTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
