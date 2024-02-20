import React from 'react'
import { FiEye } from "react-icons/fi";

type Props = {}

const CardView = (props: Props) => {
  return (
    <div className='w-[346px] h-[172px] bg-white shadow-xl rounded-lg cursor-pointer'>
        <span className='flex items-center m-5 justify-center w-14 h-14 rounded-full bg-[#eff2f7]'>
          <FiEye className='text-2xl '/>
        </span>
        <div className='flex flex-col px-5'>
          <span className='text-2xl text-green-500'>134,000 ko&apos;rilgan</span>
          <span className='text-[14px]'>Ko&apos;rilgan tovarlar</span>
        </div>
    </div>
  )
}

export default CardView