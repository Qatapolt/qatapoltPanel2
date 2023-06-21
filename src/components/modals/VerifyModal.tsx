import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { IdCard, imgFrame, userIcon } from "../../assets/icons/indext";
import styles from "../../styles/components/modal.module.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

interface TVerifyTitle {
	title: string;
	desc: string;
}
const VerfiyTitle = ({ title, desc }: TVerifyTitle) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: "10px",
			}}
		>
			<Typography className={styles.verifyTitle}>{title}</Typography>
			<Typography className={styles.verifyDesc}>{desc}</Typography>
		</Box>
	);
};

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

function Title(props: DialogTitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

interface TAddNewsModal {
	open: boolean;
	handleClose: () => void;
}

export default function VerifyModal({ open, handleClose }: TAddNewsModal) {
	const [isProfile, setIsProfile] = React.useState(false);
	const handleUserProfile = () => {
		setIsProfile(!isProfile);
	};
	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={open}
			sx={{ borderRadius: "24px" }}
			className="newsDialog"
		>
			<Title id="customized-dialog-title" onClose={handleClose} />

			<DialogContent>
				<div className={styles.userProfile}>
					<img src={userIcon} alt="verify-icon" width={67} height={67} />
					<Typography>Alex jordan</Typography>
					<Typography>example@gmail.com</Typography>
				</div>
				<Box>
					<VerfiyTitle title="Username" desc="Alexjordan" />
					<VerfiyTitle title="Supporting" desc="Football" />
					<VerfiyTitle title="Phone number" desc="+44 123 456 798" />
				</Box>

				<Box sx={{ mb: 1 }}>
					<Typography className={styles.verifyTitle}>Descriptions</Typography>
					<Typography className={styles.verifyDesc}>
						Lorem ipsum dolor sit amet consectetur. Pulvinar pharetra faucibus
						auctor risus. Ipsum id eget dolor urna at aenean ligula.
					</Typography>
				</Box>

				<Box className={styles.verifyMedia}>
					<img src={IdCard} alt="id1" />
					<img src={IdCard} alt="id2" />
				</Box>
			</DialogContent>

			<div className="addNewsBtn">
				<Button onClick={handleClose} fullWidth>
					Verify Account
				</Button>
				<Button onClick={handleClose} fullWidth variant="text">
					Delete Request
				</Button>
			</div>
		</BootstrapDialog>
	);
}
