"use client"
import React from 'react';

const LoginForm = () => {
    return (
        <form 
        className="absolute lg:w-1/3 lg:right-1/3 w-full top-[10%] lg:h-2/3 bg-darkBG2  m-auto flex flex-col items-center justify-between p-4 rounded-lg neo_shadow">
            <h1 className="text-purple-200 text-2xl font-semibold bg-[#4e375a] py-4 w-full text-center rounded-full border-[0.5px] border-fuchsia-200 " >
            ورود به پنل ادمین
            </h1>
            <label className="text-purple-300">
            شماره همراه یا آدرس ایمیل :
            </label>
            <input
                className="bg-inherit neo_shadow w-2/3 h-10  rounded-full text-center text-fuchsia-100  "
            />

            <label className="text-purple-300">
                رمز ورود
            </label>
            <input className="bg-inherit neo_shadow w-2/3 h-10 rounded-full  text-center text-fuchsia-200 "/>

            <section className=" w-full h-12 flex justify-evenly ">
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-fuchsia-200 hover:shadow-none  neo_shadow transition-all hover:border  hover:border-fuchsia-300 ">ورود</button>
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-fuchsia-200 hover:shadow-none neo_shadow transition-all  hover:border hover:border-fuchsia-300">بازگشت</button>
            </section>
    </form>
    );
};

export default LoginForm;