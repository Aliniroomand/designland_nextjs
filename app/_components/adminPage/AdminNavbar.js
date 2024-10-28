"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminNavbar = () => {
    const path=usePathname();
    console.log(path);
    return (
        <header>
            <h1 className="text-center text-teal-900">به حساب کاربریتون خوش اومدید </h1>
            <section className="w-full flex flex-row items-center text-center md:flex-col md:items-start md:h-full md:gap-3 text-teal-950 mt-5 ">

            <Link
            className={`border-l-2 border-teal-900 text-[10px] md:text-xs h-10 grid items-center rounded-full px-1 w-1/4 md:w-full  bg-teal-300 ${path=== "/adminPanel/posts"&& "bg-teal-900 text-teal-300"} transition-all`}
            href='/adminPanel/posts'
            >
            مدیریت پست ها
            </Link>
            <Link
            className={`border-l-2 border-teal-900 text-[10px] md:text-xs h-10 grid items-center rounded-full px-1 w-1/4 md:w-full  bg-teal-300 ${path=== "/adminPanel/categories"&& "bg-teal-900 text-teal-300"} transition-all`}
            href='/adminPanel/categories'>
            مدیریت دسته ها
            </Link>
            <Link
            className={`border-l-2 border-teal-900 text-[10px] md:text-xs h-10 grid items-center rounded-full px-1 w-1/4 md:w-full  bg-teal-300 ${path=== "/adminPanel/banner-options"&& "bg-teal-900 text-teal-300"} transition-all`}
            href='/adminPanel/banner-options'>
            تنظیمات بنر سایت
            </Link>
            <Link
            className={`border-l-2 border-teal-900 text-[10px] md:text-xs h-10 grid items-center rounded-full px-1 w-1/4 md:w-full  bg-teal-300 ${path=== "/adminPanel/aboutUs-configs"&& "bg-teal-900 text-teal-300"} transition-all`}
            href='/adminPanel/aboutUs-configs'>
            تنظیمات درباره ما
            </Link>
        </section>
        </header>
    );
};

export default AdminNavbar;