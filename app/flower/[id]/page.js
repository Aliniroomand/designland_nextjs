import { getFlowersWithID } from "@/app/_lib/data_services";
// image
import BG from "@/src/assets/images/balloon/BG_for_balloonINF.jpeg"
import Image from "next/image";


export default async function Page({params}){
    const {created_at,id,name,category,Images}= await getFlowersWithID(params.id)
    return(
        <section >
            <Image src={BG} quality={100} placeholder="blur" alt="background" className="fixed object-cover h-screen w-screen object-right z-[-1]" />  
                <section className="relative h-[90vh] w-[80vw] lg:w-[50vw] mx-auto top-[5vh] flex flex-col items-center justify-start neo_shadow rounded-3xl bg-[#ffffffa6] font-semibold px-2">
                    <Image src={Images} width={300} height={100} layout="fixed" className=" h-1/2 min-w-[80%] max-w-[100%] rounded-3xl " alt={`عکس بادکنک آرایی کد ${id}`}/>
                    <section className="h-1/2 top-1/2 rounded-3xl flex flex-col items-center justify-between py-5 backdrop-blur-none text-center">
                        <h1 className="text-4xl lg:text-2xl w-full font-bold h-1/4">
                            {name}
                        </h1>
                        <h2 className="text-black text-4xl lg:text-2xl">
                            <span className="text-purple-950 text-2xl">
                            کد:
                            </span>
                            {id}  
                        </h2>
                        <p className="text-black text-2xl lg:text-base self-center">
                            <span className="text-purple-950 text-2xl lg:text-base">
                            دسته بندی :
                            </span>
                            {category}  
                        </p>
                        <p className="text-black text-xl lg:text-base self-center">
                            <span className="text-purple-950 text-xl lg:text-base">
                            زمان بارگذاری:
                            </span>
                            {new Date(created_at).toLocaleDateString("fa-IR")}  
                        </p>
                        <section className="lg:text-base">
                            افزودن به پسندیده ها
                        </section>
                    </section>
                </section>
        </section>

    )
}