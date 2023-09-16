import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/header/inext";
import ReportCard from "../../components/card/ReportCard";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { db } from "../../database/firebaseConfig";
import { collection, getDocs,  } from "firebase/firestore/lite"; 

const ReportedUser = () => {
	const [day, setDay] = useState("");
	const [reportsList, setReportsList] = useState<any>([])
	const [reportsListNew, setReportsListNew] = useState<any>([])
	const [users, setUsers] = useState<any>([])

	async function getUsers(db:any) {
		const usersCol = collection(db, 'users');
		const usersSnapshot = await getDocs(usersCol);
		const usersList = usersSnapshot.docs.map(doc => {
			let data =doc.data();
			let id =doc.id
			
			return{...data,id}
		});
		console.log('users',usersList)
		setUsers(usersList)
	}
	async function getReports(db:any) {
		const reportCol = collection(db, 'reportUsers');
		const reportSnapshot = await getDocs(reportCol);
		const reportList = reportSnapshot.docs.map(doc => {
			let data =doc.data();
			let id =doc.id
			
			return{...data,id}
		});
		console.log('reports',reportList)
		setReportsList(reportList)
	}
	useEffect(() => {
	}, [])
	useEffect(() => {
	}, [])
	// useEffect(() => {
	// 	getReports(db)
	// 	getUsers(db)
	// 	let data:any=[];
	// 	reportsList.map((r:any)=>{
	// 		let ro = users.find((u:any)=>r?.reportedOn===u.id)
	// 		let ru = users.find((u:any)=>r?.reportedUserId===u.id)
	// 		data.push({...r,reportedOn:ro,reportedUser:ru})
	// 	})
	// 	setReportsListNew(data)
	//   }, [])

	const handleChange = (event: SelectChangeEvent) => {
		setDay(event.target.value);
	};
	return ( 
		<div>
			<PageHeader title="Reported User">
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button>Completed</Button>
					<FormControl
						sx={{
							m: 1,
							minWidth: 120,
							background: "#233F35",
							borderRadius: "8px",
						}}
						variant="outlined"
						size="small"
					>
						<InputLabel id="demo-select-small-label" sx={{ color: "#fff" }}>
							All
						</InputLabel>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							value={day}
							label="Age"
							onChange={handleChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</PageHeader>
			<Grid container spacing={3}>
				{reportsList.map((item:any,index:any) => (
					<ReportCard report={item} users={users} key={index}  />
				))}
			</Grid>
		</div>
	);
};

export default ReportedUser;
