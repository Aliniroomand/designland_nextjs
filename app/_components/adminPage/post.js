import Image from 'next/image';
import React from 'react';

const Post = () => {
    return (
    <article className="flex flex-row justify-between items-center my-2  h-20  neo_shadow w-[98%] mx-auto px-2 rounded-3xl ">
        <section className=" contents">
            <Image />
            <h3>info</h3>
            <h4>code</h4>
            <h4>category</h4>
        </section>
        <section>
            <button>delete</button>
            <button>edit</button>
            
        </section>
    </article>
    );
};

export default Post;