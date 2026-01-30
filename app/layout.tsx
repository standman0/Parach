import type { Metadata } from "next";
import { cabinetGrotesk } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ParachICTAcademy",
  description: "Empowering Future Innovators through Technology Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cabinetGrotesk.variable}>
      <body>
        <Navbar/>
         {children}
      <Footer/>
       
      </body>
    </html>
  );
}
