"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Similar_items_for_Balloon = ({category,AllBallons}) => {
    const ref=useRef(null)

    const similar=AllBallons?.filter(i=>i.category===category);
console.log(similar);
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
        <button className='absolute right-0 my-auto bg-teal-950 text-white bg-opacity-90 z-50 rounded-3xl transition-all  text-3xl font-extrabold h-10 w-10  active:scale-75' onClick={scrollRight}>
        →
        </button>
        <div ref={ref} className='absolute right-9 left-9 h-full  top-0 flex flex-row overflow-x-scroll overflow-y-hidden hide-scrollbar items-center justify-start '>
            {
                similar.map(infos=>
                    <Link key={infos.id} href={`/balloon/${infos.id}`} className="flex-none mx-3 relative w-20 h-20 neo_shadow rounded-[50%] overflow-hidden">
                            <Image src={infos.Images.split(",")[0]} fill className=" hover:scale-150 transition-all absolute z-20 rounded-[50%] " alt={`${infos.name}`}/>
                        </Link>
                            )
            }
        </div>
        <button className='absolute z-50 left-0  my-auto bg-teal-950 text-white bg-opacity-90 rounded-3xl transition-all text-3xl font-extrabold h-10 w-10 active:scale-75' onClick={scrollLeft}>
        ←
        </button>
        </section>
    );
};

export default Similar_items_for_Balloon;