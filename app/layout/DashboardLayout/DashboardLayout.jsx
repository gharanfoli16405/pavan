import React from "react";
import { Navigate, Outlet } from "react-router";
import useLocalStorage from "@hooks/useLocalStorage";

const DashboardLayout = () => {
  const [token, setToken] = useLocalStorage("token", null);

  return !Boolean(token) ? (
    <Navigate replace to="/auth" />
  ) : (
    <>
      <div className="hidden lg:block fixed top-0 right-0 h-screen w-1/4 xl:w-1/6 border bg-indigo-500 ">
        sidebar
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          2
        </div>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 bg-red-400">
          <div className="bg-indigo-500 lg:hidden fixed top-0 right-0 w-full h-[4rem]">
            header
          </div>
          <div className="content mt-16">
            <Outlet />
          </div>
          <div className="bg-indigo-500 lg:hidden fixed bottom-0 right-0 w-full h-[4rem]">
            menu
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
