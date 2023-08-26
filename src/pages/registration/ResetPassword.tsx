import { Button, TextField } from "@mui/material";
import styles from "../../styles/components/auth.module.scss";
import { mockResetPassword } from "../../mock";
import { AuthHeader, CustomInput } from "./Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const handleReset = () => {
		console.log("clicked");
		navigate({ pathname: "/" });
	};
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<AuthHeader
					title={mockResetPassword?.title}
					description={mockResetPassword?.description}
				/>
				<CustomInput name="newPassword" placeholder="New Password" 
				value={password}
				onChange={(e)=>{
					setPassword(e.target.value)
				}}
				/>
				<CustomInput name="confirmPassword" placeholder="Confirm Password" 
				value={passwordConfirm}
				onChange={(e)=>{
					setPasswordConfirm(e.target.value)
				}}
				/>
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					className={styles.actionBtn}
					sx={{ marginTop: "22px" }}
					onClick={handleReset}
				>
					Reset Password
				</Button>
			</div>
		</div>
	);
};

export default ResetPassword;
