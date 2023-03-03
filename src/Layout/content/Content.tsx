import React, { FC } from "react";

//ICONS
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";

//STATE MANAGEMENT
import { RootObject } from "../../types/types";

//COMPONENTS
import Share from "./Share";

interface Props {
  isLoading: boolean;
  errorMessage: string;
  currentUser: RootObject;
}

const Content: FC<Props> = ({
  currentUser,
}: {
  isLoading: boolean;
  errorMessage: string;
  currentUser: RootObject;
}) => {
  console.log(currentUser);

  return (
    <div>
      <div className="flex flex-col md:flex-row  items-center gap-3">
        <div className="w-full sm:w-1/5  flex justify-center">
          <img
            alt=""
            className="rounded-full h-32 w-32 "
            src={currentUser.avatar}
          />
        </div>
        <div className="w-4/5 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <h1 className="text-2xl font-semibold">{currentUser.name}</h1>
              <div className="flex items-center gap-2">
                <MdLocationOn color="gray" />
                <h2 className="text-[#8B94A4] text-sm">
                  {currentUser.country}, {currentUser.state}
                </h2>
              </div>
            </div>
            <div className="mt-5">
              <button className="border px-2 sm:px-4 py-2 rounded-3xl text-white text-xs bg-[#3E8CFA]  cursor-pointer  ">
                Edit Profiless
              </button>
              <button className="border px-2 sm:px-4 py-2 rounded-3xl text-[#9DA4B0] text-xs ml-1 sm:ml-2 cursor-pointer ">
                Public View
              </button>
            </div>
          </div>
          <div className="text-[#8B94A4] text-xs mt-5 lg:pr-32">
            {currentUser.summary}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-10 mt-16">
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            <CiClock2 size={35} />
          </div>
          <div className="text-xs ">
            <h3 className="font-bold">3+ Years Job</h3>
            <h3 className="text-gray-400 mt-1">Experienced</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            {/* <img alt="" className="h-8" src={cup} /> */}
          </div>
          <div className="text-xs ">
            <h3 className="font-bold">
              {currentUser.certificateCount} Certificates
            </h3>
            <h3 className="text-gray-400 mt-1">Achieved</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            <IoNewspaperOutline color="gray" size={35} />
          </div>
          <div className="text-xs ">
            <h3 className="font-bold">
              {currentUser.numberOfInternships} Intership
            </h3>
            <h3 className="text-gray-400 mt-1">Completed</h3>
          </div>
        </div>
      </div>
      <Share />
    </div>
  );
};

export default Content;
