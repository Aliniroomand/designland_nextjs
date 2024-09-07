import { getFruits } from "../_lib/data_services"

import FruitCard from "./FruitCard";

export default async function FruitList(){

    const Fruits= await getFruits()
return(

    <section className="grid_style_cards w-full right-0  p-4">
{Fruits?.length > 0 ? 
    Fruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
{Fruits?.length > 0 ? 
    Fruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
{Fruits?.length > 0 ? 
    Fruits.map(infos=><FruitCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
</section>
)
}