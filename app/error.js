"use client"
// import Image from "next/image";
// import BG from '@/src/assets/images/Root/notFoundBG.png';

export default function Error({error}) {
    console.log("aaaaaa",error);
    return(
        <article className="w-screen h-screen relative bg-gradient-to-b from-slate-100 via-teal-300 to-teal-700 text-center">
            {/* <Image 
                src={BG} 
                className="right-0 absolute bottom-0  "
                alt="BG for not found page"/>
             */}
            <p className=" mx-auto w-fit text-3xl text-teal-900 mb-3">
                {error?.message.details}
            </p>
            <p className=" mx-auto w-fit text-3xl text-teal-900 mb-3">
                به نظر میاد مشکلی پیش اومده بعدا دوباره امتحان کن!! 
            </p>
            <button href="/" className=" mx-auto w-fit text-2xl neo_shadow px-5 mt-5 rounded-3xl hover:bg-slate-600 transition-all hover:text-teal-200">
                بیا برگردیم دوباره امتحان کنیم
            </button>
        </article>
    )
};
