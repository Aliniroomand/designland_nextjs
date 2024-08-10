import Image from "next/image"
import Link from "next/link"
// images
import BG from "@/src/assets/images/Root/MainPlainBG_lg.jpg"
import Liecenses from "../_components/Licenses"
import instagram from "@/src/assets/images/contact us & comments/instagram.png"
import whatsapp from "@/src/assets/images/contact us & comments/whatsapp.png"
import call from "@/src/assets/images/contact us & comments/call.svg"
import us from "@/src/assets/images/contact us & comments/us.jpg"



export default function AboutUsPage (){
    const phoneNumber="+989171108983"
    return (
        <>
        <Image
            className=' fixed h-full z-[-1] w-screen right-0 bottom-0 object-cover object-bottom blur-[5px]'
            src={BG}
            placeholder='blur'
            quality={10}
            alt="BG"
            />
        <main className="flex flex-col items-center justify-start ">
            <h1 className=" w-full h-[5svh] bg-white text-teal-800 text-center text-3xl font-semibold p-1" >
                درباره ما 
            </h1>
            <article className="relative w-svw h-[50svh] top-0 flex flex-col gap-[5%] mx-[5%]">
                    <p className="absolute bottom-0 w-full break-words overflow-y-scroll z-20 h-1/3 bg-white bg-opacity-70 rounded-3xl p-3 ">
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                    <Image
                        src={us}
                        className="absolute  bottom-0 w-full h-full z-10 maskForImages"
                    />
            </article>

            <article>
                <h1>دوره های رسمی</h1>
                <section>
                    <Liecenses/>
                </section>
            </article>
            <h1>
                تماس با ما
            </h1>
            <article>
                <Link href="">
                    <Image width={50} src={whatsapp}/>
                </Link>
                <Link href={`tel:${phoneNumber}`}>
                    <Image width={50} src={call}/>
                </Link>
                <Link href="https://www.instagram.com/design.land.shiraz?igsh=MTZ3YnA5cnVmZ2wwNA==">
                    <Image width={50} src={instagram}/>
                </Link>
            </article>
        </main>
        </>
    )
}