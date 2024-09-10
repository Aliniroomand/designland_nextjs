"use client"
import Image from "next/image";
import BG from '@/src/assets/images/Root/notFoundBG.png';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error({error}) {
    const router=useRouter()


    return(
        <article className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-slate-100 via-teal-300 to-teal-700 text-center ">
            <Image 
                src={BG} 
                className="right-0 absolute bottom-0  "
                alt="BG for not found page"/>
            <section className="absolute right-0 w-[90svw] md:right-[5svw] h-[30svh] lg:w-2/3 lg:right-1/4 top-[10svh] lg:top-[35svh] rounded-3xl text-wrap">
                <p className=" mx-auto w-fit md:text-2xl text-xl font-semibold text-teal-900 m-3">
                    به نظر میاد یه مشکل و ارور پیش اومده !!! 
                </p>
                <p className=" mx-auto md:w-fit w-svw md:text-xl text-base text-wrap h-fit text-teal-100 m-1 p-3 right-0 bg-teal-900 rounded-xl neo_shadow">
                    متن ارور <br/>
                        {`{{ ${error.message} }}`}
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
