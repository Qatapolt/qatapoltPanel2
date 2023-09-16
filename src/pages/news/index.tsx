import { PageHeader } from "../../components/header/inext";
import { Button, Grid, IconButton } from "@mui/material";
import NewsCard from "../../components/card/NewsCard";
import { mockNews } from "../../mock";
import { Add } from "@mui/icons-material";
import AddNewsModal from "../../components/modals/AddNewsModal";
import { useEffect, useState } from "react";
import { db } from "../../database/firebaseConfig";
import { collection, getDocs,  } from "firebase/firestore/lite"; 

// interface newsProps {
// 	title: string;
// 	subTitle: string;
// 	description: string;
// 	image: string;
//   }

const News = () => {
	const [open, setOpen] = useState(false);
	const [newsList, setNewsList] = useState<any>([])
	
	async function getNews(db:any) {
		const newsCol = collection(db, 'news');
		const newsSnapshot = await getDocs(newsCol);
		const newsList = newsSnapshot.docs.map(doc => {
			let data =doc.data();
			let id =doc.id

			return{...data,id}
		});
		console.log('news',newsList)
		setNewsList(newsList)
	}
	useEffect(() => {
		getNews(db)
	  }, [])
	const handleClose = () => {
		setOpen(!open);
	};
	return (
		<div>
			<PageHeader title="Qatapolt News">
				<Button variant="contained" onClick={() => setOpen(true)}>
					<IconButton sx={{ color: "#fff" }}>
						<Add />
					</IconButton>
					Add News
				</Button>
			</PageHeader>
			<Grid container spacing={3}>
				{newsList.map(({ title, description,image,id }:any, index:any) => (
					<NewsCard key={index} title={title} image={image} id={id} description={description} />
				))}
			</Grid>
			<AddNewsModal open={open} handleClose={handleClose} />
		</div>
	);
};

export default News;
