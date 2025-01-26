import useLocalStorage from "../../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router";
import { fullName } from "../../constant/test";

const PublicLayout = () => {
  const [token, setToken] = useLocalStorage("token", null);

  console.log("🚀 ~ fullName:", fullName);
  return Boolean(token) ? (
    <Navigate replace to="/" />
  ) : (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
