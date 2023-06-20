import React from "react";
import { PageHeader } from "../../components/header/inext";
import ReportCard from "../../components/card/ReportCard";
import { Button, Grid } from "@mui/material";

const ReportedUser = () => {
	return (
		<div>
			<PageHeader title="Reported User">
				<Button>Completed</Button>
			</PageHeader>
			<Grid container spacing={3}>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
					<ReportCard key={item} />
				))}
			</Grid>
		</div>
	);
};

export default ReportedUser;
