import Image from "next/image"
import Link from "next/link";

export default async function FruitCard({infos}){
    const {name,Images,id}=await infos;
    return(
        <Link href={`/fruit/${id}`} className="flex-none mx-3 relative w-36 h-36 lg:w-48 lg:h-48 neo_shadow rounded-xl overflow-hidden">
        <Image src={Images.split(",")[0]} placeholder="blur" blurDataURL="blur" fill className="w-52 h-52 hover:scale-150 transition-all  absolute z-20 rounded-xl " alt={`${name}`}/>
        <article className=" flex flex-col items-center justify-end z-30 absolute bottom-0 h-fit  left-0 w-full bg-gradient-to-t from-[#000000b7] to-[#00000077] rounded-xl text-center  ">
            <h3 className="text-yellow-100 shadow-xl text-base text-wrap font-semibold">
                {name}
            </h3>

            <h2 className="text-sm text-yellow-300 self-center">
            <span className="text-white font-semibold text-base">
                کد:
                </span>
                {id}
            </h2>


        </article>
    </Link>
    )
}