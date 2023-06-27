import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import {
	IdCard,
	crossIcon,
	imgFrame,
	userIcon,
} from "../../assets/icons/indext";
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
						color: (theme) => theme.palette.primary.main,
					}}
				>
					<img src={crossIcon} alt="cross" />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

interface TAddNewsModal {
	open: boolean;
	handleClose: () => void;
}

export default function ImageModal({ open, handleClose }: TAddNewsModal) {
	const [isProfile, setIsProfile] = React.useState(false);

	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={open}
			sx={{ borderRadius: "24px" }}
			className="newsDialog"
		>
			<Title id="customized-dialog-title" onClose={handleClose}>
				Documents
			</Title>

			<DialogContent>
				<Box>
					<img src={IdCard} alt="id1" width={"100%"} height={"280px"} />
				</Box>
				<Box className={styles.verifyMedia}>
					<img src={IdCard} alt="id1" className="img-selected" />
					<img src={IdCard} alt="id2" />
				</Box>
			</DialogContent>
		</BootstrapDialog>
	);
}
