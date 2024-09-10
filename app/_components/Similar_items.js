"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';

const Similar_items = ({All,category,name,id}) => {
    const ref=useRef(null)
    const pathname=usePathname().trim().split("/")[1];
    console.log(pathname);
    const similar=All?.filter(i=>i.category===category);
    
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

    return (
        <section className='relative flex w-full h-full'>
        <button className='absolute right-0 my-auto bg-teal-800 border-2 border-teal-200 text-white bg-opacity-90 z-50 rounded-3xl transition-all  text-3xl font-extrabold h-10 w-10  active:scale-75' onClick={scrollRight}>
        →
        </button>
        <div ref={ref} className='absolute right-9 left-9 h-full  top-0 flex flex-row overflow-x-scroll overflow-y-hidden hide-scrollbar items-center justify-start '>
            {
                similar.map(infos=>
                    <Link key={infos.id} href={`/${pathname}/${infos.id}`} className="group flex-none mx-3 relative w-20 h-20 neo_shadow rounded-[50%] overflow-hidden grid place-items-center">
                            <Image src={infos.Images.split(",")[0]} fill className=" group-hover:scale-150 transition-all absolute z-20 rounded-[50%] " alt={`${infos.name}`}/>
                            <p className="absolute hidden group-hover:flex h-fit w-full z-50 rounded-[50%] text-clip overflow:hidden bg-red-100 bg-opacity-80 text-center text-xs justify-center items-center transition-all font-semibold py-2">
                                {`${name.split(" ").splice(0,6).join(" ")}...`}
                            </p>
                            <p className="absolute flex group-hover:hidden h-fit w-full z-50 rounded-[50%] text-clip overflow:hidden bg-white bg-opacity-80 text-center font-semibold text-xs justify-center items-center transition-all">
                                {` کد : ${id}`}
                            </p>
                        </Link>
                            )
            }
        </div>
        <button className='absolute z-50 left-0  my-auto bg-teal-800 border-2 border-teal-200 text-white bg-opacity-90 rounded-3xl transition-all text-3xl font-extrabold h-10 w-10 active:scale-75' onClick={scrollLeft}>
        ←
        </button>
        </section>
    );
};


export default Similar_items;