import React from 'react';
import { getBalloons } from '../_lib/data_services';
import BalloonCard from './BalloonCard';

const Similar_items_for_Balloon = async ({category}) => {
    const Balloons= await getBalloons();
    const similar=Balloons.filter(i=>i.category===category);
    return (
        <div className=' w-full h-[90%] top-[10%] flex flex-row overflow-x-scroll overflow-y-hidden hide-scrollbar items-center justify-start '>
            {
            similar.map(infos=><BalloonCard className="!w-6" key={infos.id} infos={infos}/>)
            }
            {
            similar.map(infos=><BalloonCard className="!w-6" key={infos.id} infos={infos}/>)
            }
            {
            similar.map(infos=><BalloonCard className="!w-6" key={infos.id} infos={infos}/>)
            }
            {
            similar.map(infos=><BalloonCard className="!w-6" key={infos.id} infos={infos}/>)
            }
        </div>
    );
};

export default Similar_items_for_Balloon;