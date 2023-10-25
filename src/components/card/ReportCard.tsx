import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { doc, setDoc } from "firebase/firestore/lite";
import moment from "moment";
import { userIcon } from "../../assets/icons/indext";
import { db } from "../../database/firebaseConfig";


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
	const handleComplete=async()=>{
		// alert(report.id)
		await setDoc(
			doc(db, isEnquiries?"contactUs":"reportUsers", report.id),
			{
			  // ...user,
			  status: "completed",
			},
			{ merge: true }
		  )
			.then(() => window.location.assign(window.location.href))
		.catch((e) => alert(e));
	}
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
					{report?.status=="completed"?
					<></>
				:
				<Button variant="contained" fullWidth className="common" onClick={handleComplete}>
						Complete
					</Button>
				}
					
				</Box>
			</Card>
		</Grid>
	);
};

export default ReportCard;
