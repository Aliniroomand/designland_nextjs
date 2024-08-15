"use client"
import { useInView } from 'react-intersection-observer';
import Image from "next/image"
import Link from "next/link"
// images
import BG from "@/src/assets/images/contact us & comments/BG2.jpg"
import BG2 from "@/src/assets/images/Root/borderBG.png"
import instagram from "@/src/assets/images/contact us & comments/instagram.svg"
import whatsapp from "@/src/assets/images/contact us & comments/whatsApp.png"
import call from "@/src/assets/images/contact us & comments/call.svg"
import us from "@/src/assets/images/contact us & comments/us.jpg"
// components
import CommentsCards from '../_components/CommentsCards';
import Liecenses from "../_components/Licenses"


export default function AboutUsPage() {
  const phoneNumber = "+989171108983";
  const { ref:ref1, inView:inView1 } = useInView({
    threshold: 0.1,
    initialInView:true,
    triggerOnce:true,
    delay:10000,
    trackVisibility:true
  });
  const { ref:ref2, inView:inView2 } = useInView({
    threshold: 0.1,
    initialInView:true,
    triggerOnce:true
  });
  const { ref:ref3, inView:inView3 } = useInView({
    threshold: 0.4,
    initialInView:true,
    triggerOnce:true
  });
  const { ref:ref4, inView:inView4 } = useInView({
    threshold: 0.4,
    initialInView:true,
    triggerOnce:true
  });

  return (
    <>
      <Image
        className="fixed h-[100vh] z-[-1] w-[100vw] right-0 bottom-0 object-cover object-right blur-[2px]"
        src={BG}
        placeholder="blur"
        quality={80}
        alt="BG"
      />

      <main className="flex flex-col items-center justify-start text-yellow-400 py-4 ">
        <h1 className="w-[90svw] right-[5%] h-[10svh] grid place-items-center bg-gradient-to-b from-teal-400 to-transparent  bg-opacity-70  text-yellow-400 text-center text-2xl sm:text-2xl font-semibold p-1 rounded-t-3xl border-t-2 border-r-2  text_shadow shadow-xl sm:rounded-full">
          داستان ما
        </h1>
        <article ref={ref2} className={`relative w-[90svw] h-[60svh] lg:h-[90svh] top-0 lg:top-5 flex flex-col lg:flex-row gap-[5%] mx-[5%] ${inView2 && "fade_in_animation"  } rounded-3xl`}>
          <p className="absolute bottom-0 w-full lg:w-1/3 lg:right-[10%] lg:h-fit lg:top-1/4 break-words overflow-y-scroll z-20 h-1/3  break-all text-wrap  bg-gradient-to-b lg:bg-gradient-to-r lg:from-teal-600 lg:via-teal-300 lg:to-teal-600 lg:overflow-hidden from-transparent   to-teal-400 bg-opacity-90 rounded-b-3xl lg:rounded-3xl lg:p-5  p-1 text-center text_shadow lg:text-black lg:neo_shadow  ">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   

          </p>
          <Image
            src={us}
            className="absolute bottom-0 w-full lg:w-1/3 h-full aspect-square z-10 rounded-b-3xl  border-r-2 images_shadow neo_shadow lg:left-[15%] lg:rounded-full  "
            alt="about us image"
            />
        </article>

        <article ref={ref1} className={`mt-10 mb-5 ${inView1 &&"fade_in_animation " } rounded-3xl  w-[90svw] right-[5svw] neo_shadow sm:flex sm:items-center sm:justify-start sm:bg-teal-400 sm:bg-opacity-60` }>
          <h1 className="w-full h-[6svh] sm:h-full sm:bg-none bg-gradient-to-b from-teal-400 via-teal-400 to-[#ffffff00] bg-opacity-70  text-yellow-200 lg text-center text-2xl sm:text-xl font-semibold p-1 text_shadow rounded-3xl mb-3 ">
            دوره های رسمی
          </h1>
          <section className=' overflow-x-scroll hide-scrollbar'>
            <Liecenses />
          </section>
        </article>

        <article  ref={ref4} className={`mb-20  ${inView4 && "fade_in_animation" } rounded-3xl  w-[90svw] right-[5svw] neo_shadow  sm:bg-teal-400 sm:bg-opacity-70`}>
        <h1 className=" grid place-items-center w-full h-[9svh] bg-teal-400 bg-opacity-70  text-yellow-200 text-center text-2xl sm:text-xl font-semibold p-1 text_shadow rounded-t-3xl border-b-2 sm:border-none sm:bg-transparent">
            نظرات مشتریان
            </h1>
            <CommentsCards />
        </article>

        <article ref={ref3} className={`mb-5  ${inView3 && "fade_in_animation" } rounded-3xl neo_shadow w-[90svw] right-[5svw] lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center bg-gradient-to-r from-teal-600 via-teal-300 to-teal-600  text-yellow-200 `}>
            <h1 className="w-full h-[6svh] lg:h-[10svh] text-center text-2xl font-semibold p-1 text_shadow rounded-t-3xl lg:w-1/4 grid place-items-center">
            تماس با ما
            </h1>
            <article className='flex flex-row justify-center lg:justify-evenly lg:w-1/4 items-center   rounded-b-3xl'>
            <Link className='hover:wobble' href="">
                <Image  width={50} src={whatsapp} alt="social medias logo" />
            </Link>
            <Link className='hover:wobble' href={`tel:${phoneNumber}`}>
                <Image  width={50} src={call} alt="social medias logo" />
            </Link>
            <Link className='hover:wobble' href="https://www.instagram.com/design.land.shiraz?igsh=MTZ3YnA5cnVmZ2wwNA==">
                <Image  width={50} src={instagram} alt="social medias logo" />
            </Link>
            </article>
        </article>

      </main>
    </>
  );
}