import { supabase } from "./supabase";

export async function getBalloons(){
    let { data: balloon, error } = await supabase
    .from('balloon')
    .select('*')  
if(error){
    console.log(error);
    throw new Error("Balloons couldn't be loaded")
}
return balloon;
}
export async function getBalloonsWithID(id){  
    let { data: balloon, error } = await supabase
      .from('balloon')
      .select("*")
      .eq('if', `${id}`)
      .single();
if(error){
    console.log(error);
}
return balloon;
}

export async function getFruits(){
    let { data: fruit, error } = await supabase
    .from('fruit')
    .select('*')
  
if(error){
    console.log(error);
    throw new Error("Fruits couldn't be loaded")
}
return fruit;
}
export async function getFlowers(){

    let { data: flower, error } = await supabase
    .from('flower')
    .select('*')
  
if(error){
    console.log(error);
    throw new Error("Flowers couldn't be loaded")
}
return flower;
}

