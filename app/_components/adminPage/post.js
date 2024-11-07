"use client"
import Image from 'next/image';
import React from 'react';

// images
import editLogo from '@/src/assets/images/Root/edit.svg'
import deleteLogo from '@/src/assets/images/Root/delete.svg'
import Link from 'next/link';

const Post = ({image,category,created_at,name,id}) => {

    const organized_category=category;
    const splittedImage=image.includes(",") ? image?.split(",")[0].trim() : image.trim();

console.log(+id<3000);
    const show_post_temporary=()=>{

    }
    return (
    <Link href="" onClick={()=>show_post_temporary} className={`flex flex-row justify-between items-center my-2  h-20  neo_shadow w-[98%] mx-auto px-2 rounded-3xl  ${+id<1000 ? "bg-fuchsia-300" : (1000<= +id && +id<3000)? "bg-orange-300" : +id>3000 && "bg-emerald-300 "}`}>
        <section className={`flex flex-row w-4/5 h-full items-center  justify-between `}>
            <Image className="" width="50" height="50" src={splittedImage} alt={`${name.toString().slice(0,5)}...`}/>
            <h3 className="w-1/5">{name}</h3>
            <h4 className="w-1/5">کد: {id}</h4>
            <h4 className="w-1/5 text-sm">{organized_category}</h4>
            <h5 className="w-1/5 text-sm ">
                تاریخ بارگذاری :
                {new Date(created_at).toLocaleDateString("fa-IR")}
            </h5>
        </section>


        <section className="flex w-1/5 h-[80%] items-center justify-end gap-2">
            <button>
                <Image width="30" src={editLogo} alt="edit logo"/>
            </button>

            <button>
                <Image  width="30" src={deleteLogo} alt="delete logo"/>
            </button>
        </section>


    </Link>
    );
};

export default Post;