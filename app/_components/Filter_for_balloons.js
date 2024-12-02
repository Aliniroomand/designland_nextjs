"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { getAllCategories } from '../_lib/data_services';
import { WholeCategoriesQuery } from '../_lib/reactQuery_functions';

const Filter_for_balloons = () => {
    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname()

    const filterHandler=(filter)=>{
        const params=new URLSearchParams(searchParams);
        params.set("category",filter);
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }

    const activedFilter=searchParams.get("category")??"all";

    const {data,error,isPending}=WholeCategoriesQuery();

    if(isPending)return <h1 className="w-full text-center bg-white text-2xl h-[20svh]">درحال بارگیری دسته بندی ها...</h1>

    if(error)return "دربارگیری دسته بندی ها مشکلی پیش آمده"

    else{
    const balloonCategories=data?.filter(c=>c.parent_id=== 1 );
    
    return (
             <header className="absolute h-[20svh] top-0 right-0 w-full">
                <article className=" bg-gradient-to-b from-transparent to-white via-white bg-opacity-70 h-fit text-xl text-center py-4 font-bold">
                    <h1>
                    دسته بندی مورد نظر خودتون رو انتخاب کنید
                    </h1>

                    <section className="flex flex-row items-center justify-evenly mt-3 ">
                        {balloonCategories.map(data=>
                            <button key={data.id} className={`button bg-darkPink2 ${activedFilter===`${data.name}`&& "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>{filterHandler(`${data.name}`)}}>{data.persian_name}</button>

                        )}
                    </section>
                </article>
                
            </header> 
    );}
};

export default Filter_for_balloons;