import Image from "next/image"
import Link from "next/link";

export default async function FlowerCard({infos}){
    const {name,category,Images,created_at,id}=await infos;
    return(
        <Link href={`/flower/${id}`} className="flex flex-col relative w-52 h-48  neo_shadow rounded-xl p-3 bg-yellow-600 bg-opacity-50 border-r-[1px] border-[#ffffff82]">
            <Image src={Images} fill className="w-full h-full  absolute z-20 rounded-xl p-3" alt={`${name}`}/>
            <article className=" flex flex-col items-start justify-between z-30 absolute bottom-0 h-full p-3 left-0 w-full bg-gradient-to-t from-[#000000cd] via-[#0000005d] to-[#ffffff47] rounded-xl text-center ">
                <h3 className="text-yellow-300 shadow-2xl text-lg font-semibold">
                    <span className="text-white ">
                    نام هنر:
                    </span>
                    {name}
                </h3>

                <h2 className="text-sm text-yellow-300 self-center">
                <span className="text-white ">
                    کد:
                    </span>
                    {id}
                </h2>
                <h2 className="text-sm text-yellow-300 self-center">
                     <span className="text-white ">
                     دسته بندی : 
                    </span> 
                    {category}
                </h2>

            </article>
        </Link>
    )
}