"use client"
import Link from "next/link";
import { useState } from "react";
// images
import { usePathname } from "next/navigation";
import { getCookie } from "../_lib/cookie";



export default function Navbar() {
    const pathname=usePathname()
  const [opendesigns, setOpendesigns] = useState(false);

//  const access_token=getCookie("access_token")
  
  return (
    <article className="fixed z-[100] w-svw right-0 top-0 ">
        <section className={` relative bg-gradient-to-b from-[#fff] via-[#fff] to-[#ffffff00]  backdrop-blur-sm text-base  flex flex-row items-center justify-between pt-1 h-[10svh]  rounded-sm sm:text-lg  `} >
        <ul className="gap-3 flex flex-row items-center">
            <Link href="/" className="absolute lg:block hidden w-1/5 h-full left-0 top-0 cursor-pointer " >
                <p className='absolute z-30 h-[10svh] grid place-items-center sm:text-md text-3xl  lg:text-2xl w-full font-semibold text_animation color_animation colorfull_text text-left'>
                ❦ دنیای رنگی دیزاین لند❦
                </p>
            </Link>
                <li className="w-1/5">
                    <Link href="/" className={`text-pink-500 text_shadow ${pathname==="/" && "!text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"} `}>
                    <span>🏠</span>
                    <span>صفحه اصلی</span>
                    
                    </Link>
                </li>
                <li className="cursor-pointer text-pink-700 text_shadow relative w-1/5" onClick={()=>setOpendesigns(e=>!e)}>
                
                📷 دیزاین ها<span className="px-3 text-3xl sm:text-base text_shadow">{opendesigns ?"↑" :"↓" }</span>
                <ul className={`${opendesigns?"slide-in":" slide-out hidden"} bg-gradient-to-b from-[#fff] via-[#fff] to-[#ffffff00] absolute flex flex-col justify-center items-start bg-gray-500 bg-opacity-50 text-center w-36 p-1 py-5 mt-2 h-fit rounded-2xl divide-r-[0.5px] border-r-[0.1px] gap-3 border-gray-400 divide-gray-400 right-0`}>
                    <li className={`text-amber-600 py-1 ${pathname==="/balloon" && "text-black border-b-2 border-black transition-all bg-[#00000060] rounded-2xl"} w-full`}>
                        <Link href="/balloon" >🎈بادکنک آرایی</Link>
                    </li>
                    <li className={`text-amber-700 py-1 ${pathname==="/flower" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"} w-full`}>
                        <Link href="/flower" >🌺گل آرایی </Link>

                    </li>
                    <li className={`text-amber-800 py-1 ${pathname==="/fruit" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"} w-full `}>
                        <Link href="/fruit" >🍇میوه آرایی</Link>
                    </li>
                </ul>
                </li>

                <li className="text-purple-800 ">
                    <Link href="about" className={`text_shadow ${pathname==="/about" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"}`}>
                        📩تماس با ما ودرباره ما
                    </Link>
                </li>
                <li className="text-pink-900 text_shadow">
                    <Link href="learning" className={`${pathname==="/learning" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"}`}>
                        🎓آموزش ها
                    </Link>

                </li>
                <li>
                <Link 
                href={"/login" } 
                className="text-pink-900 text_shadow">
                🔐ادمین پنل
                </Link>
                </li>
            </ul>

        </section>
    </article>
  );
}
