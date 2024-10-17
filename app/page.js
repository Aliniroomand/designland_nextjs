import Image from 'next/image';
// images
import BG from "@/src/assets/images/Root/MainPlainBG_lg.jpg"
// components
import Banner from './_components/mainPage/Banner';
import MainPageItems from './_components/mainPage/MainPageItems';
import ContactUs from './_components/mainPage/ContactUs';

export default async function Home() {
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

        <section className='relative z-20 w-[98svw] mx-[0.5svw] h-[87svh] top-[10svh] lg:top-[13svh] overflow-y-scroll overflow-x-hidden md:overflow-y-visible flex flex-col lg:flex-col lg:items-center items-center justify-between lg:justify-stretch gap-10 hide-scrollbar '>

            <Banner/>
            <MainPageItems/>
            <ContactUs/>
        </section>

    </main>
    
</>

)
}
