import { PageHeader } from "../../components/header/inext";
import ReactTable from "../../components/table";
import { dataTrophyReq } from "../../mock/tablesMock";
import { TitleWithIcon } from "../trophyRequest";
import { deleteIcon, footballIcon } from "../../assets/icons/indext";
import SearchInput from "../../components/search";

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
		Cell: () => <img src={deleteIcon} alt="del-icon" className="pointer" />,
	},
];
const DeletedAccount = () => {
	return (
		<>
			<PageHeader title={"Deleted Accounts"}>
				<SearchInput />
			</PageHeader>
			<ReactTable data={dataTrophyReq} columns={columnsDeletedAccount} />
		</>
	);
};

export default DeletedAccount;
