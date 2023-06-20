import { Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const lighTheme = createTheme({
	palette: {
		primary: {
			main: "#233F35",
		},
		secondary: {
			main: "#CF9F3B",
		},
		success: {
			main: "rgb(37, 155, 37)",
		},
		error: {
			main: "rgb(255, 67, 67)",
		},
	},
	typography: {
		allVariants: {
			fontFamily: "DM Sans",
		},
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
				margin: "dense",
				fullWidth: true,
			},
			styleOverrides: {
				root: {
					borderRadius: "8px",

					// border: '1px solid rgba(255, 255, 255, 0.1)',
					// color: '#fff',
					// '& .MuiOutlinedInput-root': {
					//   '& fieldset': {
					//     borderColor: '#fff',
					//   },
					//   '&:hover fieldset': {
					//     borderColor: '#fff',
					//   },
					//   '&.Mui-focused fieldset': {
					//     borderColor: '#fff',
					//   },
					// },
				},
			},
		},
		// MuiInputBase: {
		// 	styleOverrides: {
		// 		root: {
		// 			borderRadius: "8px",
		// 		},
		// 		// input: {
		// 		// 	color: "#fff",
		// 		// },
		// 	},
		// },

		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "8px",
				},
			},
		},

		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: "24px",
					padding: "20px",
				},
			},
		},
	},
});
