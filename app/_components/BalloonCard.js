import Image from "next/image"

export default async function BalloonCard({infos}){
    const {name,category,Images,created_at,id}=await infos;
    return(
        <section className="flex flex-col relative w-52 h-48  neo_shadow rounded-xl p-3 bg-cyan-400 bg-opacity-50 border-r-[1px] border-[#ffffff82]">
            <Image src={Images} fill className="w-full h-full  absolute z-20 rounded-xl p-3" alt={`${name}`}/>
            <article className=" flex flex-col items-start justify-between z-30 absolute bottom-0 h-2/3 p-3 left-0 w-full bg-gradient-to-t from-black via-[#000000d0] to-transparent rounded-xl text-center ">
                <h3 className="text-pink-400 shadow-2xl text-lg font-semibold">
                    <span className="text-white ">
                    نام هنر:
                    </span>
                    {name}
                </h3>
                <h2 className="text-sm text-pink-400 self-center">
                     <span className="text-white ">
                     دسته بندی : 
                    </span> 
                    {category}
                </h2>
                <p className="text-purple-400 text-sm self-center">
                    <span className="text-white">
                    زمان بارگذاری:
                    </span>
                    {new Date(created_at).toLocaleDateString("fa-IR")}  

                </p>
            </article>
        </section>
    )
}