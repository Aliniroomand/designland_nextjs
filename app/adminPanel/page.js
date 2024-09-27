"use client"
import { useEffect } from "react"
import { getCookie } from "../_lib/cookie"
import { useRouter } from "next/navigation";

export default function page(){
    const access_token=getCookie("access_token");
    const router=useRouter()


    useEffect(()=>{
        !access_token && router.push("/login")
    },[access_token])


    return(
        <main>
            <h1>به حساب کاربریتون خوش اومدید </h1>
            <section></section>
            <section></section>
        </main>
    )
}