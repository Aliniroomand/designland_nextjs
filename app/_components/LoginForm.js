"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { loginUser } from '../_lib/data_services';

const LoginForm = () => {
const[infos,setInfos]=useState({
    username:"",
    password:""
});
const[passError,setPassError]=useState(false)
const[userError,setUserError]=useState(false)

const submitHandler=(e)=>{
    e.preventDefault();
    const emailREG=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordREG=/^[0-9]{8}$/;
    const errorOfAllFields=!infos.username || infos.username==="" ||!infos.password || infos.password==="";
    const errorOFUserName=infos.username && !emailREG.test(infos.username);
    const errorOfPassword=infos.password && !passwordREG.test(infos.password);
    // erro handling


    if(errorOfAllFields){
        toast.error("لطفا تمامی مقادیر را وارد کنید")
        setUserError(true)
        setPassError(true)

    }
    if(errorOFUserName){
        toast.error("لطفا ایمیل را به درستی وارد کنید")
        setUserError(true)
    }
    if(errorOfPassword){
        toast.error("پسورد را به شکل صحیح وارد کنید")
        setPassError(true)
    }else{

        loginUser(infos.username,infos.password)
    }


}

    return (
        <form onSubmit={submitHandler}
        className="absolute lg:w-1/3 lg:right-1/3 w-full top-[10%] lg:h-2/3 bg-darkBG2  m-auto flex flex-col items-center justify-between p-4 rounded-lg neo_shadow">
            <h1 className="text-purple-200 text-2xl font-semibold bg-[#4e375a] py-4 w-full text-center rounded-full border-[0.5px] border-fuchsia-200 " >
            ورود به پنل ادمین
            </h1>
            <label className="text-purple-300">
            شماره همراه یا آدرس ایمیل :
            </label>
            <input
                className={`bg-inherit neo_shadow w-2/3 h-10  rounded-full text-center text-fuchsia-100 ${
                    passError && "border-4 border-red-700"
                }  `}
                onChange={(e)=>setInfos({...infos,username:e.target.value})}
            />

            <label className="text-purple-300">
                رمز ورود
            </label>
            <input className={`bg-inherit neo_shadow w-2/3 h-10  rounded-full text-center text-fuchsia-100 ${
                    userError && "border-4 border-red-700"
                }  `}
                onChange={(e)=>setInfos({...infos,password:e.target.value})}
            
            />

            <section className=" w-full h-12 flex justify-evenly ">
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-fuchsia-200 hover:shadow-none  neo_shadow transition-all hover:border  hover:border-fuchsia-300 ">ورود</button>
                <button className=" h-full w-1/3 bg-darkBG3 rounded-full text-fuchsia-200 hover:shadow-none neo_shadow transition-all  hover:border hover:border-fuchsia-300">بازگشت</button>
            </section>
    </form>
    );
};

export default LoginForm;