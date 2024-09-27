"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { loginUser } from '../_lib/data_services';
import { setCookie } from '../_lib/cookie';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';



const LoginForm = () => {
    const[infos,setInfos]=useState({
    username:"",
    password:""
        });
    const[error,setError]=useState({
        username:false,
        password:false
        })

    const emailREGEX=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordREGEX=/^[0-9]{8}$/;

    const router=useRouter()




    const changeHandler=(e)=>{
        setInfos({...infos,[e.target.id]:e.target.value})
    }

    const submitHandler=async(e)=>{
        e.preventDefault();

        // error handling
        if(infos.username==="" || infos.password===""){
            toast.error("لطفا همه فیلد هارو وارد کنید")
            setError({
                username:true,
                password:true
            })
            return
    }

    if(!emailREGEX.test(infos.username) && passwordREGEX.test(infos.password) ){
        toast.error("ایمیل یا شماره را به شکل صحیح وارد کنید")
        setError({username:true})
        return
    }
    if(emailREGEX.test(infos.username) && !passwordREGEX.test(infos.password) ){
        toast.error(" پسورد را به شکل صحیح وارد کنید")
        setError({password:true})
        return
    }
    if(!emailREGEX.test(infos.username) && !passwordREGEX.test(infos.password) ){
        toast.error(" مقادیر را به شکل صحیح وارد کنید")
        setError({
            username:true,
            password:true
        })
        return
    }
    if(emailREGEX.test(infos.username) && passwordREGEX.test(infos.password) ){
        setError({
            username:false,
            password:false
        })
        const { session, user } = await loginUser(infos.username, infos.password);
        if (user && session) {
            toast.success("ورود با موفقیت انجام شد ، خوش آمدید");
            setCookie(session);
            router.push("/adminPanel")
        }
    }

     //   ___ error handling____



      
   
}
    return (
        <form onSubmit={submitHandler}
        className="absolute lg:w-1/3 lg:right-1/3 w-full top-[10%] lg:min-h-2/3 bg-darkBG2  m-auto flex flex-col items-center justify-between p-4 rounded-lg neo_shadow">
            <h1 className="text-emerald-200 text-2xl font-semibold bg-emerald-800 py-4 w-full text-center rounded-full border-[0.5px] border-emerald-200 " >
            ورود به پنل ادمین
            </h1>
            <label className="text-emerald-200">
            شماره همراه یا آدرس ایمیل :
            </label>
            <input id="username"
                className={`bg-inherit neo_shadow w-2/3 h-10  rounded-full text-center text-emerald-200 ${
                    error.username && " bg-red-800 bg-opacity-85"
                }  `}
                onChange={changeHandler}
            />

            <label className="text-emerald-200">
                رمز ورود
            </label>
            <input id="password"  className={`bg-inherit neo_shadow w-2/3 h-10  rounded-full text-center text-emerald-200 ${
                    error.password &&  " bg-red-800 bg-opacity-85"
                }  `}
                onChange={changeHandler}
            
            />

            <section className=" w-full h-8 mt-5 flex justify-evenly ">
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-emerald-200 hover:shadow-none  neo_shadow transition-all hover:border  hover:border-emerald-200 ">ورود</button>
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-emerald-200 hover:shadow-none neo_shadow transition-all  hover:border hover:border-emerald-200">بازگشت</button>
            </section>
    </form>
    );
};

export default LoginForm;