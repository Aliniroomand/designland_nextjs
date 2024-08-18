import Image from "next/image"

export default async function BalloonCard({infos}){
    const {name,category,Images,created_at,id}=await infos;
    console.log(name);
    return(
        <section className="flex relative w-full h-1/2">
            <Image src={Images}fill className="object-cover" alt={`${name}`}/>
            <article className="flex-grow flex ">
                <h3 className="text-cyan-300">
                    {name}
                </h3>
                <h2>
                    {category}
                </h2>
            </article>
        </section>
    )
}