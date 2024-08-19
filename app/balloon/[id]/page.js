import { getBalloonsWithID } from "@/app/_lib/data_services";

export default async function Page({params}){
    const infos= await getBalloonsWithID(params.id)
    console.log(infos);
    return(<>hhhhhhhhhhhhhhhhhh</>)
}