// "use client"
import React from 'react';
import Post from './post';
import Loader from '@/app/loading';
import { Suspense } from 'react';
import { getBalloons, getFlowers, getFruits } from '@/app/_lib/data_services';
import PostsSorting from './PostsSorting';

const PostsList = async () => {
    const balloonPosts=await getBalloons();
    const fruitPosts=await getFruits();
    const flowerPosts=await getFlowers();

    const wholeOfPosts=[...balloonPosts,...fruitPosts,...flowerPosts];

    
    return (
        <article className=" h-full border-[0.5px] border-black w-[96%] mt-1 shadow-darkBox rounded-2xl overflow-y-scroll" >
            <header className="flex justify-around">

            <h1 className="text-xl neo_shadow w-full rounded-full bg-teal-400">لیست پستها</h1>
            <section className="text-xs border-none  ">
                <PostsSorting/>
            </section>

            </header>
            {<Suspense fallback={<Loader/>} >
            <main >
                {
                wholeOfPosts.map((i)=>
                    <Post 
                        key={i.id}
                        id={i.id}
                        image={i.Images}
                        category={i.category}
                        created_at={i.created_at}
                        name={i.name}
                    />
                )
                }

            </main>
            </Suspense> }
        </article>
    );
};

export default PostsList;