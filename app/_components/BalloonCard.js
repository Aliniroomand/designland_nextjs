import Image from "next/image"
import Link from "next/link";

export default async function BalloonCard({infos}){
    const {name,Images,id}=await infos;
    return(
        <Link href={`/balloon/${id}`} className="flex flex-col relative w-52 h-52  neo_shadow rounded-xl overflow-hidden">
            <Image src={Images} fill className="w-52 h-52 hover:scale-150 transition-all absolute z-20 rounded-xl " alt={`${name}`}/>
            <article className=" flex flex-col items-center justify-end z-30 absolute bottom-0 h-1/3  left-0 w-full bg-gradient-to-t from-[#ffffff] via-[#ffffffbb] to-[#ffffff00] rounded-xl text-center  ">
                <h3 className="text-yellow-950 shadow-2xl text-base text-wrap font-semibold">
                    {name}
                </h3>

                <h2 className="text-base text-yellow-950 self-center">
                <span className="text-black ">
                    کد:
                    </span>
                    {id}
                </h2>


            </article>
        </Link>
    )
}