"use client"
import Image from 'next/image';
import React from 'react';

// images
import editLogo from '@/src/assets/images/Root/edit.svg'
import deleteLogo from '@/src/assets/images/Root/delete.svg'

const Post = ({image,category,created_at,name,id}) => {
    const organized_category=category.split(" ").join("/ و /");

    return (
    <article className="flex flex-row justify-between items-center my-2  h-20  neo_shadow w-[98%] mx-auto px-2 rounded-3xl ">
        <section className=" contents">
            <Image width="50" height="50" src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>کد: {id}</h4>
            <h4>{organized_category}</h4>
        </section>
        <section className="flex">
            <button>
                <Image width="30" src={editLogo} alt="edit logo"/>
            </button>

            <button>
                <Image  width="30" src={deleteLogo} alt="delete logo"/>
            </button>
            
        </section>
    </article>
    );
};

export default Post;