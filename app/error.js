"use client"
import Image from "next/image";
import BG from '@/src/assets/images/Root/notFoundBG.png';
import Link from "next/link";

export default function Error({error}) {
    return(
        <article className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-slate-100 via-teal-300 to-teal-700 text-center ">
            <Image 
                src={BG} 
                className="right-0 absolute bottom-0  "
                alt="BG for not found page"/>
            <section className=" relative h-1/2 top-3 md:top-1/4">
                <p className=" mx-auto w-fit md:text-2xl text-xl font-semibold text-teal-900 mb-3">
                    به نظر میاد مشکلی پیش اومده
                    <br/> بعدا دوباره امتحان کن!! 
                </p>
                <p className=" mx-auto w-fit md:text-xl text-base text-teal-100 m-3 p-3 bg-teal-900 rounded-xl">
                    متن ارور <br/>
                        {`{{ ${error.message} }}`}
                </p>
                <button  className=" mx-auto w-fit text-xl font-medium neo_shadow px-5 mt-5 rounded-3xl hover:bg-slate-900 transition-all hover:text-teal-200 p-3">
                    <Link href="/" >
                        بیا برگردیم دوباره امتحان کنیم
                    </Link>
                </button>
            </section>
        </article>
    )
};
