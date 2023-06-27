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
	color: string;
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
			<Slider
				defaultValue={Number(percentage)}
				sx={{ color, pointerEvents: "none" }}
			/>
		</div>
	);
};

const CircularSlider = ({ percentage, title, color }: TCircularProgress) => {
	return (
		<div className="flexCenter">
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={buildStyles({
					pathColor: color,
					textColor: "#323943",
				})}
				className="circle"
			/>
			<Typography className={"circularTitle"}>{title || "under 18"}</Typography>
		</div>
	);
};
export { LineSlider, CircularSlider };
