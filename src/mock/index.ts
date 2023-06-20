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
	},
	{
		key: "trophy-req",
		name: "Trophy Requests",
		icon: sTrophyReq,
	},
	{
		key: "trophies",
		name: "Trophies",
		icon: sTrophies,
	},
	{
		key: "block-account",
		name: "Block Accounts",
		icon: sBlockAcc,
	},
	{
		key: "delete-account",
		name: "Delete Accounts",
		icon: sDeleteAcc,
	},
	{
		key: "qatapolt-news",
		name: "Qatapolt News",
		icon: sQataNews,
	},
	{
		key: "enquiries",
		name: "Enquiries",
		icon: sEnquiries,
	},
	{
		key: "reported-user",
		name: "Reported Users",
		icon: sReportedUser,
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
		color: "primary",
	},
	{
		total: "1.6m",
		name: "Visitors from Usa",
		percentage: 80,
		color: "secondary",
	},
	{
		total: "365k",
		name: "Visitors from Australia",
		percentage: 40,
		color: "primary",
	},
	{
		total: "2.5b",
		name: "Visitors from India",
		percentage: 90,
		color: "primary",
	},
];

export const circularSliderMock = [
	{
		title: "Unber 18",
		percentage: 50,
		color: "primary",
	},
	{
		title: "Unber 30",
		percentage: 80,
		color: "secondary",
	},
	{
		title: "Unber 50",
		percentage: 40,
		color: "primary",
	},
	{
		title: "Unber 60",
		percentage: 90,
		color: "primary",
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
