import { PageHeader } from "../../components/header/inext";
import { Button, Grid, IconButton } from "@mui/material";
import NewsCard from "../../components/card/NewsCard";
import { mockNews } from "../../mock";
import { Add } from "@mui/icons-material";
import AddNewsModal from "../../components/modals/AddNewsModal";
import { useState } from "react";

const News = () => {
	const [open, setOpen] = useState(false);

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
				{mockNews.map(({ title, description }, index) => (
					<NewsCard key={index} title={title} description={description} />
				))}
			</Grid>
			<AddNewsModal open={open} handleClose={handleClose} />
		</div>
	);
};

export default News;
