import { Button, TextField } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockResetPassword } from "../../mock";
import { AuthHeader, CustomInput } from "./Login";

const ResetPassword = () => {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockResetPassword?.title}
					description={mockResetPassword?.description}
				/>
				<CustomInput name="newPassword" placeholder="New Password" />
				<CustomInput name="confirmPassword" placeholder="Confirm Password" />
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={styles.actionBtn}
					sx={{ marginTop: "22px" }}
				>
					Reset Password
				</Button>
			</div>
		</div>
	);
};

export default ResetPassword;
