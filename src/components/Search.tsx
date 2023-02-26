import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/ollangLogo.png";
import { HiMenuAlt2 } from "react-icons/hi"

const Search = () => {
  return (
    <>
      <div className='lg:hidden'>
        <HiMenuAlt2 />
      </div>
      <div className='lg:flex items-center bg-white px-5 py-2 gap-2 rounded-2xl hidden'>
        <AiOutlineSearch size={25} color='gray' />
        <input placeholder='Search Anything' className='outline-none  w-full' />
      </div>
    </>

  )
}

export default Search