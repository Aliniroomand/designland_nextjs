import Image from "next/image";

import t from "@/src/assets/images/teach/transparent teaching.png"

export default function Liecenses (){
    return(
        <article className="flex flex-row w-full divide-x divide-teal-400 p-4 text-nowrap bg-gradient-to-b from-transparent  to-teal-600 rounded-b-3xl lg:rounded-none lg:rounded-l-3xl">
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