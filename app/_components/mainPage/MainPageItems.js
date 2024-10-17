import Image from 'next/image';
import React from 'react';
// images
import balloon from "@/src/assets/images/Root/balloon_transparent.png"
import flower from "@/src/assets/images/Root/flower_transparent.png"
import fruit from "@/src/assets/images/Root/fruit_transparent.png"
import contactUs from "@/src/assets/images/Root/contactUs_transparent.png"
import learning from "@/src/assets/images/Root/teach_transparent.png"
import LinksForMainPageCOMPS from './LinksForMainPageCOMPS';


const MainPageItems = () => {

    return (
        <section className='mt-[20svh] md:mt-[25svh] h-[100svh] flex flex-col lg:flex-row lg:items-center items-center md:w-svw md:justify-evenly justify-between lg:gap-2 gap-10  hide-scrollbar'> 

            <LinksForMainPageCOMPS 
                href="balloon"
                animation="wobble"
                ImageSrc={balloon} 
                text="هنرهای با بادکنک"
                />

            <LinksForMainPageCOMPS 
                href="flower"
                animation="wobble_with_delay"
                ImageSrc={flower} 
                text="هنرهای با گل"
                />

            <LinksForMainPageCOMPS 
                href="fruit"
                animation="wobble"
                ImageSrc={fruit}
                text="هنرهای با میوه"
                />

            <LinksForMainPageCOMPS 
                href="about"
                animation="wobble_with_delay"
                ImageSrc={contactUs}
                text="درباره ما وارتباط با ما"
                />

            <LinksForMainPageCOMPS 
                href="learning"
                animation="wobble"
                ImageSrc={learning}
                text="آموزش و یادگیری"
                />

        </section>
    );
};

export default MainPageItems;