"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
// image
import BG from "@/src/assets/images/Root/transparentLeaf.png"
export default function ReturnButton (){
    const router=useRouter()
    const goBack=()=>{
        router.back()
    }
return(
    <button onClick={goBack} className="fixed left-2 bottom-[110px] w-24 -rotate-45">
        <Image className="absolute -left-2 bottom-0 brightness-[.8]" src={BG} alt="return background button" />
        <p className="absolute bottom-3 left-4 text-lg font-bold text-red-100 text_shadow"  >
            بازگشت
        </p>
    </button>
)
}