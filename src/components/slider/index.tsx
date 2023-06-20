import { Box, CircularProgress, Slider, Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "../../styles/components/slider.module.scss";

interface TLineSlider {
	total: string;
	name: string;
	percentage: number | string;
	color?: string;
}

interface TCircularProgress {
	percentage: number;
	title?: string;
}
const LineSlider = ({ total, name, percentage, color }: TLineSlider) => {
	return (
		<div className={styles.sliderMain}>
			<Typography className={styles.title}>{total}</Typography>
			<div className={styles.sliderTitle}>
				<Typography component={"div"} className={styles.name}>
					{name}
				</Typography>
				<Typography component={"div"} className={styles.percentage}>
					{`${percentage}%`}
				</Typography>
			</div>
			<Slider defaultValue={Number(percentage)} color="secondary" />
		</div>
	);
};

const CircularSlider = ({ percentage, title }: TCircularProgress) => {
	return (
		<div className="flexCenter">
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={{
					root: {
						width: "66px",
					},
				}}
			/>
			<Typography className={"circularTitle"}>{title || "under 18"}</Typography>
		</div>
	);
};
export { LineSlider, CircularSlider };
