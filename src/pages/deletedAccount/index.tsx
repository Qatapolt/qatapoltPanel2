import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { TitleWithIcon } from "../trophyRequest";
import { deleteIcon, footballIcon } from "../../assets/icons/indext";
import SearchInput from "../../components/search";
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../database/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import Loader from "react-js-loader";

const DeletedAccount = () => {
	const [loader, setLoader] = useState(false);

  const columnsDeletedAccount = [
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
      accessor: "phone",
      Cell: (props: any) => (props.value ? props.value : "NON"),
    },
    {
      Header: () => {
        return null;
      },
      accessor: "uid",
      Cell: (props: any) => (
        <img
          src={deleteIcon}
          onClick={() => {
            if (confirm('Are You Sure!')) {
              delUser(props.value);
            }
          }}
          alt="del-icon"
          className="pointer"
        />
      ),
    },
  ];
  const [users, setUsers] = useState<any>([]);
  const [usersFilter, setUsersFilter] = useState<any>([]);

//   const [id, setId] = useState<any>("");

  async function getUsers(db: any) {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    console.log("users", usersList);
    setUsers(usersList);
    setUsersFilter(usersList);
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
  const delUser = async (id:any) => {
    const userRef = doc(db, "users", id);

    // Set the "capital" field of the city 'DC'
    await deleteDoc(userRef)
      .then(() => window.location.reload())
      .catch((e) => alert(e));
  };
  useEffect(() => {
	setLoader(true)
    getUsers(db);
  }, []);
  return (
    <>
      <PageHeader title={"Deleted Accounts"}>
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
      <ReactTable data={usersFilter} columns={columnsDeletedAccount} />
    </>
  );
};

export default DeletedAccount;
