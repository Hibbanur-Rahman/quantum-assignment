import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import UserList from "./userList";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex gap-[10px] bg-[#FEF6EF]">
      <div className="w-2/12 bg-white">
        <Sidebar />
      </div>
      <div className="w-10/12 ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
