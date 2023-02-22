import React from "react";
import userPhoto from "../../assets/indir.jfif";
import { MdLocationOn } from "react-icons/md";
import Button from "../../components/Button";

const Content = () => {
  return (
    <div>
      <div className="flex gap-5 px-10 py-5">
        <div>
          <img className="rounded-full" src={userPhoto} />
        </div>
        <div className="w-full py-3">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-3xl font-semibold">Justins Mark</h1>
              <div className="flex items-center gap-2">
                <MdLocationOn color="gray" />
                <h2 className="text-[#8B94A4] text-sm">Newyork, USA</h2>
              </div>
            </div>
            <div className="">
              <button className="border px-4 py-2 rounded-3xl text-white text-xs bg-[#3E8CFA] ">
                Edit Profile
              </button>
              <button className="border px-4 py-2 rounded-3xl text-[#9DA4B0] text-xs ml-2">
                Public View
              </button>
            </div>
          </div>
          <div className="text-[#8B94A4] text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
