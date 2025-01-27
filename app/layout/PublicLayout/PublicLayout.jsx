import useLocalStorage from "@hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router";

const PublicLayout = () => {
  const [token, setToken] = useLocalStorage("token", null);

  return Boolean(token) ? (
    <Navigate replace to="/" />
  ) : (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
