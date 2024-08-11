"use client"
import Image from "next/image";
// image 
import BG from "@/src/assets/images/flower designs/BG.jpg"



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
            <Image src={BG} className="fixed z-[-1] h-svh blur-none object-cover left-0 sm:object-cover object-center w-svw" alt="BG" priority />
            <header className=" h-[12svh]">
                <h1 className="text-xl text-center py-2 bg-white bg-opacity-75 h-1/2 ">
                    کدوم سبک گل آرایی مدنظرتون هست؟
                </h1>
                <ul id="container_of_categories" className="relative flex items-center gap-3 text-nowrap mx-10 h-1/2 overflow-x-scroll overflow-y-hidden sm:mt-3 sm:p-3 sm:pb-10 bg-white  bg-opacity-75 border-violet-300 border rounded sm:items-center sm:justify-center sm:w-fit sm:mx-auto"> 
                    <button onClick={scrollRight} className="fixed right-0 h-[6svh] text-4xl font-extrabold md:hidden">→</button>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">همه</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">جشن ها</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">دسته گل</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">مناسبتی</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">ترحیم</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">باکس گل</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">جام گل</li>
                    <li className=" border-l px-2 border-yellow-700 pl-4 text-lg text-yellow-950">مینیمال</li>
                    <button onClick={scrollLeft} className="fixed left-0 h-[6svh] text-4xl font-extrabold md:hidden">←</button>
                </ul>
            </header>
            <main className="flex-1 w-4/5 ">
                
            </main>
        </article>
    );
}