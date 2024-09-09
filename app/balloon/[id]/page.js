
import Images_slider from "@/app/_components/Images_slider";
import Similar_items_for_Balloon from "@/app/_components/Similar_items_for_Balloon";
import { getBalloonsWithID } from "@/app/_lib/data_services";
// image
import BG from "@/src/assets/images/balloon/BG_for_balloonINF.jpeg"
import Image from "next/image";


export default async function Page({params}){
    const {id,name,Images,category}= await getBalloonsWithID(params.id)
    return(
        <section className="flex flex-col  justify-between" >
            <Image src={BG} quality={100} placeholder="blur" alt="background" className="fixed object-cover h-screen w-screen object-right z-[-1]" />  
                <section className="relative h-[65svh] w-full lg:w-[50vw] lg:h-[75vh] mx-auto top-[1vh] flex flex-col items-center justify-start  rounded-3xl  font-semibold px-2  overflow-hidden">
                    <Images_slider images={Images} id={id}/>
                    <section className=" absolute h-1/4 top-0 w-full  rounded-3xl flex flex-col items-center justify-start p-1 backdrop-blur-none text-center z-30 bg-gradient-to-b from-white via-[#ffffffd6] to-transparent">
                        <h1 className="text-xl lg:text-2xl w-full font-bold h-1/4">
                            {name}
                        </h1>
                        <h2 className="text-black text-xl lg:text-2xl">
                            <span className="text-purple-950 text-xl">
                            کد:
                            </span>
                            {id}  
                        </h2>

                        <section className="lg:text-base">
                            افزودن به پسندیده ها
                        </section>
                    </section>
                </section>
                <section className=" flex flex-col items-center justify-between h-[30vh]  w-[90%] bg-[#0000007e] my-3 ">
                    <h1 className=" w-full  text-center text-white text-2xl" >موارد مشابه</h1>
                    <Similar_items_for_Balloon category={category}/>
                </section>
        </section>

    )
}