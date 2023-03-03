import React, { FC } from "react";

//ICONS
import { BsFillBellFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

//STATE MANAGEMENT
import { useAppSelector, useAppDispatch } from "../app/hooks";

const User: FC = () => {
  const { currentUser } = useAppSelector((state) => state.person);
  console.log(currentUser);

  return (
    <div className="flex items-center gap-3 sm:gap-10">
      <div className="relative z-10">
        <div className=" w-2 h-2 bg-blue-500 rounded-full relative top-2 left-2 p-1 "></div>
        <BsFillBellFill color="gray" />
      </div>
      <div className="flex items-center gap-3">
        <img alt="" className="w-8 h-8  rounded-lg" src={currentUser.avatar} />
        <h1 className="text-sm">{currentUser.name}</h1>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default User;
