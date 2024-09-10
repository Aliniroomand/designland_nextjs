import Image from "next/image";
import { Suspense} from "react";

// images
import BG from "@/src/assets/images/fruit design/BG.png"
import Loader from "../loading";
import FruitList from "../_components/FruitList";
import Filter_for_fruits from "../_components/Filter_for_fruits";



export default function FruitDesignPage ({searchParams}){

    const filter=searchParams?.category??'all';

    return (
        <article className=" relative w-screen h-screen p-3 overflow-hidden">
        <Image src={BG} quality={50} placeholder="blur" className=" blur-[2px] object-cover  w-screen h-screen sm:object-top  fixed z-[-1] top-0 right-0"/>

       
            <Filter_for_fruits/>
        <main className="absolute w-full h-[80%] top-[20%] grid_style_cards right-0 overflow-y-scroll">
            <Suspense fallback={<Loader/>}>
                <FruitList filter={filter}/>
            </Suspense>
        </main>
    </article>
    )
}