"use client"
import { useEffect } from "react";
import LoginForm from "../_components/LoginForm";
import { getCookie } from "../_lib/cookie";
import { useRouter } from "next/navigation";
import { newUser } from "../_lib/data_services";

const page = () => {
    const router = useRouter();
    const access_token=getCookie("access_token");
    // useEffect(()=>{
    //     access_token&&router.push("/adminPanel")
    // },[access_token])
    return (
        <article className=" bg-emerald-800 w-svw min-h-svh ">
            <LoginForm/>
        </article>
    );
};

export default page;