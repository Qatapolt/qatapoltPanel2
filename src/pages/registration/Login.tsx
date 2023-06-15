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

const Login = () => {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockLogin?.title}
					description={mockLogin?.description}
				/>
				<TextField name="email" placeholder="Enter Email" />
				<TextField
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
				>
					Login
				</Button>
				<InputLabel className={styles.forgotPassword}>
					Forgotten Password?
				</InputLabel>
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
