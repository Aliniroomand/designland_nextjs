import Image from "next/image";
// import { useState } from "react";
// sevices
import BalloonList from "../_components/BalloonList";
// images
import BG from "@/src/assets/images/balloon/balloonPage_BG.jpg"
import { Suspense } from "react";
import Loader from "../loading";
import Filter_for_balloons from "../_components/Filter_for_balloons";



export default function BalloonDesignPage ({searchParams}){

const filter=searchParams?.category;
    return (
        <main className=" relative w-svw h-svh overflow-hidden">
            <Image src={BG} quality={50} placeholder="blur" className=" blur-[3px] object-cover h-screen fixed z-[-1] top-0 right-0" alt="bg of balloons"/>
        <Filter_for_balloons/>
        <Suspense fallback={<Loader/>} key={filter}>
            <BalloonList filter={filter}/>
        </Suspense>
        </main>
    )
}