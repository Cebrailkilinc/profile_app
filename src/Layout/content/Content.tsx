import React, { FC } from "react";
import userPhoto from "../../assets/indir.jfif";
import cup from "../../assets/cup.png";
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { GrCertificate } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";

import Button from "../../components/Button";
import Share from "./Share";

const Content: FC = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <img alt="" className="rounded-full" src={userPhoto} />
        </div>
        <div className="w-full py-3">
          <div className="lg:flex justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">Justins Mark</h1>
              <div className="flex items-center gap-2">
                <MdLocationOn color="gray" />
                <h2 className="text-[#8B94A4] text-sm">Newyork, USA</h2>
              </div>
            </div>
            <div className="mt-5">
              <button className="border px-2 sm:px-4 py-2 rounded-3xl text-white text-xs bg-[#3E8CFA] ">
                Edit Profile
              </button>
              <button className="border px-2 sm:px-4 py-2 rounded-3xl text-[#9DA4B0] text-xs ml-1 sm:ml-2">
                Public View
              </button>
            </div>
          </div>
          <div className="text-[#8B94A4] text-sm mt-5 lg:pr-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum.
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
            <img alt="" className="h-8" src={cup} />
          </div>
          <div className="text-xs ">
            <h3 className="font-bold">5 Certificates</h3>
            <h3 className="text-gray-400 mt-1">Achieved</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            <IoNewspaperOutline color="gray" size={35} />
          </div>
          <div className="text-xs ">
            <h3 className="font-bold">2 Intership</h3>
            <h3 className="text-gray-400 mt-1">Completed</h3>
          </div>
        </div>
      </div>
      {/* <Share/> */}
    </div>
  );
};

export default Content;
