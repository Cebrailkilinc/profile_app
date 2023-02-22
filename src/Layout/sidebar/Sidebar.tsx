import React from "react";
import logo from "../../assets/ollangLogo.png";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ImFileText2 } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5"

const Sidebar = () => {

  return (
    <div className="flex flex-col justify-start items-center py-8 w-full ">
      <div className="flex flex-col gap-6 text-[#A5A9B9]">
        <div>
          <img src={logo} />
        </div>
        <div className="flex  gap-3 w-full">
          <IoBriefcaseOutline />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            My Job Feed
          </h4>
        </div>
        <div className="flex items-center justify-start gap-3">
          <CiSearch />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            Discover Jobs
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <CiBookmark />
          <h4 className=" text-sm cursor-pointer  hover:text-black">
            Saved Jobs
          </h4>
          <div className="text-[10px] bg-blue-500 text-white  p-1 pl-2 pr-2 rounded-2xl">253+</div>
        </div>

        <div className="flex items-center gap-3">
          <TfiEmail />
          <h4 className="text-sm cursor-pointer  hover:text-black">Proposal</h4>
        </div>
        <div className="flex items-center gap-3">
          <IoNewspaperOutline />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            All Contract
          </h4>
          <div className="text-[10px] bg-blue-500 text-white  p-1 pl-2 pr-2 rounded-2xl">4+</div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegUserCircle />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            Profile
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineCurrencyDollar />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            Transaction
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <ImFileText2 />
          <h4 className="text-sm cursor-pointer  hover:text-black">
            Reports
          </h4>
        </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
