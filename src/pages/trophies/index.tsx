import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/header/inext";
import SearchInput from "../../components/search";
import { dataTrophyReq, defaultColumns } from "../../mock/tablesMock";
import ReactTable from "../../components/table";
import { TitleWithIcon } from "../trophyRequest";
import {
  closeIcon,
  footballIcon,
  menuIcon,
  switchCupIcon,
  toogleIconOff,
  toogleIconOn,
} from "../../assets/icons/indext";
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  SwitchProps,
  styled,
} from "@mui/material";
import { db, collection, getDocs } from "../../database/firebaseConfig";
import Loader from "react-js-loader";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore/lite";

// const CustomSwitch = styled((props: SwitchProps) => (
// 	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
// 	width: 58,
// 	height: 26,
// 	padding: 0,
// 	"& .MuiSwitch-switchBase": {
// 		padding: 0,
// 		margin: 2,
// 		transitionDuration: "300ms",
// 		"&.Mui-checked": {
// 			transform: "translateX(16px)",
// 			color: "#fff",
// 			"& .MuiSwitch-thumb:before": {
// 				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
// 					"#fff"
// 				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
// 			},
// 			"& + .MuiSwitch-track": {
// 				backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
// 				opacity: 1,
// 				border: 0,
// 			},
// 			"&.Mui-disabled + .MuiSwitch-track": {
// 				opacity: 0.5,
// 			},
// 		},
// 		"&.Mui-focusVisible .MuiSwitch-thumb": {
// 			color: "#33cf4d",
// 			border: "6px solid #fff",
// 		},
// 		"&.Mui-disabled .MuiSwitch-thumb": {
// 			color:
// 				theme.palette.mode === "light"
// 					? theme.palette.grey[100]
// 					: theme.palette.grey[600],
// 		},
// 		"&.Mui-disabled + .MuiSwitch-track": {
// 			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
// 		},
// 	},
// 	"& .MuiSwitch-thumb": {
// 		boxSizing: "border-box",
// 		width: 22,
// 		height: 22,
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			width: "100%",
// 			height: "100%",
// 			left: 0,
// 			top: 0,
// 			backgroundRepeat: "no-repeat",
// 			backgroundPosition: "center",
// 			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
// 				"#fff"
// 			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
// 		},
// 	},
// 	"& .MuiSwitch-track": {
// 		borderRadius: 26 / 2,
// 		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
// 		opacity: 1,
// 		transition: theme.transitions.create(["background-color"], {
// 			duration: 500,
// 		}),
// 	},
// }));

// const CustomSwitch = styled(Switch)(({ theme }) => ({
// 	width: 62,
// 	height: 34,
// 	padding: 7,
// 	"& .MuiSwitch-switchBase": {
// 		margin: 1,
// 		padding: 0,
// 		transform: "translateX(6px)",
// 		"&.Mui-checked": {
// 			color: "#fff",
// 			transform: "translateX(22px)",
// 			"& .MuiSwitch-thumb:before": {
// 				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
// 					"#fff"
// 				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
// 			},
// 			"& + .MuiSwitch-track": {
// 				opacity: 1,
// 				backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
// 			},
// 		},
// 	},
// 	"& .MuiSwitch-thumb": {
// 		backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
// 		width: 32,
// 		height: 32,
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			width: "100%",
// 			height: "100%",
// 			left: 0,
// 			top: 0,
// 			backgroundRepeat: "no-repeat",
// 			backgroundPosition: "center",
// 			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
// 				"#fff"
// 			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
// 		},
// 	},
// 	"& .MuiSwitch-track": {
// 		opacity: 1,
// 		backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
// 		borderRadius: 20 / 2,
// 	},
// }));

const Trophies = () => {
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
		  Cell: (props: any) => (props.value ? props.value : "NON"),
		},
		{
		  Header: "Email",
		  accessor: "email",
		  Cell: (props: any) => (props.value ? props.value : "NON"),
		},
		{
		  Header: "Sport",
		  accessor: "selectSport",
		  Cell: (props: any) => {
			return (
			  <TitleWithIcon
				title={props.value ? props.value : "NON"}
				icon={footballIcon}
			  />
			);
		  },
		},
		{
		  Header: "Phone Number",
		  accessor: "phoneNumber",
		  Cell: (props: any) => (props.value ? props.value : "NON"),
		},
		{
		  Header: "Actions",
		  // id: "custom",
		  accessor: "uid",
		  Cell: (props: any) => {
			return users.find((u:any)=>u.uid==props.value)?.trophy !== "verified"? (
			  <div className="flexTrofies">
				{/* <img src={toogleIconOff} alt="off" /> */}
				{/* <Switch defaultChecked color="primary" size="medium" /> */}
				<Button
				  variant="contained"
				  sx={{ borderRadius: "20px", marginLeft: "12px" }}
				  onClick={async()=>{
				  
					await setDoc(
						doc(db, "users", props.value),
						{
						  // ...user,
						  trophy: "verified",
						},
						{ merge: true }
					  )
						.then(() => window.location.reload())
					.catch((e) => alert(e));
				
			  }}
				>
				  Enable Trophy
				</Button>
			  </div>
			) : (
			  <Box sx={{ textAlign: "center" }}>
				{/* <img src={toogleIconOn} alt="off" /> */}
				<Switch defaultChecked color="secondary" size="medium" onClick={async()=>{
				  
					  await setDoc(
						  doc(db, "users", props.value),
						  {
							// ...user,
							trophy: "unverified",
						  },
						  { merge: true }
						)
						  .then(() => window.location.reload())
					  .catch((e) => alert(e));
				  
				}} />
				{/* <CustomSwitch sx={{ m: 1 }} defaultChecked /> */}
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
  const [users, setUsers] = useState<any>([]);
  const [usersFilter, setUsersFilter] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  async function getUsers(db: any) {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    console.log("users", usersList);
	let data = usersList.filter((u:any)=>u?.trophy)
    setUsers(data);
    setUsersFilter(data);
	setLoader(false)
  }
  const onSearch = (e: any) => {
    setUsersFilter(
      users.filter(
        (u: any) =>
          u.name.includes(e.target.value) ||
          u.username.includes(e.target.value) ||
          u.email.includes(e.target.value)
      )
    );
    console.log(usersFilter.length);
  };
  useEffect(() => {
	setLoader(true)
    getUsers(db);
  }, []);
  return (
    <div>
      <PageHeader title="Trohpies">
		  <SearchInput onSearch={onSearch} />
		  </PageHeader>
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
      <ReactTable data={usersFilter} columns={columnsTrophies} />
    </div>
  );
};

export default Trophies;
