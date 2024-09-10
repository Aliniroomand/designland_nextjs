"use client"
import { usePathname, useSearchParams ,useRouter } from 'next/navigation';
import React from 'react';

const Filter_for_fruits = () => {

    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname()

    const filterHandler=(filter)=>{
        const params=new URLSearchParams(searchParams)
        params.set("category",filter);
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }

    const activedFilter=searchParams.get("category")?? "all"

    return (
  <header className="absolute h-[20%] top-0 right-0 w-full  bg-white bg-opacity-70 text-center p-4 text-base">
                <h1 className=' font-semibold'>
                دسته بندی مورد نظر خودتون رو انتخاب کنید
                </h1>

                <section className="  flex flex-row items-center justify-evenly h-full  ">
                    <button className={`button bg-yellow-500  ${activedFilter==="all" && "!text-yellow-400 !bg-black"} !p-1 w-1/3 h-1/2 lg:w-[10%]  `} onClick={()=>filterHandler("all")}>همه</button>
                    <button className={`button bg-yellow-500  ${activedFilter==="design_ba_mive" && "!text-yellow-400 !bg-black"} !p-1 w-1/3 h-1/2 lg:w-[10%]`} onClick={()=>filterHandler("design_ba_mive")}>دیزاین با میوه </button>
                    <button className={`button bg-yellow-500 ${activedFilter==="tarrahi_mive" && "!text-yellow-400 !bg-black"}  !p-1 w-1/3 h-1/2 lg:w-[10%]`} onClick={()=>filterHandler("tarrahi_mive")}> طراحی میوه</button>
                </section>

        </header> 
    );
};

export default Filter_for_fruits;
