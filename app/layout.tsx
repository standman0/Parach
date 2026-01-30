import type { Metadata } from "next";
import { cabinetGrotesk } from "./fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
