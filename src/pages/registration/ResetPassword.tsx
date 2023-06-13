import { Button, TextField } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockResetPassword } from "../../mock";
import { AuthHeader } from "./Login";

const ResetPassword = () => {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockResetPassword?.title}
					description={mockResetPassword?.description}
				/>
				<TextField name="newPassword" placeholder="New Password" />
				<TextField name="confirmPassword" placeholder="Confirm Password" />
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={styles.actionBtn}
				>
					Reset Password
				</Button>
			</div>
		</div>
	);
};

export default ResetPassword;
