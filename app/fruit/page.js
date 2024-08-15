"use client"
import Image from "next/image";
import { useState } from "react";

// images
import BG from "@/src/assets/images/fruit design/BG.png"



export default function FruitDesignPage (){
    const [selectedOption,setSelectedOption]=useState({
        design_with_fruit:false,
        design_fruit_itSelf:false,
    })


    return (
        <main className=" relative md:w-[50svw] mx-auto ">
        <Image src={BG} quality={50} placeholder="blur" className=" blur-[2px] object-cover  w-full h-[100vh] sm:object-top  fixed z-[-1] top-0 right-0"/>
        <header className="absolute h-[20svh] top-0 right-0 w-full">
            <article className=" bg-white bg-opacity-70 h-fit text-xl text-center py-4">
                <h1>
                دسته بندی مورد نظر خودتون رو انتخاب کنید
                </h1>

                <section className="flex flex-row items-center justify-evenly mt-3 ">
                    <button className={`button bg-yellow-500  ${selectedOption.design_with_fruit && "!text-yellow-400 !bg-black"} `} onClick={()=>setSelectedOption({design_with_fruit:true})}>دیزاین با میوه </button>
                    <button className={`button bg-yellow-500 ${selectedOption.design_fruit_itSelf&& "!text-yellow-400 !bg-black"} `} onClick={()=>setSelectedOption({design_fruit_itSelf:true})}>حکاکی و طراحی میوه</button>
                </section>
            </article>

        </header>
        <section className="absolute  h-[70svh] w-full top-[26svh] sm:top-[35svh] sm:h-[64svh] overflow-y-scroll">
        
        </section>
    </main>
    )
}