import { getFruits } from "../_lib/data_services"

import FruitCard from "./FruitCard";

export default async function FruitList({filter}){

    const Fruits= await getFruits()
    let filteredFruits
    if (filter ==="all")
        filteredFruits=Fruits;
    if(filter!== "all")
    filteredFruits=Fruits.filter((i)=>i.category.includes(filter))

return(

    <section className="grid_style_cards w-full right-0  p-4">
{filteredFruits?.length > 0 ? 
    filteredFruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
{filteredFruits?.length > 0 ? 
    filteredFruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
{filteredFruits?.length > 0 ? 
    filteredFruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
</section>
)
}