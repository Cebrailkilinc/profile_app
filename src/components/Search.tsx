import React, { FC } from "react";

//ICONS
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";

//STATE MANAGEMENT
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { sideMenuControl } from "../features/menu/menu.slice";

const Search: FC = () => {
  const dispatch = useAppDispatch();

  const handleMenu: () => void = () => {
    dispatch(sideMenuControl());
  };
  return (
    <>
      <div className="lg:hidden">
        <HiMenuAlt2 size={20} onClick={handleMenu} />
      </div>
      <div className="lg:flex items-center bg-white px-5 py-2 gap-2 rounded-2xl hidden">
        <AiOutlineSearch size={25} color="gray" />
        <input placeholder="Search Anything" className="outline-none  w-full" />
      </div>
    </>
  );
};

export default Search;
