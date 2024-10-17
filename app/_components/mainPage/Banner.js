import Image from 'next/image';
import React from 'react';
// images
import rope from "@/src/assets/images/Root/Rope.png"
import stick from "@/src/assets/images/Root/stick.png"
import example from "@/src/assets/images/Root/code2.jpg"


const Banner = () => {
    return (
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
    );
};

export default Banner;