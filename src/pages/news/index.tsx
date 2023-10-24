import { PageHeader } from "../../components/header/inext";
import { Button, Grid, IconButton } from "@mui/material";
import NewsCard from "../../components/card/NewsCard";
import { mockNews } from "../../mock";
import { Add } from "@mui/icons-material";
import AddNewsModal from "../../components/modals/AddNewsModal";
import { useEffect, useState } from "react";
import { db } from "../../database/firebaseConfig";
import { collection, getDocs,  } from "firebase/firestore/lite"; 
import Loader from "react-js-loader";

// interface newsProps {
// 	title: string;
// 	subTitle: string;
// 	description: string;
// 	image: string;
//   }

const News = () => {
	const [open, setOpen] = useState(false);
	const [newsList, setNewsList] = useState<any>([])
	const [loader, setLoader] = useState(false);
	const [users, setUsers] = useState<any>([])
	async function getUsers(db: any) {
		const usersCol = collection(db, "users");
		const usersSnapshot = await getDocs(usersCol);
		const usersList = usersSnapshot.docs.map((doc) => {
			let data=doc.data();
			return {
				label:data?.username?data?.username:'NON',
				id:data?.uid?data?.uid:'NON'
			};
		});
		console.log("users", usersList);
		setUsers(usersList);
		// setLoader(false)
	  }
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
		setLoader(false)
	}
	useEffect(() => {
		setLoader(true)
		getUsers(db)
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
			{loader ? (
        <div style={{ position: "absolute", top: "45%", left: "50%" }}>
        <Loader
          type="spinner-circle"
          bgColor={"#1928"}
          // title={"spinner-circle"}
          // color={"#9182"}
          size={100}
        />
		</div>
      ) : (
        <></>
      )}
			<Grid container spacing={3}>
				{newsList.map(({ title, description,image,id }:any, index:any) => (
					<NewsCard key={index} title={title} image={image} id={id} description={description} />
				))}
			</Grid>
			<AddNewsModal open={open} users={users} handleClose={handleClose} />
		</div>
	);
};

export default News;
