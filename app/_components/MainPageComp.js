
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
import ContactUs from './ContactUs';



export default function MainPageComp(){

return(
    <>

    <main  className='relative flex flex-col justify-between items-center hide-scrollbar '>
        {/* Background */}
        <Image
            className=' fixed h-svh z-[-1] w-svw right-0 bottom-0 object-cover object-left-bottom blur-[1px]'
            src={BG}
            placeholder='blur'
            quality={10}
            alt="BG"
        />

        {/* Title Part */}
            <p className='fixed z-30 h-[10svh] sm:h-[15svh] top-0 sm:text-xl text-3xl grid place-items-center lg:text-3xl backdrop-blur w-full font-semibold sm:py-2 py-3 text_animation color_animation colorfull_text shadow-2xl'>
            ❦ دنیای رنگی دیزاین لند❦
            </p>
        {/*___________Title Part */}

        {/* Banner part  */}
        <section className='relative z-20 w-full h-[90svh] top-[10svh] lg:top-[13svh] overflow-y-scroll overflow-x-hidden md:overflow-y-visible flex flex-col lg:flex-col lg:items-center items-center justify-between lg:justify-stretch gap-10 hide-scrollbar'>
            <article className='relative w-full h-[30svh] top-[0svh] py-3 md:py-6 text-center overflow-visible bg-gradient-to-t from-transparent via-white to-[#ffffff00] bg-opacity-50'>
                <h1 className='text-lg font-bold lg:text-xl h-10'>
                    پرطرفدار ها
                </h1>
                <Image className='absolute w-full md:h-10 top-12 md:top-14 scale-y-150 right-0 z-[19] ' src={rope} alt='banner rope' />
                <section className='absolute top-10 flex flex-row md:justify-evenly gap-2 text-nowrap overflow-x-scroll overflow-visible w-full pb-5 md:top-14  '>


                    <section className='relative  moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
                        <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
                        <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
                    </section>
                    <section className='relative  moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
                        <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
                        <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
                    </section>
                    <section className='relative  moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
                        <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
                        <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
                    </section>
                    <section className='relative  moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
                        <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
                        <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
                    </section>
                    <section className='relative  moveZ flex-none w-32 h-44 top-18 z-[20] overflow-visible'>
                        <Image src={stick} className='absolute  w-4 z-[70]  mx-14' alt='image sticker' />
                        <Image src={example} className='absolute w-full rounded-2xl neo_shadow h-4/5 bottom-0' alt='example' />
                    </section>

        </section>
    </article>
        {/*__________Banner part  */}

        {/* Selecting Part */}
        <section className='mt-[20svh] md:mt-[25svh] h-[100svh] flex flex-col lg:flex-row lg:items-center items-center md:w-svw md:justify-evenly justify-between gap-10 hide-scrollbar'> 

            <Link 
                href="balloon"
                className="relative z-30 w-64 h-[22rem] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl h-[24rem] ' src={balloon} alt="balloon designs"/>
                    <p className='absolute self-center text-2xl font-bold sm:text-xl bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center text_animation' >
                    هنرهای با بادکنک
                    </p>
            </Link>
            <Link 
                href="flower"
                className="relative z-30 w-64 h-[22rem] wobble_with_delay grid place-items-center " >
                    <Image className=' drop-shadow-4xl h-[20rem]' src={flower} alt="flower designs"/>
                    <p className='absolute self-center text-2xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    هنرهای با گل
                    </p>
            </Link>
            <Link 
                href="fruit"
                className="relative z-30 w-64 h-96 wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={fruit} alt="fruit designs"/>
                    <p className='absolute self-center text-2xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    هنرهای با میوه
                    </p>
            </Link>
            <Link 
                href="about"
                className="relative z-30 w-64 h-96 wobble_with_delay grid place-items-center " >
                    <Image className=' drop-shadow-4xl h-[22rem]' src={contactUs} alt="contact us"/>
                    <p className='absolute self-center text-xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    درباره ما <br></br> وارتباط با ما
                    </p>
            </Link>
            <Link 
                href="learning"
                className="relative z-30 w-64 h-96 wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={learning} alt="learning"/>
                    <p className='absolute self-center text-2xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation' >
                    آموزش و یادگیری
                    </p>
            </Link>

        </section>
        <ContactUs/>
        </section>

    </main>
    
</>

)}