"use client"
import Image from "next/image"

// Images
import BG from "@/src/assets/images/teach/BG.jpg"


export default function LearningPage (){
    return (
        <>
            <Image src={BG} alt="BG for teaching" className="w-[100vw] h-[100vh] object-fill " quality={100} />
        </>
    )
}