"use client"
import Image from "next/image";
import { useState } from "react";

// images
import BG from "@/src/assets/images/balloon/balloonPage_BG.jpg"



export default function BalloonDesignPage (){
    const [selectedOption,setSelectedOption]=useState({
        buckets:false,
        design_with_balloon:false,
        arg_design:false,
        events_design:false
        
    })

console.log(selectedOption);
    return (
        <main className=" relative md:w-[50svw] mx-auto ">
            <Image src={BG} quality={50} placeholder="blur" className=" blur-[3px] object-cover h-screen fixed z-[-1] top-0 right-0"/>
            <header className="absolute h-[20svh] top-0 right-0 w-full">
                <article className=" bg-white bg-opacity-70 h-fit text-xl text-center py-4">
                    <h1>
                    دسته بندی مورد نظر خودتون رو انتخاب کنید
                    </h1>

                    <section className="flex flex-row items-center justify-evenly mt-3 ">
                        <button className={`pink_button ${selectedOption.buckets&& "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>setSelectedOption({buckets:true})}>بوکت های بادکنکی </button>
                        <button className={`pink_button ${selectedOption.design_with_balloon&& "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>setSelectedOption({design_with_balloon:true})}>دیزاین با بادکنک</button>
                    </section>
                </article>
                <section 
                        className={`${selectedOption.design_with_balloon || selectedOption.arg_design ||selectedOption.events_design ? "slideIn_top_animation" : "slideOut_top_animation"}  bg-white bg-opacity-70 h-fit text-xl text-center w-full py-1 `}>
                    <button className={`pink_button !text-md !bg-darkPink2 !text-white  w-1/2 ${selectedOption.arg_design&& "!text-[#f97fbcf0] !bg-black"} `} onClick={()=>setSelectedOption({arg_design:true,design_with_balloon:true,})}>
                    آرگ و افتتاحیه
                    </button>
                    <button className={`pink_button  !text-md !bg-darkPink2 !text-white w-1/2 ${selectedOption.events_design && "!text-[#f97fbcf0] !bg-black" } `} onClick={()=>setSelectedOption({events_design:true,design_with_balloon:true})}>
                    مناسبتی
                    </button>
                </section>
            </header>
            <section className="absolute bg-red-900 h-[70svh] w-full top-[26svh] sm:top-[35svh] sm:h-[64svh] overflow-y-scroll">
            
            </section>
        </main>
    )
}