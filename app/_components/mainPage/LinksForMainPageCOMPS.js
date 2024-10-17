"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const LinksForMainPageCOMPS = ({href,animation,ImageSrc,text}) => {
const[loading,setLoading]=useState(false)

        

    return (
        <Link 
        
        href={href} 
        onClick={()=>setLoading(true)}
        className={`relative z-30 w-64 h-[22rem] wobble grid place-items-center ${animation} ${loading&& "grayscale hover:cursor-not-allowed"}`}
        >
            <Image className='drop-shadow-4xl h-[24rem]' src={ImageSrc} alt={text}/>

            <p className='absolute self-center text-2xl font-bold sm:text-xl bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center text_animation' >
                    {text}
            </p>

        </Link>

    );
};

export default LinksForMainPageCOMPS;