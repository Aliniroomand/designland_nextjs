"use client"
import { getAllPosts, getBalloons } from "../_lib/data_services"
import BalloonCard from "../_components/BalloonCard";
import { useQuery} from "@tanstack/react-query";
import { supabase } from "../_lib/supabase";
import { WholePostsQuery } from "../_lib/reactQuery_functions";
import Loader from "../loading";


export default function BallonList({filter}){
const {data,error,isPending}=WholePostsQuery();
// console.log(filter);
console.log(data,"aaaaaaa",error,isPending);
    // const filteredBalloons=data?.filter((i)=>i.category.split(" ").includes(filter));
// if(data)console.log(filteredBalloons)
return(

    <section className="absolute h-[70svh] w-full right-0 top-[28svh] sm:top-[35svh] sm:h-[64svh] overflow-y-scroll grid grid_style_cards p-4">
{/* {filteredBalloons?.length > 0 ? 
    filteredBalloons?.map(infos=><BalloonCard key={infos.id} infos={infos}/>)
    :
<h1 className=" text-3xl bg-red-100 bg-opacity-70 grid place-self-center text-yellow-950 p-10 rounded-3xl font-bold ">
    موردی برای نمایش نیست
</h1>

} */}

</section>
)
}