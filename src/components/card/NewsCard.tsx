import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import styles from "../../styles/components/cards.module.scss";
import {
	newsEditBtn,
	newsImage,
	newsTrashBtn,
} from "../../assets/icons/indext";

interface TNewsCard {
	title: string;
	description: string;
}

const NewsCard = ({ title, description }: TNewsCard) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={styles.newsCard}>
				<Box className={styles.newsMedia}>
					<CardMedia component="img" image={newsImage} alt="cover" />
					<div className={styles.newsAction}>
						<img src={newsEditBtn} alt="edit-btn" className={styles.editBtn} />
						<img src={newsTrashBtn} alt="trash-btn" />
					</div>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" className={styles.title}>
							{title || "Heading"}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
							className={styles.description}
						>
							{description ||
								`Lorem ipsum dolor sit amet consectetur. Facilisis rutrum viverra
							bibendum lobortis sed. At congue non orci quis.`}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</Grid>
	);
};

export default NewsCard;
