import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import sidebarSupportImg from "../assets/images/sidebar-support-img.svg";
import { FaUsers } from "react-icons/fa6";
import toast from "react-hot-toast";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout=()=>{
    localStorage.clear();
    toast.success("Logout Successfully!")
    navigate('/login')
  }
  return (
    <div className="w-full flex flex-col justify-between px-3 shadow-xl h-[100vh]">
      <div className="w-full">
        <div className="w-full flex gap-[10px] items-center justify-center my-3">
          <img src={logo} alt="" className="h-[90px] w-[full]" />
        </div>
        <div className="w-full flex flex-col mt-4">
          <div
            className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
              location.pathname === "/dashboard" ||
              location.pathname === "/dashboard/"
                ? "bg-[#FCE2CE] shadow-lg"
                : "bg-white"
            } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer`}
            onClick={() => navigate("/dashboard")}
          >
            <MdSpaceDashboard
              className={` ${
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/"
                  ? "text-[#92613A]"
                  : "text-[#616161]"
              }  group-hover:text-[#92613A] text-lg`}
            />
            <p
              className={` ${
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/"
                  ? "text-[#92613A]"
                  : "text-[#616161]"
              } group-hover:text-[#92613A] text-base`}
            >
              Dashboard
            </p>
          </div>
          <div
            className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
              location.pathname === "/dashboard/users" ||
              location.pathname === "/dashboard/users/"
                ? "bg-[#FCE2CE] shadow-lg"
                : "bg-white"
            } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer hover:border`}
            onClick={()=>navigate('/dashboard/users')}
          >
            <FaUsers
              className={` ${
                location.pathname === "/dashboard/users" ||
                location.pathname === "/dashboard/users/"
                  ? "text-[#92613A]"
                  : "text-[#616161]"
              }  group-hover:text-[#92613A] text-lg`}
            />
            <p
              className={` ${
                location.pathname === "/dashboard/users" ||
                location.pathname === "/dashboard/users/"
                  ? "text-[#92613A]"
                  : "text-[#616161]"
              } group-hover:text-[#92613A] text-base`}
            >
              User List
            </p>
          </div>
          <div className="flex gap-[10px] items-center my-4 px-2 cursor-pointer" onClick={()=>handleLogout()}>
            <CiLogout className="text-xl text-red-400" />
            <p className="text-base text-red-400">Logout</p>
          </div>
        </div>
      </div>
      <div className="w-full py-4">
        <div className="w-full bg-[#92613A] rounded-2xl p-5">
          <h1 className="text-white text-xl font-semibold my-1">
            Support 24/7
          </h1>
          <p className=" text-white">Contacts us anytime</p>
          <button className="text-primary bg-white rounded-lg px-5 my-2 py-1 relative z-[3]">
            Start
          </button>
          <img
            src={sidebarSupportImg}
            alt=""
            className="h-[130px] w-[150px] relative z-[0] right-[-40px] mt-[-50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
