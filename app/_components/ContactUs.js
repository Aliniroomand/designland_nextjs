// images
import instagram from "@/src/assets/images/contact us & comments/instagram.svg"
import whatsapp from "@/src/assets/images/contact us & comments/whatsApp.png"
import call from "@/src/assets/images/contact us & comments/call.svg"
import Link from "next/link"
import Image from "next/image"


export default function ContactUs(){
    const phoneNumber="+989171108983"
    return(
        <article  className={`fixed z-40 bottom-0 lg:static fade_in_animation h-12  rounded-3xl neo_shadow w-svw right-0 flex flex-row-reverse justify-end items-center bg-pink-100 bg-opacity-70  lg:w-1/2  text-pink-800 `}>
        <h1 className=" h-[6svh] lg:h-[10svh] text-center text-xl font-semibold p-1 text_shadow rounded-t-3xl lg:w-1/4 grid place-items-center">
        تماس با ما
        </h1>
        <article className='flex flex-row justify-center lg:justify-evenly lg:w-1/4 items-center   rounded-b-3xl'>
        <Link className='hover:wobble' href="">
            <Image  width={30} src={whatsapp} alt="social medias logo" />
        </Link>
        <Link className='hover:wobble' href={`tel:${phoneNumber}`}>
            <Image  width={30} src={call} alt="social medias logo" />
        </Link>
        <Link className='hover:wobble' href="https://www.instagram.com/design.land.shiraz?igsh=MTZ3YnA5cnVmZ2wwNA==">
            <Image  width={30} src={instagram} alt="social medias logo" />
        </Link>
        </article>
    </article>
    )
}