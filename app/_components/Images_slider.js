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
        <button className='absolute right-0 top-1/3 bg-teal-950 text-white bg-opacity-90 z-50 rounded-3xl transition-all  text-3xl font-extrabold h-20 active:scale-75' onClick={scrollRight}>
        →
        </button>
        <section ref={containerRef} className=' flex overflow-x-scroll rounded-3xl w-full h-full hide-scrollbar '>
            {
            pics.map((i)=><Image key={i} width={900} height={900} placeholder='blur' blurDataURL='blur' className=' aspect-video' quality={100} src={i} alt={`عکس بادکنک آرایی کد ${id}`}/> )
            }
        </section>
        <button className='absolute z-50 left-0 top-1/3 bg-teal-950 text-white bg-opacity-90 rounded-3xl transition-all text-3xl font-extrabold h-20 active:scale-75' onClick={scrollLeft}>
        ←
        </button>
    </section>
    );
};

export default Images_slider;