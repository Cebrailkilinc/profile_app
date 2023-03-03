import React, { FC } from "react";
import proLogo from "../../assets/pro.png";
import { TiTick } from "react-icons/ti";

const Pro: FC = () => {
  return (
    <div className=" bg-white border flex flex-col items-center gap-5 pt-16 pb-10 px-5">
      <div>
        <img alt="" src={proLogo} />
      </div>
      <div>
        <h1 className="text-3xl">
          Upgrade to <span className="font-bold">Pro</span>
        </h1>
      </div>
      <div>
        <p className="text-xs text-center">
          I am a consultant for a small hotel business. I am currently with dem
          through a rebrand they are in need of a new company logo.{" "}
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full">
              <TiTick color="white" />
            </div>
            <h3 className="text-xs">Unlimited job </h3>
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full">
              <TiTick color="white" />
            </div>
            <h3 className="text-xs">Multiple job communication </h3>
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full">
              <TiTick color="white" />
            </div>
            <h3 className="text-xs">
              Unlimited calling accsess from different city.
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full">
              <TiTick color="white" />
            </div>
            <h3 className="text-xs">Hire 10+ frelancers for one project</h3>
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full">
              <TiTick color="white" />
            </div>
            <h3 className="text-xs">Filter, block search talent freelancer</h3>
          </li>
        </ul>
      </div>
      <button className="bg-sky-600 text-white text-xs py-2 px-3 rounded-3xl">
        Upgrade Plan
      </button>
    </div>
  );
};

export default Pro;
