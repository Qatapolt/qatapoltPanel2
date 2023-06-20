import { Box, Button, Typography } from "@mui/material";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { footballIcon, userIcon } from "../../assets/icons/indext";

interface TTitleWithIcon {
	icon?: string;
	title: string;
}
export const TitleWithIcon = ({ icon, title }: TTitleWithIcon) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
			}}
		>
			<img
				src={icon ? icon : userIcon}
				alt="user-icon"
				width={icon ? 12 : 23}
				height={icon ? 12 : 23}
			/>
			<Typography sx={{ marginLeft: "12px" }}>{title}</Typography>
		</Box>
	);
};
const columnsTrophyReq = [
	{
		Header: "Name",
		accessor: "name",
		Cell: (props: any) => {
			return <TitleWithIcon title={props.value} />;
		},
	},
	{
		Header: "Username",
		accessor: "username",
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Sport",
		accessor: "sport",
		Cell: (props: any) => {
			return <TitleWithIcon title={props.value} icon={footballIcon} />;
		},
	},
	{
		Header: "Phone Number",
		accessor: "phone",
	},
	{
		Header: () => {
			return null;
		},
		id: "custom",
		accessor: "sport",
		Cell: () => <Button variant="contained">Very Account</Button>,
	},
];
const TrophyRequests = () => {
	return (
		<div>
			<PageHeader title={"Trophy Requests"} />
			<ReactTable data={dataTrophyReq} columns={columnsTrophyReq} />
		</div>
	);
};

export default TrophyRequests;
