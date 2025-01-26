import React from "react";
import { Navigate, Outlet } from "react-router";

const DashboardLayout = () => {
  const [token, setToken] = useLocalStorage("token", null);

  return !Boolean(token) ? (
    <Navigate replace to="/auth" />
  ) : (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
