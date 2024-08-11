import Image from "next/image"

import t from "@/src/assets/images/teach/transparent teaching.png"


export default function CommentsCards (){
    return(
        <article className="flex flex-row overflow-x-scroll w-svw ">
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
            <section className="w-96 flex flex-col h-full" >
                <Image className="w-1/2 h-1/2" src={t} alt="1" />
                <p className="w-1/2 h-1/2">دوره عملی 1 </p>
            </section>
        </article>
    )
}