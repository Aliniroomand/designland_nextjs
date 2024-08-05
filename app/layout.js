import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";

const mainFont = Baloo_Bhaijaan_2({ subsets: ["arabic"],display:"swap" });

export const metadata = {
  title: " دنیای رنگی دیزاین لند",
  description: "دیزاین شیراز ، دیزاین با بادکنک ، دیزاین با گل ، دیزاین با میوه، میوه آرایی،",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" >
      <body className={`${mainFont.className} min-h-screen `}>
        {children}
      </body>
    </html>
  );
}
