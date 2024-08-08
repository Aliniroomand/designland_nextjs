"use client"
import Image from "next/image";
// image 
import BG from "@/src/assets/images/flower designs/BG.png"



export default function FlowerDesignPage (){
    // for category container scrolling
    const scrollLeft = () => {
        document.getElementById('container_of_categories').scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };
    
    const scrollRight = () => {
        document.getElementById('container_of_categories').scrollBy({
            left: 200,
            behavior: 'smooth',
        });}
// for category container scrolling



    return(
        <article className="flex flex-col h-screen ">
            <Image src={BG} className="fixed z-[-1] h-svh" alt="BG" priority />
            <header className=" h-[12svh]">
                <h1 className="text-xl text-center py-3 bg-white bg-opacity-55 h-1/2">
                    کدوم سبک گل آرایی مدنظرتون هست؟
                </h1>
                <ul id="container_of_categories" className="relative flex items-center gap-3 text-nowrap mx-10 h-1/2 overflow-x-scroll bg-white bg-opacity-25 border-violet-300 border"> 
                    <button onClick={scrollRight} className="fixed right-0 h-[6svh] text-4xl font-extrabold">→</button>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">همه</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">جشن ها</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">دسته گل</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">مناسبتی</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">ترحیم</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">باکس گل</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">جام گل</li>
                    <li className=" border-l px-2 border-violet-700 pl-4 text-lg text-violet-950">مینیمال</li>
                    <button onClick={scrollLeft} className="fixed left-0 h-[6svh] text-4xl font-extrabold">←</button>
                </ul>
            </header>
            <main className="flex-1 w-4/5 ">
                
            </main>
        </article>
    );
}