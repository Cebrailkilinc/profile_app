import React from 'react'

const Share = () => {

  return (
    <div>    
        <ul className='flex items-center gap-5 border-b pt-10 text-sm'>
            <li className=' pb-2 text-gray-400 focus:border-b-10 cursor-pointer'>Experience</li>
            <li className=' pb-2 text-gray-400 focus:border-b-10 cursor-pointer'>Biography</li>
            <li className=' pb-2 text-gray-400 focus:border-b-10 cursor-pointer'>Skilss</li>
            <li className=' pb-2 text-gray-400 focus:border-b-10 cursor-pointer'>Portfolio</li>
        </ul>
    </div>
  )
}

export default Share