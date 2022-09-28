/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  ) : (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
