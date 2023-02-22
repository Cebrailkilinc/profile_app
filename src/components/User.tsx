import React from "react";
import userPhoto from "../assets/indir.jfif" ;
import { BsFillBellFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs"

const User = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="relative">
        <div className=" w-2 h-2 bg-blue-500 rounded-full relative top-2 left-2 p-1 "></div>
        <BsFillBellFill color="gray" />
      </div>
      <div className="flex items-center gap-3">
        <img className="w-8  rounded-lg" src={userPhoto}/>
        <h1 className="text-sm">Justin Mark</h1>
        <BsThreeDots/>
      </div>
    </div>
  );
};

export default User;
