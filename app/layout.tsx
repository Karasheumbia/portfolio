import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel NSE MBIA HEUMBIA | ML Engineer & Data Scientist",
  description: "Portfolio de Emmanuel NSE MBIA HEUMBIA — Machine Learning Engineer, Data Scientist, Python & AI specialist avec expérience industrielle chez Rio Tinto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased scroll-smooth`}>
      <body className="bg-slate-950 text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
