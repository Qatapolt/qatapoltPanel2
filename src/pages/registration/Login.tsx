import {
	Button,
	InputAdornment,
	InputLabel,
	TextField,
	Typography,
} from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { appLogo } from "../../assets/icons/indext";
import { TAuthHeader } from "../../types";
import { mockLogin } from "../../mock";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

export const CustomInput = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#fff",
		},
		"&:hover fieldset": {
			borderColor: "#fff",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#fff",
		},
	},

	input: {
		color: "#fff",
		borderRadius: "8px",
	},
});

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate({ pathname: "/" });
	};
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockLogin?.title}
					description={mockLogin?.description}
				/>
				<CustomInput name="email" placeholder="Enter Email" />
				<CustomInput
					name="password"
					placeholder="Password"
					InputProps={{
						endAdornment: (
							<InputAdornment
								position="end"
								className={styles.passwordHideShow}
							>
								<Typography color={"#fff"}>Hide</Typography>
							</InputAdornment>
						),
					}}
				/>
				<InputLabel className={styles.passwordGuid}>
					Password must be at least 8 characters long
				</InputLabel>
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={styles.actionBtn}
					onClick={handleLogin}
				>
					Login
				</Button>
				<Link to="/send-email">
					<InputLabel className={styles.forgotPassword}>
						Forgotten Password?
					</InputLabel>
				</Link>
			</div>
		</div>
	);
};

export default Login;

export const AuthHeader = ({ title, description }: TAuthHeader) => {
	return (
		<>
			<div className={styles.logoIcon}>
				<img src={appLogo} alt="app_logo" />
			</div>
			<div className={styles.loginHeader}>
				<Typography className={styles.title}>{title}</Typography>
				<Typography className={styles.description}>{description}</Typography>
			</div>
		</>
	);
};
