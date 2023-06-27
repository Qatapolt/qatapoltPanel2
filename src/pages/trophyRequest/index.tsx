import { Box, Button, Typography } from "@mui/material";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { footballIcon, userIcon } from "../../assets/icons/indext";
import { useCallback, useState } from "react";
import VerifyModal from "../../components/modals/VerifyModal";
import ImageModal from "../../components/modals/ImageModal";

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

const TrophyRequests = () => {
	const [openVerify, setOpenVerify] = useState(false);
	const [imageModal, setImageModal] = useState(false);
	const handleVerify = () => {
		setOpenVerify(!openVerify);
	};

	const handleImgModal = useCallback(() => {
		setImageModal(true);
	}, []);

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
			Cell: () => (
				<Button variant="contained" onClick={handleVerify}>
					Very Account
				</Button>
			),
		},
	];

	return (
		<div>
			<PageHeader title={"Trophy Requests"} />
			<ReactTable data={dataTrophyReq} columns={columnsTrophyReq} />

			{openVerify && (
				<VerifyModal
					open={openVerify}
					handleClose={() => setOpenVerify(false)}
					handleImgModal={handleImgModal}
				/>
			)}

			{imageModal && (
				<ImageModal
					open={imageModal}
					handleClose={() => setImageModal(false)}
				/>
			)}
		</div>
	);
};

export default TrophyRequests;
