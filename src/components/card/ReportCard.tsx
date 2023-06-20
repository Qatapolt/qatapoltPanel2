import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { userIcon } from "../../assets/icons/indext";

const UserTitle = () => {
	return (
		<div className="flexStart">
			<img src={userIcon} alt="icon-user" width={48} height={48} />
			<div className="flexCenter">
				<Typography className="title">Alex Jordan</Typography>
				<Typography className="subTitle">example@gmail.com</Typography>
			</div>
		</div>
	);
};

interface TReportCard {
	isEnquiries?: boolean;
}
const ReportCard = ({ isEnquiries }: TReportCard) => {
	return (
		<Grid item xs={12} sm={6} md={3}>
			<Card>
				<UserTitle />
				<Box component={"div"}>
					<div className="category common">
						<Typography className="reportTitle">
							{isEnquiries ? `Username` : `Category`}
						</Typography>
						{isEnquiries ? (
							<Typography className="subTitle">alexjordan</Typography>
						) : (
							<Button
								variant="contained"
								color="secondary"
								sx={{ color: "white" }}
							>
								Discriminatory Behaviour
							</Button>
						)}
					</div>

					<div className="description common">
						<Typography className="reportTitle">
							{isEnquiries ? `Message` : `Reason`}
						</Typography>
						<Typography className="subTitle">
							Lorem ipsum dolor sit amet consectetur. Duis amet massa eu quisque
							netus sed.
						</Typography>
					</div>

					<div className="date common">
						<Typography className="reportTitle">Date</Typography>
						<Typography className="subTitle">06 jun 2023</Typography>
					</div>
					{!isEnquiries && (
						<div className="reportedOn common">
							<Typography className="reportTitle reportOn">
								Reported on
							</Typography>
							<UserTitle />
						</div>
					)}
					<Button variant="contained" fullWidth className="common">
						Complete
					</Button>
				</Box>
			</Card>
		</Grid>
	);
};

export default ReportCard;
