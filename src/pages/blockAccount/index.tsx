import React from "react";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { Button } from "@mui/material";
import { TitleWithIcon } from "../trophyRequest";
import { closeIcon, deleteIcon, footballIcon } from "../../assets/icons/indext";

const columnsBlockAccount = [
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
		Cell: () => <img src={closeIcon} alt="del-icon" className="pointer" />,
	},
];
const BlockedAccount = () => {
	return (
		<>
			<PageHeader title={"Block Accounts"} />
			<ReactTable data={dataTrophyReq} columns={columnsBlockAccount} />
		</>
	);
};

export default BlockedAccount;
