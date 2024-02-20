import React from 'react'
import { FaUser } from "react-icons/fa";
import Link from "next/link";
type Props = {}

const CardUsers = (props: Props) => {
  return (
      <Link className='w-[346px] h-[172px] bg-white shadow-xl rounded-lg cursor-pointer' href={"/users"}>
          <div >
              <span className='flex items-center m-5 justify-center w-14 h-14 rounded-full bg-[#eff2f7]'>
                <FaUser className='text-2xl '/>
              </span>
              <div className='flex flex-col px-5'>
                <span className='text-2xl text-green-500'>50000 Foydalanuvchilar</span>
                <span className='text-[14px]'>Ko&apos;rilgan tovarlar</span>
              </div>
          </div>
      </Link>
  )
}

export default CardUsers