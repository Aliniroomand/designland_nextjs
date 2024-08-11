import Image from "next/image";

import t from "@/src/assets/images/teach/transparent teaching.png"

export default function Liecenses (){
    return(
        <article className="flex flex-row w-svw divide-x divide-violet-900 p-4">
            <section >
                <Image  src={t} alt="1" />
                <p>دوره عملی 1 </p>
            </section>
            <section>
                <Image  src={t} alt="1" />
                <p>دوره عملی 1 </p>
            </section>
            <section>
                <Image  src={t} alt="1" />
                <p>دوره عملی 1 </p>
            </section>
            <section>
                <Image  src={t} alt="1" />
                <p>دوره عملی 1 </p>
            </section>

        </article>
        
    )
}