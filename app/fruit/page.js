"use client"
import Image from "next/image";
import { Suspense, useState } from "react";

// images
import BG from "@/src/assets/images/fruit design/BG.png"
import Loader from "../loading";
import FruitList from "../_components/FruitList";



export default function FruitDesignPage (){
    const [selectedOption,setSelectedOption]=useState({
        design_with_fruit:false,
        design_fruit_itSelf:false,
    })


    return (
        <article className=" relative w-screen h-screen p-3 overflow-hidden">
        <Image src={BG} quality={50} placeholder="blur" className=" blur-[2px] object-cover  w-screen h-screen sm:object-top  fixed z-[-1] top-0 right-0"/>
        <header className="absolute h-[20%] top-0 right-0 w-full  bg-white bg-opacity-70 text-center p-4 text-base">
                <h1>
                دسته بندی مورد نظر خودتون رو انتخاب کنید
                </h1>

                <section className="flex flex-row items-center justify-evenly mt-3  ">
                    <button className={`button bg-yellow-500  ${selectedOption.design_with_fruit && "!text-yellow-400 !bg-black"} `} onClick={()=>setSelectedOption({design_with_fruit:true})}>دیزاین با میوه </button>
                    <button className={`button bg-yellow-500 ${selectedOption.design_fruit_itSelf&& "!text-yellow-400 !bg-black"} `} onClick={()=>setSelectedOption({design_fruit_itSelf:true})}>حکاکی و طراحی میوه</button>
                </section>

        </header>
        <main className="absolute w-full h-[80%] top-[20%] grid_style_cards right-0 overflow-y-scroll">
            <Suspense fallback={<Loader/>}>
                <FruitList/>
            </Suspense>
        </main>
    </article>
    )
}