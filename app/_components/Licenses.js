import Image from "next/image";

import t from "@/src/assets/images/teach/transparent teaching.png"

export default function Liecenses (){
    return(
        <>
        <section>
            <Image src={t} alt="1" />
            <p>دوره عملی 1 </p>
        </section>
        <section>
            <Image src={t} alt="1" />
            <p>دوره عملی 1 </p>
        </section>
        <section>
            <Image src={t} alt="1" />
            <p>دوره عملی 1 </p>
        </section>
        </>
    )
}