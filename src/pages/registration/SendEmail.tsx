import { Button } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockSendEmail } from "../../mock";
import { AuthHeader, CustomInput } from "./Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SendEmail = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')

	const handleReset = () => {
		console.log("clicked");
		navigate({ pathname: "/reset-password" });
	};

	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockSendEmail?.title}
					description={mockSendEmail?.description}
				/>
				<CustomInput name="Enter Email" placeholder="Enter Email" 
				value={email}
				onChange={(e)=>{
					setEmail(e.target.value)
				}}
				/>
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={`${styles.actionBtn} `}
					sx={{ marginTop: "22px" }}
					onClick={handleReset}
				>
					Reset Password
				</Button>
			</div>
		</div>
	);
};

export default SendEmail;
