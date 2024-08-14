
import Image from 'next/image';
import Link from 'next/link';

// images
import BG from "@/src/assets/images/Root/MainPlainBG_lg.jpg"
import balloon from "@/src/assets/images/Root/balloon_transparent.png"
import flower from "@/src/assets/images/Root/flower_transparent.png"
import fruit from "@/src/assets/images/Root/fruit_transparent.png"
import contactUs from "@/src/assets/images/Root/contactUs_transparent.png"
import learning from "@/src/assets/images/Root/teach_transparent.png"
import rope from "@/src/assets/images/Root/Rope.png"
import stick from "@/src/assets/images/Root/stick.png"
import example from "@/src/assets/images/Root/new_design_with_flower___.jpg"



export default function MainPageComp(){

return(
    <>

    <main  className='relative flex flex-col justify-between items-center'>
        {/* Background */}
        <Image
            className=' fixed h-full z-[-1] w-full right-0 bottom-0 object-cover object-left-bottom blur-[1px]'
            src={BG}
            placeholder='blur'
            quality={10}
            alt="BG"
        />

        {/* Title Part */}
            <p className='fixed z-30 h-[13svh] sm:h-[15svh] top-0 sm:text-xl text-xl text-center bg-white backdrop-blur-[1px] bg-opacity-85 text-slate-900 w-full font-semibold sm:py-2 py-6 text_animation' style={{ textShadow: '0px 0px 5px #fff' }}>
                به دنیای رنگی دیزاین لند خوش اومدی <br />برای دیدن قسمتهای مختلف هنر ما اسکرول کن
            </p>
        {/*___________Title Part */}

        {/* Banner part  */}
        <article className='relative w-full h-[40svh] top-[18svh] py-3 text-center overflow-visible '>
    <h1 className='text-2xl font-bold h-10'>
        پرطرفدار ها
    </h1>
    <Image className='absolute w-full top-12 scale-y-150 right-0 z-[19] ' src={rope} alt='banner rope' />
    <section className='absolute top-10 flex flex-row gap-2 text-nowrap overflow-x-scroll overflow-visible w-full  '>


        <section className='relative slidingForBanner_animation moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
            <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
            <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
        </section>
        <section className='relative slidingForBanner_animation moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
            <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
            <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
        </section>
        <section className='relative slidingForBanner_animation moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
            <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
            <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
        </section>
        <section className='relative slidingForBanner_animation moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
            <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
            <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
        </section>
        <section className='relative slidingForBanner_animation moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
            <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
            <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
        </section>

    </section>
</article>
        {/*__________Banner part  */}

        {/* Selecting Part */}
        <section className='relative z-20 w-full h-[87svh] top-[13svh] overflow-y-scroll overflow-x-hidden lg:overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-stretch gap-[20svh]'>
            <Link 
                href="balloon"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={balloon} alt="balloon designs"/>
                    <p className='absolute self-center text-4xl font-bold sm:text-xl bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center text_animation' >
                    هنرهای با بادکنک
                    </p>
            </Link>
            <Link 
                href="flower"
                className="relative z-30 w-full h-[50svh] wobble_with_delay grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={flower} alt="flower designs"/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    هنرهای با گل
                    </p>
            </Link>
            <Link 
                href="fruit"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={fruit} alt="fruit designs"/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    هنرهای با میوه
                    </p>
            </Link>
            <Link 
                href="about"
                className="relative z-30 w-full h-[50svh] wobble_with_delay grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={contactUs} alt="contact us"/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    درباره ما <br></br> وارتباط با ما
                    </p>
            </Link>
            <Link 
                href="learning"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={learning} alt="learning"/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    آموزش و یادگیری
                    </p>
            </Link>

        </section>
    </main>
    
</>

)}