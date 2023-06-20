import React from "react";
import { PageHeader } from "../../components/header/inext";
import SearchInput from "../../components/search";
import { dataTrophyReq, defaultColumns } from "../../mock/tablesMock";
import ReactTable from "../../components/table";
import { TitleWithIcon } from "../trophyRequest";
import {
	closeIcon,
	footballIcon,
	menuIcon,
	toogleIconOff,
	toogleIconOn,
} from "../../assets/icons/indext";
import { Box, Button } from "@mui/material";

const columnsTrophies = [
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
		Header: "Actions",
		id: "custom",
		accessor: "action",
		Cell: (props: any) => {
			return props.value % 2 === 1 ? (
				<div className="flexTrofies">
					<img src={toogleIconOff} alt="off" />
					<Button
						variant="contained"
						sx={{ borderRadius: "20px", marginLeft: "12px" }}
					>
						Enable Trophy
					</Button>
				</div>
			) : (
				<Box sx={{ textAlign: "center" }}>
					<img src={toogleIconOn} alt="off" />
				</Box>
			);
		},
	},
	{
		Header: () => {
			return null;
		},
		id: "menu",
		Cell: () => <img src={menuIcon} alt="del-icon" className="pointer" />,
	},
];
const Trophies = () => {
	return (
		<div>
			<PageHeader title="Trohpies">
				<SearchInput />
			</PageHeader>
			<ReactTable data={dataTrophyReq} columns={columnsTrophies} />
		</div>
	);
};

export default Trophies;
