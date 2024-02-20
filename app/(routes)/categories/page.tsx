'use client'
import React from "react";
import {categoriesMenu} from "@@/app/(routes)/categories/data";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Categories() {
    return (
        <>
            <h1 className={"text-3xl font-bold text-gray-600 p-6"}>Kategoriyalar</h1>

         <div   className="grid  grid-cols-5 justify-items-center gap-3 p-6">
             {categoriesMenu.map(item => {
                 return (
                     // eslint-disable-next-line react/jsx-key
                     <Link key={item.id} href={`categories/${item.categoriesName.split(" " ).join("-")}`}>
                     <div className="relative flex w-full flex-none flex-col shadow-2xl p-4" id="1" >

                         <div className="relative shadow-black/5 shadow-none rounded-large">
                             <div className="relative overflow-hidden rounded-inherit rounded-large"><img
                                 src={item.icons}
                                 className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square w-full hover:scale-110"
                                 alt={item.categoriesName} data-loaded="true"/></div>
                             <img
                                 src={item.icons }
                                 className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
                                 alt={item.categoriesName } aria-hidden="true" data-loaded="true"/></div>
                         <div className="mt-1 flex flex-col gap-2 px-1">
                             <div className="flex items-start justify-between gap-1"><h3
                                 className="text-1xl  font-bold text-default-700">{item.categoriesName}</h3>
                                 <div className="flex items-center gap-1">


                                 </div>
                             </div>
                             <p className="text-small text-default-500">{item.count} E&apos;lonlar bor</p>

                         </div>
                     </div>
                     </Link>
                 )
             })}
         </div>

        </>
    );
}
