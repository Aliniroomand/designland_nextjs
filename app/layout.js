import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ReturnButton from "./_components/ReturnBackButon";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./_lib/reactQuery_functions";

const mainFont = Rubik({ subsets: ["arabic"],display:"swap",weight:"300" });

export const metadata = {
  title: " دنیای رنگی دیزاین لند",
  description: "دیزاین شیراز ، دیزاین با بادکنک ، دیزاین با گل ، دیزاین با میوه، میوه آرایی،",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fa" dir="rtl" >

      <body className={`${mainFont.className} min-h-screen relative`}>
        <ReactQueryProvider>
        
        <Toaster position="top-center"/>
          <Navbar/>
          <main className="absolute w-full top-[10svh] ">
          {children}
          </main>
        <nav className="fixed z-50 ">
          <ReturnButton/>
        </nav>
      </ReactQueryProvider>
      </body>

    </html>
  );
}
