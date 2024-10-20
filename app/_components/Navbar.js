"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [opendesigns, setOpendesigns] = useState(false);

  return (
    <article className="bg-gradient-to-b from-[#fff] via-[#fff] to-[#ffffff00] backdrop-blur-sm text-base flex flex-row items-center justify-between h-[10svh] rounded-sm sm:text-lg fixed z-[100] w-svw right-0 top-0">
      <ul className="gap-3 flex flex-row items-center justify-evenly w-full sm:w-3/4">
        <Link href="/" className="absolute lg:block hidden w-1/5 h-full left-0 top-0 cursor-pointer">
          <p className="absolute z-30 h-[10svh] grid place-items-center sm:text-md text-3xl text-nowrap lg:text-2xl w-full font-semibold text_animation color_animation colorfull_text text-left">
            ❦ دنیای رنگی دیزاین لند❦
          </p>
        </Link>
        <li className="w-1/6">
          <Link
            href="/"
            className={`text-pink-500 text_shadow text-xs w-full sm:text-base text-nowrap p-1 px-3 flex flex-col items-center justify-center ${
              pathname === "/" && "!text-black border-b-2 border-black transition-all bg-[#00000060] rounded-2xl"
            }`}
          >
            <span className="text-xl">🏠</span>
            <span className="text-xs">صفحه اصلی</span>
          </Link>
        </li>
        <li
          className="flex flex-col items-center justify-center cursor-pointer text-xs sm:text-base text-nowrap p-1 text-pink-700 text_shadow relative w-1/6"
          onClick={() => setOpendesigns((prev) => !prev)}
          onBlur={() => setOpendesigns(false)}
          tabIndex={0} 
        >
          <span className="text-xl">📷</span>
          <span className="pr-1 text-xs">
            دیزاین ها
            <span className="pr-1">{opendesigns ? "↑" : "↓"}</span>
          </span>
          {opendesigns && (
            <ul onMouseDown={e=>e.preventDefault()} className="bg-gradient-to-b from-[#fff] via-[#fff] to-[#ffffff00] absolute flex flex-col justify-center items-start bg-gray-500 bg-opacity-50 text-center w-36 p-1 py-5 mt-2 h-fit rounded-2xl divide-r-[0.5px] border-r-[0.1px] gap-3 border-gray-400 divide-gray-400 right-0 top-full">
              <li
                className={`text-amber-600 py-1 ${
                  pathname === "/balloon" && "text-black border-b-2 border-black transition-all bg-[#00000060] rounded-2xl"
                } w-full`}
              >
                <Link href="/balloon">🎈بادکنک آرایی</Link>
              </li>
              <li
                className={`text-amber-700 py-1 ${
                  pathname === "/flower" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"
                } w-full`}
              >
                <Link href="/flower">🌺گل آرایی</Link>
              </li>
              <li
                className={`text-amber-800 py-1 ${
                  pathname === "/fruit" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"
                } w-full`}
              >
                <Link href="/fruit">🍇میوه آرایی</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="w-1/6">
          <Link
            href="/about"
            className={`text_shadow flex flex-col items-center justify-center text-purple-800 text-xs w-full sm:text-base text-nowrap p-1 ${
              pathname === "/about" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"
            }`}
          >
            <span className="text-xl">📩</span>
            <span className="text-xs">درباره ما</span>
          </Link>
        </li>
        <li className="w-1/6">
          <Link
            href="/learning"
            className={`flex flex-col items-center justify-center text-nowrap text_shadow text-pink-900 ${
              pathname === "/learning" && "text-black border-b-2 border-black transition-all bg-[#00000060] px-5 rounded-2xl"
            }`}
          >
            <span className="text-xl">🎓</span>
            <span className="text-xs">آموزش ها</span>
          </Link>
        </li>
        <li className="w-1/6">
          <Link
            href="/adminPanel"
            className="flex flex-col items-center justify-center text-pink-900 text-xs w-full sm:text-base text-nowrap p-1 text_shadow"
          >
            <span>🔐</span>
            <span>ادمین پنل</span>
          </Link>
        </li>
      </ul>
    </article>
  );
}
