import { Box, Button, Typography } from "@mui/material";
import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { footballIcon, userIcon } from "../../assets/icons/indext";
import { useCallback, useEffect, useState } from "react";
import VerifyModal from "../../components/modals/VerifyModal";
import ImageModal from "../../components/modals/ImageModal";
import { db, collection, getDocs } from "../../database/firebaseConfig";
import Loader from "react-js-loader";

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
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState<any>({});

  async function getUsers(db: any) {
    const usersCol = collection(db, "TrophyRequest");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => {
      let data = doc.data();
      let id = doc.id;

      return { ...data, id };
    });
    console.log("users", usersList);
	let data = usersList.filter((u:any)=>!u?.trophy)
    setUsers(data);
    setLoader(false);
  }
  useEffect(() => {
    setLoader(true);
    getUsers(db);
  }, []);
  const handleVerify = (id: any) => {
    let r = users.find((u: any) => u.id == id);
    setOpenVerify(!openVerify);
    setUser(r);
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
      Cell: (props: any) => (props.value ? props.value : "NON"),
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: (props: any) => (props.value ? props.value : "NON"),
    },
    {
      Header: "Sport",
      accessor: "sport",
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
      Header: () => {
        return null;
      },
      // id: "id",
      accessor: "id",
      Cell: (props: any) => (
        <Button variant="contained" onClick={() => handleVerify(props.value)}>
          Very Account
        </Button>
      ),
    },
  ];

  return (
    <div>
		<PageHeader title={"Trophy Requests"} />
      {loader ? (
        <Loader
          type="spinner-circle"
          bgColor={"#1928"}
          // title={"spinner-circle"}
          // color={"#9182"}
          size={100}
        />
      ) : (
        <></>
      )}
      <ReactTable data={users} columns={columnsTrophyReq} />

      {openVerify && (
        <VerifyModal
          open={openVerify}
          handleClose={() => setOpenVerify(false)}
          handleImgModal={handleImgModal}
          user={user}
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
