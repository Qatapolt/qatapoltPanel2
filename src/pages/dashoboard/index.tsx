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
const Dashboard = () => {
	return (
		<>
			<Grid container spacing={3}>
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

			<Grid container spacing={3} marginTop={2}>
				<Grid item xs={12} md={8}>
					<Card>
						<Typography>Map View</Typography>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						{lineSliderMock.map(({ total, name, percentage, color }) => (
							<LineSlider
								total={total}
								name={name}
								percentage={percentage}
								key={total}
							/>
						))}
					</Card>
				</Grid>
			</Grid>

			<Grid container marginTop={2} spacing={3}>
				{/* <Grid item xs={12} md={8}>
					<Card>
						<ReactTable />
					</Card>
				</Grid> */}
				<Grid item xs={12} md={4}>
					<Card>
						<div className={styles.dashboardFlex}>
							{circularSliderMock.map(({ title, percentage, color }) => (
								<CircularSlider
									percentage={percentage}
									title={title}
									key={title}
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
								/>
							))}
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
