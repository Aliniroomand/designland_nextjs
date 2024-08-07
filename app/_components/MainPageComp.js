
import Image from 'next/image';
import Link from 'next/link';

// images
import BG from "@/src/assets/images/Root/MainPlainBG_lg.jpg"
import balloon from "@/src/assets/images/Root/balloon_transparent.png"
import flower from "@/src/assets/images/Root/flower_transparent.png"
import fruit from "@/src/assets/images/Root/fruit_transparent.png"
import contactUs from "@/src/assets/images/Root/contactUs_transparent.png"
import learning from "@/src/assets/images/Root/teach_transparent.png"



export default function MainPageComp(){

return(
    <>

    <main  className='relative '>
        {/* Background */}
        <Image
            className=' fixed h-full z-[1] w-screen right-0 bottom-0 object-cover object-left-bottom blur-[1px]'
            src={BG}
            placeholder='blur'
            quality={10}
            alt="BG"
        />

        {/* Title Part */}
            <p className='fixed z-10 h-[13svh] sm:h-[15svh] top-0 sm:text-xl text-xl text-center bg-white backdrop-blur-[1px] bg-opacity-55 text-slate-900 w-full font-semibold sm:py-2 py-6 text_animation' style={{ textShadow: '0px 0px 5px #fff' }}>
                به دنیای رنگی دیزاین لند خوش اومدی <br />برای دیدن قسمتهای مختلف هنر ما اسکرول کن
            </p>

        {/* Selecting Part */}
        <section className='relative z-20 w-svw h-[87svh] top-[13svh] overflow-y-scroll overflow-x-hidden lg:overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-stretch gap-[20svh]'>
            <Link 
                href="balloon"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={balloon}/>
                    <p className='absolute self-center text-4xl font-bold sm:text-xl bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center text_animation'>
                    هنرهای با بادکنک
                    </p>
            </Link>
            <Link 
                href="flower"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={flower}/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation'>
                    هنرهای با گل
                    </p>
            </Link>
            <Link 
                href="fruit"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={fruit}/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation'>
                    هنرهای با میوه
                    </p>
            </Link>
            <Link 
                href="about"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={contactUs}/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation'>
                    درباره ما <br></br> وارتباط با ما
                    </p>
            </Link>
            <Link 
                href="learning"
                className="relative z-30 w-full h-[50svh] wobble grid place-items-center " >
                    <Image className=' drop-shadow-4xl' src={learning}/>
                    <p className='absolute self-center text-4xl font-bold bg-slate-100 bg-opacity-50 px-7 rounded-2xl text-center sm:text-xl text_animation'>
                    آموزش و یادگیری
                    </p>
            </Link>

        </section>
    </main>
    
</>

)}