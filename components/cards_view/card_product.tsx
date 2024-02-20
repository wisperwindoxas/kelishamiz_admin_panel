import React from 'react'
import { MdNewspaper } from "react-icons/md";
import Link from "next/link";

type Props = {}

const CardsProudct = (props: Props) => {
  return (
      <Link href={"/announcements"} className='w-[346px] h-[172px] bg-white shadow-xl rounded-lg cursor-pointer'>
                <div >
                  <span className='flex items-center m-5 justify-center w-14 h-14 rounded-full bg-[#eff2f7]'>
                    <MdNewspaper className='text-2xl '/>
                  </span>
                  <div className='flex flex-col px-5'>
                    <span className='text-2xl text-green-500'>546,000 tovarlar</span>
                    <span className='text-[14px]'>Ko&apos;rilgan tovarlar</span>
                  </div>
                </div>
      </Link>
  )
}

export default CardsProudct