import React, { FC } from "react";

//ICONS
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

//IMAGES
import ball from "../assets/ball.png";
import share from "../assets/share.png";

const Card: FC = () => {
  return (
    <div className="bg-white p-5 mt-5 border rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-gray-900 font-semibold">Job Experience</h1>
          <h5 className="text-xs text-gray-400">3 Job history</h5>
        </div>
        <div>
          <button className="border px-2 sm:px-4 py-2 rounded-3xl text-[#9DA4B0] text-xs ml-1 sm:ml-2">
            + Add More
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-5">
          <div className="flex items-center gap-5">
            <div className="text-gray-400">
              <img alt="" src={ball} />
            </div>
            <div className="text-xs ">
              <h3 className="font-bold">Grapich Designer</h3>
              <h3 className="text-gray-400 mt-1">Dribble lnc</h3>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-3">
            <div className="text-gray-400">
              <CiClock2 size={35} />
            </div>
            <div className="text-xs ">
              <h3 className="text-gray-400 mt-1">Feb 2016 - Dec 2017</h3>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <MdLocationOn color="gray" />
            <h2 className="text-[#8B94A4] text-sm">USA, Newyork</h2>
          </div>
        </div>
      </div>
      <div className="sm:pl-16 text-xs mt-5">
        Aperiam perferendis optio in omnis voluptas nostrum provident corporis
        quia. Sed ducimus qui tempore non quia. Ut rem et nihil ipsam ab
        molestias.
      </div>
      <div className="sm:pl-16 mt-5">
        <img className="h-48 object-cover" alt="" src={share} />
      </div>
    </div>
  );
};

export default Card;
