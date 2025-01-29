import useLocalStorage from "@hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router";

const PublicLayout = () => {
  const [token, setToken] = useLocalStorage("token", null);
  console.log("token is", token);

  return Boolean(token) ? (
    <Navigate replace to="/" />
  ) : (
    <div>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 md:col-span-7 flex items-center justify-center">
          <Outlet />
        </div>
        <div className="col-span-12 md:col-span-5 hidden md:block bg-red-400">
          1
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
