import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { Button } from "@mui/material";
import { TitleWithIcon } from "../trophyRequest";
import { closeIcon, deleteIcon, footballIcon } from "../../assets/icons/indext";
import {db,collection,getDocs,} from "../../database/firebaseConfig"
import { setDoc ,doc} from "firebase/firestore/lite";
import Loader from "react-js-loader";

const BlockedAccount = () => {
	const [loader, setLoader] = useState(false);
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
			accessor: "selectSport",
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
			Header: "status",
			accessor: "status",
			Cell: (props: any) => (
				// props.value?"Unblock":"Active"
				props.value?props.value:"Active"
			)
		},
		{
			Header: () => "Action",
			accessor:"uid",
			id: "custom",
			Cell: (props:any) => <img src={closeIcon} onClick={()=>{
				if ("Are You Sure!") {
					blockUser(props.value);
				  }
			}} alt="del-icon" className="pointer" />,
		},
	];
	const [users, setUsers] = useState<any>([])

	async function getUsers(db:any) {
		const usersCol = collection(db, 'users');
		const usersSnapshot = await getDocs(usersCol);
		const usersList = usersSnapshot.docs.map(doc => doc.data());
		console.log('users',usersList)
		setUsers(usersList)
		setLoader(false)
	}
	const blockUser=async(id:any)=>{
		await setDoc(doc(db, "users", id), {
			...users.find((u:any)=>u.uid===id),status:'blocked',
		  }, { merge: true }).then(() => window.location.reload())
		  .catch((e) => alert(e));
	}
	useEffect(() => {
		setLoader(true)
		getUsers(db)
	  }, [])
	return (
		<>
			<PageHeader title={"Block Accounts"} />
			{loader ? (
        <div style={{ position: "absolute", top: "45%", left: "50%" }}>
        <Loader
          type="spinner-circle"
          bgColor={"#1928"}
          // title={"spinner-circle"}
          // color={"#9182"}
          size={100}
        />
		</div>
      ) : (
        <></>
      )}
			<ReactTable data={users} columns={columnsBlockAccount} />
		</>
	);
};

export default BlockedAccount;
