import { Button, TextField } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockSendEmail } from "../../mock";
import { AuthHeader } from "./Login";

const SendEmail = () => {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockSendEmail?.title}
					description={mockSendEmail?.description}
				/>
				<TextField name="Enter Email" placeholder="Enter Email" />
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

export default SendEmail;
