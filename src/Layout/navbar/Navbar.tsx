import React, { FC } from "react";

//COMPONENTS
import Search from "../../components/Search";
import User from "../../components/User";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5  w-full sm:gap-40">
      <div className="w-full">
        <Search />
      </div>
      <div className="w-1/2">
        <User />
      </div>
    </div>
  );
};

export default Navbar;
