import { Navigate, Outlet } from "react-router-dom";
import { TUser } from "../types";

interface TProtectRoute {
	isAuthenticated: TUser;
}
const ProtectedRoute = ({ isAuthenticated }: TProtectRoute) => {
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default ProtectedRoute;
