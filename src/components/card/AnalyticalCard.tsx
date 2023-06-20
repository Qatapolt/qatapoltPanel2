import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import styles from "../../styles/components/cards.module.scss";

interface TAnalyticalCard {
	title: string;
	subTitle: string;
	icon: string;
}
const AnalyticalCard = ({ title, subTitle, icon }: TAnalyticalCard) => {
	return (
		<Grid item key={title} xs={12} sm={6} md={4}>
			<Card className={styles.analyticsCard}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" className={styles.title}>
							{title}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
							className={styles.subTitle}
						>
							{subTitle}
						</Typography>
					</CardContent>
				</Box>
				<CardMedia
					component="img"
					sx={{ width: 135 }}
					image={icon}
					alt="cover"
				/>
			</Card>
		</Grid>
	);
};

export default AnalyticalCard;
