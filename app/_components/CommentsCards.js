import Image from "next/image"

import t from "@/src/assets/images/contact us & comments/user1.png"

export default function CommentsCards (){
    return(
    <ul className=" relative flex flex-row gap-4 items-center text-nowrap overflow-x-scroll right-[3svw] max-w-[86svw] h-[70svh] hide-scrollbar">

        <li className="flex-none h-[90%] rounded-3xl neo_shadow w-[60svw] sm:w-[30svw] bg-gradient-to-b to-teal-900 from-[#5eead584] bg-opacity-70 ">
            <Image className="w-32 h-32 mx-auto mt-3 neo_shadow aspect-square rounded-[50%]" src={t} alt="1" />
            <section className="h-2/3 w-[96%] left-[2%] flex flex-col items-center justify-between px-5">
                <h1 className="w-full bg-teal-300 rounded-2xl text-center text-teal-950" >علی نیرومند</h1>
                <p className="w-full h-1/2 text-wrap text-center overflow-clip ">خیلی خوب خیل خوب سبتمشنتسینم تش سئ نشتادسید ن  شسیتدشسید منب خیل خوشن</p>
            </section>
        </li>
        <li className="flex-none h-[90%] rounded-3xl neo_shadow w-[60svw] sm:w-[30svw] bg-gradient-to-b to-teal-900 from-[#5eead584] bg-opacity-70 ">
            <Image className="w-32 h-32 mx-auto mt-3 neo_shadow aspect-square rounded-[50%]" src={t} alt="1" />
            <section className="h-2/3 w-[96%] left-[2%] flex flex-col items-center justify-between px-5">
                <h1 className="w-full bg-teal-300 rounded-2xl text-center text-teal-950" >علی نیرومند</h1>
                <p className="w-full h-1/2 text-wrap text-center overflow-clip ">خیلی خوب خیل خوب سبتمشنتسینم تش سئ نشتادسید ن  شسیتدشسید منب خیل خوشن</p>
            </section>
        </li>
        <li className="flex-none h-[90%] rounded-3xl neo_shadow w-[60svw] sm:w-[30svw] bg-gradient-to-b to-teal-900 from-[#5eead584] bg-opacity-70 ">
            <Image className="w-32 h-32 mx-auto mt-3 neo_shadow aspect-square rounded-[50%]" src={t} alt="1" />
            <section className="h-2/3 w-[96%] left-[2%] flex flex-col items-center justify-between px-5">
                <h1 className="w-full bg-teal-300 rounded-2xl text-center text-teal-950" >علی نیرومند</h1>
                <p className="w-full h-1/2 text-wrap text-center overflow-clip ">خیلی خوب خیل خوب سبتمشنتسینم تش سئ نشتادسید ن  شسیتدشسید منب خیل خوشن</p>
            </section>
        </li>
        <li className="flex-none h-[90%] rounded-3xl neo_shadow w-[60svw] sm:w-[30svw] bg-gradient-to-b to-teal-900 from-[#5eead584] bg-opacity-70 ">
            <Image className="w-32 h-32 mx-auto mt-3 neo_shadow aspect-square rounded-[50%]" src={t} alt="1" />
            <section className="h-2/3 w-[96%] left-[2%] flex flex-col items-center justify-between px-5">
                <h1 className="w-full bg-teal-300 rounded-2xl text-center text-teal-950" >علی نیرومند</h1>
                <p className="w-full h-1/2 text-wrap text-center overflow-clip ">خیلی خوب خیل خوب سبتمشنتسینم تش سئ نشتادسید ن  شسیتدشسید منب خیل خوشن</p>
            </section>
        </li>
        <li className="flex-none h-[90%] rounded-3xl neo_shadow w-[60svw] sm:w-[30svw] bg-gradient-to-b to-teal-900 from-[#5eead584] bg-opacity-70 ">
            <Image className="w-32 h-32 mx-auto mt-3 neo_shadow aspect-square rounded-[50%]" src={t} alt="1" />
            <section className="h-2/3 w-[96%] left-[2%] flex flex-col items-center justify-between px-5">
                <h1 className="w-full bg-teal-300 rounded-2xl text-center text-teal-950" >علی نیرومند</h1>
                <p className="w-full h-1/2 text-wrap text-center overflow-clip ">خیلی خوب خیل خوب سبتمشنتسینم تش سئ نشتادسید ن  شسیتدشسید منب خیل خوشن</p>
            </section>
        </li>




    </ul>
    )
}