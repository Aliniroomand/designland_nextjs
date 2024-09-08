"use client"
import Image from "next/image";
import BG from '@/src/assets/images/Root/notFoundBG.png';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function notFound() { 
    const router=useRouter()
    return(
        <article className="w-screen h-screen relative bg-gradient-to-b from-slate-100 via-teal-300 to-teal-700 text-center">
            <Image 
                src={BG} 
                className="right-0 absolute bottom-0  "
                alt="BG for not found page"/>
            <section className="absolute neo_shadow w-[90svw] right-[5svw] h-[30svh] lg:w-2/3 lg:right-1/4 top-[10svh] lg:top-[35svh] rounded-3xl">
                <p className=" text-teal-950 pt-6 text-3xl">
                "404 Not Found"
                </p>
                <p className=" mx-auto w-fit text-3xl text-teal-900 mb-3">
                    به نظر میاد گم شدی!!! 
                </p>
                <Link href="/" className=" text-2xl neo_shadow px-5 mt-5 rounded-3xl bg-slate-600 transition-all  text-teal-200">
                    بیا برگردیم به صفحه اصلی
                </Link>
                <button onClick={()=>router.back()} className=" text-2xl neo_shadow px-5 mt-5 rounded-3xl bg-slate-600 transition-all  text-teal-200">
                یا اینکه به صفحه قبلی
                </button>
            </section>
        </article>
    )
};
