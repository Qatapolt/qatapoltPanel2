import { Button } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockSendEmail } from "../../mock";
import { AuthHeader, CustomInput } from "./Login";

const SendEmail = () => {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockSendEmail?.title}
					description={mockSendEmail?.description}
				/>
				<CustomInput name="Enter Email" placeholder="Enter Email" />
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={`${styles.actionBtn} `}
					sx={{ marginTop: "22px" }}
				>
					Reset Password
				</Button>
			</div>
		</div>
	);
};

export default SendEmail;
