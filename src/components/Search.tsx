import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className='flex items-center bg-white px-5 py-2 gap-2 rounded-2xl'>
        <AiOutlineSearch size={25} color='gray'/>
        <input  placeholder='Search Anything' className='outline-none  w-full'/>
    </div>
  )
}

export default Search