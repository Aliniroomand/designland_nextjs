import Image from "next/image";
import { Suspense } from "react";
// image 
import BG from "@/src/assets/images/flower designs/BG.jpg"
// comps
import FLowerList from "../_components/FlowerList";
import Loader from "../loading";
import Filter_for_flowers from "../_components/Filter_for_flowers";



export default function FlowerDesignPage ({searchParams}){
    const filter=searchParams?.category



  

    return(
        <article className="flex flex-col h-vh w-vw ">
            <Image src={BG} className="fixed z-[-1] h-[100vh] blur-[3px] object-cover left-0 object-center w-full" alt="BG" priority />
            <Filter_for_flowers/>
            <main className="flex-1 w-4/5 h-[87svh] ">
            <Suspense fallback={<Loader/>} key={filter}>
                <FLowerList filter={filter}/>
            </Suspense>
            </main>
        </article>
    );
}