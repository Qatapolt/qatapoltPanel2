import Layout from "./layout";
import Trophies from "./pages/trophies";
import Dashboard from "./pages/dashoboard";
import Login from "./pages/registration/Login";
import ResetPassword from "./pages/registration/ResetPassword";
import SendEmail from "./pages/registration/SendEmail";
import TrophyRequests from "./pages/trophyRequest";
import BlockedAccount from "./pages/blockAccount";
import DeletedAccount from "./pages/deletedAccount";
import News from "./pages/news";
import ReportedUser from "./pages/reportedUser";
import Enquiries from "./pages/enquiries";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
	return <div>Page Not Found</div>;
};
function App() {
	const navigate = useNavigate();
	const location = useLocation();
	console.log("router", location);
	if (location.pathname === "/dashboard") {
		navigate({ pathname: "/login" });
	}
	return (
		<>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="send-email" element={<SendEmail />} />
				<Route path="reset-password" element={<ResetPassword />} />
				<Route
					path="/"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>
				<Route
					path="dashboard"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>
				<Route
					path="trophy-req"
					element={
						<Layout>
							<TrophyRequests />{" "}
						</Layout>
					}
				/>
				<Route
					path="trophies"
					element={
						<Layout>
							<Trophies />{" "}
						</Layout>
					}
				/>
				<Route
					path="block-account"
					element={
						<Layout>
							<BlockedAccount />
						</Layout>
					}
				/>
				<Route
					path="delete-account"
					element={
						<Layout>
							<DeletedAccount />
						</Layout>
					}
				/>
				<Route
					path="qatapolt-news"
					element={
						<Layout>
							<News />
						</Layout>
					}
				/>

				<Route
					path="enquiries"
					element={
						<Layout>
							<Enquiries />
						</Layout>
					}
				/>

				<Route
					path="reported-user"
					element={
						<Layout>
							<ReportedUser />
						</Layout>
					}
				/>

				<Route
					path="*"
					element={
						<Layout>
							<NotFound />
						</Layout>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
