import {
	dDownloadIcon,
	dPostIcon,
	dUserIcon,
	sBlockAcc,
	sDashboard,
	sDeleteAcc,
	sEnquiries,
	sQataNews,
	sReportedUser,
	sTrophies,
	sTrophyReq,
	activeDashboard,
	activeTrophies,
	activeBlockAcc,
	activeDeleteAcc,
	activeEnquiries,
	activeQataNews,
	activeReportedUser,
	activeTrophyReq,
} from "../assets/icons/indext";

export const mockLogin = {
	title: "Sign In",
	description: "Enter your details to sign into your account",
};

export const mockResetPassword = {
	title: "Reset Password",
	description: "Enter your new password",
};

export const mockSendEmail = {
	title: "Enter Email",
	description: "Enter your email to reset your password",
};

export const sidebarMenu = [
	{
		key: "dashboard",
		name: "Dashboard",
		icon: sDashboard,
		aIcon: activeDashboard,
	},
	{
		key: "trophy-req",
		name: "Trophy Requests",
		icon: sTrophyReq,
		aIcon: activeTrophyReq,
	},
	{
		key: "trophies",
		name: "Trophies",
		icon: sTrophies,
		aIcon: activeTrophies,
	},
	{
		key: "block-account",
		name: "Block Accounts",
		icon: sBlockAcc,
		aIcon: activeBlockAcc,
	},
	{
		key: "delete-account",
		name: "Delete Accounts",
		icon: sDeleteAcc,
		aIcon: activeDeleteAcc,
	},
	{
		key: "qatapolt-news",
		name: "Qatapolt News",
		icon: sQataNews,
		aIcon: activeQataNews,
	},
	{
		key: "enquiries",
		name: "Enquiries",
		icon: sEnquiries,
		aIcon: activeEnquiries,
	},
	{
		key: "reported-user",
		name: "Reported Users",
		icon: sReportedUser,
		aIcon: activeReportedUser,
	},
];

export const analyticCardMock = [
	{
		title: "1256",
		subTitle: "Total Downloads",
		icon: dDownloadIcon,
	},
	{
		title: "1786",
		subTitle: "Total Post",
		icon: dPostIcon,
	},
	{
		title: "1550",
		subTitle: "Total Users",
		icon: dUserIcon,
	},
];

export const lineSliderMock = [
	{
		total: "125k",
		name: "Total Downloads",
		percentage: 50,
		color: "#2ACD4E",
	},
	{
		total: "1.6m",
		name: "Visitors from Usa",
		percentage: 80,
		color: "#7B61FF",
	},
	{
		total: "365k",
		name: "Visitors from Australia",
		percentage: 40,
		color: "#FFC961",
	},
	{
		total: "2.5b",
		name: "Visitors from India",
		percentage: 90,
		color: "#233F35",
	},
];

export const circularSliderMock = [
	{
		title: "Unber 18",
		percentage: 50,
		color: "#2ACD4E",
	},
	{
		title: "Unber 30",
		percentage: 80,
		color: "#7B61FF",
	},
	{
		title: "Unber 50",
		percentage: 40,
		color: "#FFC961",
	},
	{
		title: "Unber 60",
		percentage: 90,
		color: "#233F35",
	},
];

export const mockNews = [
	{
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur. Facilisis rutrum viverra bibendum lobortis sed. At congue non orci quis.",
	},
	{
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur. Facilisis rutrum viverra bibendum lobortis sed. At congue non orci quis.",
	},
	{
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur. Facilisis rutrum viverra bibendum lobortis sed. At congue non orci quis.",
	},
	{
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur. Facilisis rutrum viverra bibendum lobortis sed. At congue non orci quis.",
	},
];
