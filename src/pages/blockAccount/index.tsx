import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { Button } from "@mui/material";
import { TitleWithIcon } from "../trophyRequest";
import { closeIcon, deleteIcon, footballIcon } from "../../assets/icons/indext";
import {db,collection,getDocs} from "../../database/firebaseConfig"

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
		Cell: (props: any) => (
			props.value?props.value:"NON"
		)
	},
	{
		Header: "Email",
		accessor: "email",
		Cell: (props: any) => (
			props.value?props.value:"NON"
		)
	},
	{
		Header: "Sport",
		accessor: "sport",
		Cell: (props: any) => {
			return <TitleWithIcon title={props.value?props.value:"NON"} icon={footballIcon} />;
		},
	},
	{
		Header: "Phone Number",
		accessor: "phone",
		Cell: (props: any) => (
			props.value?props.value:"NON"
		)
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
	const [users, setUsers] = useState<any>([])

	async function getUsers(db:any) {
		const usersCol = collection(db, 'users');
		const usersSnapshot = await getDocs(usersCol);
		const usersList = usersSnapshot.docs.map(doc => doc.data());
		console.log('users',usersList)
		setUsers(usersList)
	}
	useEffect(() => {
		getUsers(db)
	  }, [])
	return (
		<>
			<PageHeader title={"Block Accounts"} />
			<ReactTable data={users} columns={columnsBlockAccount} />
		</>
	);
};

export default BlockedAccount;
