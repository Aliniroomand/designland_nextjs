"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Filter_for_balloons = () => {
    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname()

    const filterHandler=(filter)=>{
        const params=new URLSearchParams(searchParams)
        params.set("category",filter);
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
        }

    const activedFilter=searchParams.get("category")??"all";

    return (
             <header className="absolute h-[20svh] top-0 right-0 w-full">
                <article className=" bg-gradient-to-b from-transparent to-white via-white bg-opacity-70 h-fit text-xl text-center py-4 font-bold">
                    <h1>
                    دسته بندی مورد نظر خودتون رو انتخاب کنید
                    </h1>

                    <section className="flex flex-row items-center justify-evenly mt-3 ">
                        <button className={`button bg-darkPink2 ${activedFilter==="buckets"&& "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>{filterHandler("buckets")}}>بوکت های بادکنکی </button>
                        <button className={`button bg-darkPink2 ${(activedFilter==="design_with_balloon" || activedFilter==="arg_design" ||activedFilter==="events_design")
                             && "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>{filterHandler("design_with_balloon")}}>دیزاین با بادکنک</button>
                    </section>
                </article>
                <section 
                        className={`${activedFilter==="design_with_balloon" || activedFilter==="arg_design" ||activedFilter==="events_design" ? "slide-in" :"slide-out"}  bg-white bg-opacity-70 h-fit text-xl text-center  lg:w-1/2 w-full  py-1 flex items-center justify-evenly  left-0 absolute rounded-b-2xl`}>
                    <button className={`button h-10  !text-md !p-0 !bg-darkPink2 text-white  w-1/2 lg:w-1/3 ${activedFilter==="arg_design" && " !bg-teal-400 !text-teal-950"} `} onClick={()=>{filterHandler("arg_design")}}>
                    آرگ و افتتاحیه
                    </button>
                    <button className={`button h-10 !text-md !p-0 !bg-darkPink2 text-white w-1/2 lg:w-1/3 ${activedFilter==="events_design" && "!bg-teal-400 !text-teal-950" } `} onClick={()=>{filterHandler("events_design")}}>
                    مناسبتی
                    </button>
                </section>
            </header> 
    );
};

export default Filter_for_balloons;