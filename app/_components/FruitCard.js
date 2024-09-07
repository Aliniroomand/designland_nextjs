import Image from "next/image"
import Link from "next/link";

export default async function FruitCard({infos}){
    const {name,category,Images,created_at,id}=await infos;
    return(
        <Link href={`/fruit/${id}`} className="flex flex-col relative w-52 h-52 mx-auto neo_shadow rounded-xl bg-yellow-600 bg-opacity-50 border-r-[1px] border-[#ffffff82]">
            <Image src={Images} fill className="w-52 h-52 rounded-xl absolute z-20 " alt={`${name}`}/>
            <article className=" flex flex-col items-center justify-between z-30 absolute bottom-0 h-1/2 p-3 left-0 w-full bg-gradient-to-t from-[#ffffff] via-[#ffffff] to-[#ffffff31] rounded-xl text-center ">
                <h3 className="text-yellow-700 shadow-2xl text-lg font-semibold">
                    <span className="text-yellow-950 ">
                    نام هنر:
                    </span>
                    {name}
                </h3>

                <h2 className="text-sm text-yellow-700 self-center">
                <span className="text-yellow-950 ">
                    کد:
                    </span>
                    {id}
                </h2>
                <h2 className="text-sm text-yellow-700 self-center">
                     <span className="text-yellow-950 ">
                     دسته بندی : 
                    </span> 
                    {category}
                </h2>

            </article>
        </Link>
    )
}