import React from "react";
import Content from "../Layout/content/Content";
import Pro from "../Layout/content/Pro";
import Navbar from "../Layout/navbar/Navbar";
import Sidebar from "../Layout/sidebar/Sidebar";

const Profile = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-white "><Sidebar/></div>
      <div className="col-span-5 bg-[#F8FAFB]">
        <div><Navbar/></div>
        <div className="grid grid-cols-6 gap-10 mt-5 px-10">
            <div className="col-span-4"><Content/></div>
            <div className="col-span-2"><Pro/></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
