"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';

const Filter_for_flowers = () => {
    const ref=useRef(null);


    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname();

    
        const filterHandler=(filter)=>{
            const params=new URLSearchParams(searchParams)
            params.set("category",filter);
            router.replace(`${pathname}?${params.toString()}`,{scroll:false})
        }

        const activedFilter=searchParams.get("category")?? "all";

      // for category container scrolling
      const scrollLeft = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
// for category container scrolling


    return (
        <header className="relative h-[12svh]">
        <h1 className="text-xl text-center font-medium py-2 bg-yellow-200 bg-opacity-75 h-1/2 ">
            کدوم سبک گل آرایی مدنظرتون هست؟
        </h1>
            <button onClick={scrollRight} className="absolute right-0 top-[12svh] z-50 text-3xl font-extrabold md:hidden">→</button>
        <ul ref={ref} className=" relative flex items-center justify-start right-0 divide-x-[1px] divide-yellow-500 text-nowrap h-fit overflow-x-scroll overflow-y-hidden  p-3  bg-yellow-200  bg-opacity-75 border-yellow-300 border rounded  sm:w-fit w-full sm:mx-auto hide-scrollbar"> 
            <button onClick={()=>filterHandler("all")} className={` ${activedFilter ==="all" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>همه</button>
            <button onClick={()=>filterHandler("jashnha")} className={` ${activedFilter ==="jashnha" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>جشن ها</button>
            <button onClick={()=>filterHandler("daste_gol")} className={` ${activedFilter ==="daste_gol" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>دسته گل</button>
            <button onClick={()=>filterHandler("monasebati")} className={` ${activedFilter ==="monasebati" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>مناسبتی</button>
            <button onClick={()=>filterHandler("tarhim")} className={` ${activedFilter ==="tarhim" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>ترحیم</button>
            <button onClick={()=>filterHandler("boxe_gol")} className={` ${activedFilter ==="boxe_gol" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>باکس گل</button>
            <button onClick={()=>filterHandler("jaame_gol")} className={` ${activedFilter ==="jaame_gol" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>جام گل</button>
            <button onClick={()=>filterHandler("minimal")} className={` ${activedFilter ==="minimal" && "text-yellow-950 neo_shadow border-none bg-yellow-400"}  cursor-pointer p-2 transition-all rounded-3xl hover:text-yellow-700  border-l px-2 border-yellow-700 text-lg text-yellow-950`}>مینیمال</button>
        </ul>
            <button onClick={scrollLeft} className="absolute left-0 top-[12svh] z-50 text-3xl font-extrabold md:hidden">←</button>
    </header>
    );
};

export default Filter_for_flowers;