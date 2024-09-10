import { getFlowers } from "../_lib/data_services"

import FlowerCard from "./FlowerCard";

export default async function FLowerList({filter}){
    const Flowers= await getFlowers()

    let filteredFlowers

    if(filter==="all")
        filteredFlowers=Flowers;
    if(filter!=="all")
        filteredFlowers=Flowers.filter((i)=>i.category.includes(filter))
    
return(

    <section className="absolute h-[87svh] w-full right-0 top-[18svh]  overflow-y-scroll grid grid_style_cards p-4 ">
{filteredFlowers?.length > 0 ? 
    filteredFlowers?.map(infos=><FlowerCard key={infos.id} infos={infos}/>)
    :
<h1 className=" text-xl md:text-2xl  bg-red-100 bg-opacity-70 grid place-self-center text-yellow-950 p-10 rounded-3xl font-bold ">
    موردی برای نمایش نیست
</h1>

}
</section>
)
}