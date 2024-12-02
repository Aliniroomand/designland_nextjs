"use client"
import toast from "react-hot-toast";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function getAllPosts(){

    let { data, error } = await supabase
    .from('products')
    .select('*')
            
if(error){
    console.log(error);
    throw new Error("posts couldn't be loaded")
}
return data;
}
export async function getProductsWithID(id){  

    let { data: singleProduct, error } = await supabase
      .from('products')
      .select("*")
      .eq('id', `${id}`)
      .single();
if(error){
    console.log(error);
}
return singleProduct;
}


export async function getAllCategories(){

    let { data, error } = await supabase
    .from('categories')
    .select('*')
            
            
if(error){
    console.log(error);
    throw new Error("Categories couldn't be loaded")
}
return data;
}
export async function getProduct_categories(){
    let { data, error } = await supabase
    .from('product_categories')
    .select('*')
if(error){
    console.log(error);
    throw new Error("Categories couldn't be loaded")
}
return data;
}
// auth

export async function loginUser(email,password){
    let { data, error } = await supabase.auth.signInWithPassword({
        
        email:email,
        password: password

    })
        if(error){
            if(error.toString().includes("Invalid"&&"login"&&"credentials")){

                toast.error("ایمیل یا پسورد را اشتباه وارد کرده اید")
                return
            }
            toast.error(` درخواست شما با خطا موجه شده است:"${error}"`)
        }

        return data
        
    }
    
export async function newUser(refresh_token){
const { data, error } = await supabase.auth.refreshSession({ refreshToken:refresh_token});

if (error) {
  toast.error(`Failed to refresh session: "${error.message}"`);
  console.log(data);
  return null;
}
}