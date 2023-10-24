import { PageHeader } from "../../components/header/inext";
import ReportCard from "../../components/card/ReportCard";
import { Button, Grid } from "@mui/material";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../database/firebaseConfig";
import Loader from "react-js-loader";

const Enquiries = () => {
	const [contactUs, setContactUs] = useState<any>([])
	const [loader, setLoader] = useState(false);


	async function getContactUs(db: any) {
		const reportsCol = collection(db, "contactUs");
		const reportsSnapshot = await getDocs(reportsCol);
		const reportsList = reportsSnapshot.docs.map((doc) => {
		  let data = doc.data();
		  let id = doc.id;
	
		  return { ...data, id };
		});
		console.log("contactUs", reportsList);
		setContactUs(reportsList);
		setLoader(false)
	  }

	  useEffect(() => {
		setLoader(true);
		getContactUs(db);
	  }, []);
	return (
		<div>
			<PageHeader title="Enquiries">
				<Button>Completed</Button>
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
			<Grid container spacing={3}>
				{contactUs.map((item:any, index:any) => (
					<ReportCard report={item} isEnquiries={true} key={index} />
				))}
			</Grid>
		</div>
	);
};

export default Enquiries;
