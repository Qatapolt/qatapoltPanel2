import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "../../styles/components/header.module.scss";

interface TPageHeader {
	title: string;
	children?: ReactNode;
}
const PageHeader = ({ title, children }: TPageHeader) => {
	return (
		<Box className={styles.headerMain}>
			<Typography className={styles.headerTitle}>{title}</Typography>
			<Box>{children}</Box>
		</Box>
	);
};

export { PageHeader };
