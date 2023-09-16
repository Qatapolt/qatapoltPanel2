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
import { deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import { db } from "../../database/firebaseConfig";

interface TNewsCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const NewsCard = ({ title, description ,image,id}: TNewsCard) => {
  const delNews = async () => {
    const newsRef = doc(db, "news", id);

    // Set the "capital" field of the city 'DC'
    await deleteDoc(newsRef)
	.then(()=>window.location.reload())
		.catch((e)=>alert(e))
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.newsCard}>
        <Box className={styles.newsMedia}>
          <CardMedia component="img" image={image} alt="cover" />
          <div className={styles.newsAction}>
            <img src={newsEditBtn} alt="edit-btn" className={styles.editBtn} />
            <img src={newsTrashBtn} alt="trash-btn" onClick={delNews} />
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
