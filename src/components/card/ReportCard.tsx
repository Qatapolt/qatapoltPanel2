import { Box, Button, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import { userIcon } from "../../assets/icons/indext";


interface TReportCard {
	isEnquiries?: boolean;
	report:any;
}
const ReportCard = ({ isEnquiries=false,report }: TReportCard) => {
	const UserTitle = ({username,email}:any) => {
		return (
			<div className="flexStart">
				<img src={userIcon} alt="icon-user" width={48} height={48} />
				<div className="flexCenter">
					<Typography className="title">{username}</Typography>
					<Typography className="subTitle" fontSize={12}>{email}</Typography>
				</div>
			</div>
		);
	};
	// const ru=users.find((u:any)=>report?.reportedUserId===u.id)
	// const ro=users.find((u:any)=>report?.reportedOn===u.id)
	return (
		<Grid item xs={12} sm={6} md={3}>
			<Card>
				<UserTitle username={isEnquiries ? report?.name:report?.reportedUser?.username} email={isEnquiries ?report?.email:report?.reportedUser?.email}/>
				<Box component={"div"}>
					<div className="category common">
						<Typography className="reportTitle">
							{isEnquiries ? `Username` : `Category`}
						</Typography>
						{isEnquiries ? (
							<Typography className="subTitle">{report?.username}</Typography>
						) : (
							<Button
								variant="contained"
								color="secondary"
								sx={{ color: "white" }}
							>
								
								{report.category}
							</Button>
						)}
					</div>

					<div className="description common">
						<Typography className="reportTitle">
							{isEnquiries ? `Message` : `Reason`}
						</Typography>
						<Typography className="subTitle">
						{isEnquiries ?report?.message:report.reason}
						</Typography>
					</div>

					<div className="date common">
						<Typography className="reportTitle">Date</Typography>
						<Typography className="subTitle">{moment(report?.date?.seconds).utc().format("DD MMM yy")}</Typography>
						{/* <Typography className="subTitle">{moment(report?.date).toString()}</Typography> */}
					</div>
					{!isEnquiries && (
						<div className="reportedOn common">
							<Typography className="reportTitle reportOn">
								Reported on
							</Typography>
							<UserTitle username={report?.reportedOn?.username} email={report?.reportedOn?.email} />
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
