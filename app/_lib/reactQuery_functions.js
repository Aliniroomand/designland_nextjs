"use client"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "./data_services"
// react query
import {QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';




const queryClient=new QueryClient({   defaultOptions:{ queries: {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, 
    retry: 2,
  }},});
  

export default function ReactQueryProvider({children}){
  return(
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
    
)
  }


const WholePostsQuery=()=>{
    return (
      useQuery({
        queryKey:["posts"],
        queryFn:getAllPosts,
        retry:2,
    })
    )
    }
export {WholePostsQuery}
