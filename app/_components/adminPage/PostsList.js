import React from 'react';
import Post from './post';
import Loader from '@/app/loading';
import { Suspense } from 'react';

const PostsList = () => {
    return (
        <article className=" h-full border-[0.5px] border-black w-[96%] mt-1 shadow-darkBox rounded-2xl overflow-y-scroll" >
            <header className="flex justify-around">

            <h1 className="text-xl neo_shadow w-full rounded-full bg-teal-400">لیست پستها</h1>
            <section className="text-xs border-none  ">
                مرتب کردن بر اساس : 
                    <select className="outline-none">
                        <option  >دسته بندی</option>
                        <option >تاریخ بارگذاری</option>
                        <option >کد</option>
                    </select>
            </section>

            </header>
            <Suspense fallback={<Loader/>} >
            <main >
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </main>
            </Suspense>
        </article>
    );
};

export default PostsList;