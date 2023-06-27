import { Card, Grid, Typography } from "@mui/material";
import AnalyticalCard from "../../components/card/AnalyticalCard";
import {
	analyticCardMock,
	circularSliderMock,
	lineSliderMock,
} from "../../mock";
import { CircularSlider, LineSlider } from "../../components/slider";
import ReactTable from "../../components/table";
import styles from "../../styles/components/dashboard.module.scss";
import { TitleWithIcon } from "../trophyRequest";
import { footballIcon, menuIcon } from "../../assets/icons/indext";
import { dataTrophyReq } from "../../mock/tablesMock";
import { LineSliderHeader } from "../../components/header/inext";
import Map from "../../components/map/Map";
const columnsDashboard = [
	{
		Header: "Name",
		accessor: "name",
		Cell: (props: any) => {
			return <TitleWithIcon title={props.value} />;
		},
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Type",
		accessor: "sport",
		Cell: (props: any) => {
			return <TitleWithIcon title={props.value} icon={footballIcon} />;
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

const Dashboard = () => {
	return (
		<>
			<Grid container spacing={2}>
				{analyticCardMock.map(({ title, subTitle, icon }) => {
					return (
						<AnalyticalCard
							title={title}
							subTitle={subTitle}
							icon={icon}
							key={title}
						/>
					);
				})}
			</Grid>

			<Grid container spacing={2} marginTop={2}>
				<Grid item xs={12} md={8}>
					<Card>
						<Typography>Map View</Typography>
						<Map />
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<LineSliderHeader title="Users Breakdown" />
						{lineSliderMock
							.slice(0, 3)
							.map(({ total, name, percentage, color }) => (
								<LineSlider
									total={total}
									name={name}
									percentage={percentage}
									key={total}
									color={color}
								/>
							))}
					</Card>
				</Grid>
			</Grid>

			<Grid container marginTop={2} spacing={2}>
				<Grid item xs={12} md={8}>
					<ReactTable
						data={dataTrophyReq.slice(0, 3)}
						columns={columnsDashboard}
						title="Total Visitors"
						name="visitors"
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<div className={styles.dashboardFlex}>
							{circularSliderMock.map(({ title, percentage, color }) => (
								<CircularSlider
									percentage={percentage}
									title={title}
									key={title}
									color={color}
								/>
							))}
						</div>

						{lineSliderMock
							.slice(0, 2)
							.map(({ total, name, percentage, color }) => (
								<LineSlider
									total={total}
									name={name}
									percentage={percentage}
									key={total}
									color={color}
								/>
							))}
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
