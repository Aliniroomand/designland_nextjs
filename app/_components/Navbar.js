"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// images
import BG from "@/src/assets/images/Root/menuIcon.png"



export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const [opendesigns, setOpendesigns] = useState(false);
 
  return (
    <article>
        <section className="fixed grid place-items-center w-24 h-24 left-0 bottom-0 cursor-pointer " onClick={()=>setOpenMenu(e=>!e)}>
            <h1 className="z-[55] text-white text-2xl "  >
                منو
            </h1>
            <Image className="absolute inset-auto object-cover opacity-90" src={BG} alt="BG" />
        </section>
        <section className={` fixed ${openMenu?"slide-in":" slide-out !translate-y-[-100%]"} w-svw h-[50svh] right-0 top-0 bg-gradient-to-l from-[#fff] to-[#ffffff2d]  backdrop-blur-sm text-2xl  flex flex-col justify-between pt-4 pb-9 rounded-bl-full sm:w-[30svw] sm:h-svh sm:text-lg  `}>
            <ul >
                <li>
                    <Link href="/" className="text-pink-500 text_shadow">
                    🏠صفحه اصلی
                    </Link>
                </li>
                <li className="cursor-pointer text-pink-700 text_shadow" onClick={()=>setOpendesigns(e=>!e)}>
                📷 دیزاین ها<span className="px-3 text-3xl sm:text-base text_shadow">{opendesigns ?"↑" :"↓" }</span>
                </li>
                <ul className={`${opendesigns?"slide-in":" slide-out hidden"} flex flex-col justify-center items-start mx-6 py-1 text-center  w-1/2 right-[25%] bg-opacity-35 divide-r-[0.5px] border-r-[0.1px] border-gray-400 divide-gray-400`}>
                    <li>
                        <Link href="balloon" className="text-amber-600 py-1  ">🎈بادکنک آرایی</Link>
                    </li>
                    <li>
                        <Link href="flower" className="text-amber-700 py-1 ">🌺گل آرایی </Link>
                    </li>
                    <li>
                        <Link href="fruit" className="text-amber-800 py-1 ">🍇میوه آرایی</Link>
                    </li>
                </ul>
                <li className="text-pink-900 text_shadow">
                    <Link href="learning">
                        🎓آموزش ها
                    </Link>
                </li>
                <li className="text-purple-800 ">
                    <Link href="about" className="text_shadow">
                        📩نظرات و تماس با ما
                    </Link>
                </li>
            </ul>
            <section>
                <Link className="text-pink-900 text_shadow" href="">
                🔐حساب کاربری
                </Link>
            <h1 className="text-red-600 cursor-pointer text_shadow" onClick={()=>setOpenMenu(e=>!e)}>❌بستن منو</h1>
            </section>
        </section>
    </article>
  );
}
