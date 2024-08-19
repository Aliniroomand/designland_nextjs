import { getBalloons } from "../_lib/data_services"
import BalloonCard from "../_components/BalloonCard";

export default async function BallonList(){

    const Balloons= await getBalloons()

return(

    <section className="absolute h-[70svh] w-full right-0 top-[26svh] sm:top-[35svh] sm:h-[64svh] overflow-y-scroll grid grid_style_cards p-4">
{Balloons.length > 0 ? 
    Balloons.map(infos=><BalloonCard key={infos.id} infos={infos}/>)
    :
<h1>
    موردی برای نمایش نیست
</h1>

}
</section>
)
}