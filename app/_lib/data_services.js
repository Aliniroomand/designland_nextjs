import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function getBalloons(){
    let { data: balloon, error } = await supabase
    .from('balloon')
    .select('*') ;
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
      .eq('id', `${id}`)
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
    throw new Error(error,reset)
}
return fruit;
}
export async function getFruitWithID(id){  
    let { data: fruit, error } = await supabase
      .from('fruit')
      .select("*")
      .eq('id', `${id}`)
      .single();
if(error){
    console.log(error);
}
return fruit;
}


export async function getFlowers(){
    let { data: flower, error } = await supabase
    .from('flower')
    .select('*')
  
if(error){
    console.log(error);
    throw new Error("")
    ;
}
return flower;
}
export async function getFlowersWithID(id){  
    let { data: flower, error } = await supabase
      .from('flower')
      .select("*")
      .eq('id', `${id}`)
      .single();
if(error){
    console.log(error);
}
return flower;
}

// auth

export async function loginUser(email,password){

let { data, error } = await supabase.auth.signInWithPassword({

        email:email,
        password: password

    })
        if(error){
            toast.error(`error in loginUser:"${error}"`)
        } 
        console.log(data);
        return data
    
}

  