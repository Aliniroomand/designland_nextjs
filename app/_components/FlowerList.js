import { getFlowers } from "../_lib/data_services"

import FlowerCard from "./FlowerCard";

export default async function FLowerList(){

    const Flowers= await getFlowers()
    console.log(Flowers);
return(

    <section className="absolute h-[70svh] w-full right-0 top-[26svh] sm:top-[35svh] sm:h-[64svh] overflow-y-scroll grid grid_style_cards p-4">
{Flowers?.length > 0 ? 
    Flowers.map(infos=><FlowerCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
</section>
)
}