import { Navigate, Outlet } from "react-router-dom";

interface TProtectRoute {
	isAuthenticated: boolean;
}
const ProtectedRoute = ({ isAuthenticated }: TProtectRoute) => {
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default ProtectedRoute;
