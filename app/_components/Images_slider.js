"use client"
import Image from 'next/image';
import React, { useRef } from 'react';

const Images_slider = ({images,id}) => {
    const pics=images.split(",")
    const containerRef=useRef(null)



    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
    <section className=' flex flex-row w-full h-full justify-evenly rounded-3xl'>
        <button className='absolute right-0 top-1/3 bg-teal-800 active:bg-teal-600 border-2 border-teal-200 text-white bg-opacity-90 z-50 rounded-3xl transition-all  text-3xl font-extrabold h-20 active:scale-75' onClick={scrollRight}>
        →
        </button>
        <section ref={containerRef} className=' flex overflow-x-scroll rounded-3xl w-full h-full hide-scrollbar '>
            {
            pics.map((i)=>
            
            <Image key={i} width={1080} height={1350} placeholder='blur' blurDataURL={`${i}`} className=' border-2  border-teal-950 rounded-3xl ' quality={100} src={i} alt={`عکس  کد ${id}`}/> )
            }
        </section>
        <button className='absolute z-50 left-0 top-1/3 bg-teal-800 border-2 border-teal-200 text-white bg-opacity-90 rounded-3xl transition-all text-3xl font-extrabold h-20 active:scale-75 active:bg-teal-600' onClick={scrollLeft}>
        ←
        </button>
    </section>
    );
};

export default Images_slider;