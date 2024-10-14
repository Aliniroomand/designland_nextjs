import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ReturnButton from "./_components/ReturnBackButon";
import { Toaster } from "react-hot-toast";


const mainFont = Baloo_Bhaijaan_2({ subsets: ["arabic"],display:"swap" });

export const metadata = {
  title: " دنیای رنگی دیزاین لند",
  description: "دیزاین شیراز ، دیزاین با بادکنک ، دیزاین با گل ، دیزاین با میوه، میوه آرایی،",
};

export default function RootLayout({ children }) {


  return (
    <html lang="fa" dir="rtl" >
      <body className={`${mainFont.className} min-h-screen relative `}>
        <Toaster position="top-center"/>
          <Navbar/>
          <main className="absolute top-[9svh]">
          {children}
          </main>
        <nav className="fixed z-50 ">
          <ReturnButton/>
        </nav>
      </body>
    </html>
  );
}
