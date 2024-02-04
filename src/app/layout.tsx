'use client'

import type { Metadata } from "next";
import { Inter, Gluten } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/components/layout/Nav";
import AnimatedCursor from "react-animated-cursor";
import { usePathname } from "next/navigation";

const gluten = Gluten({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={gluten.className}>
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="165, 128, 220"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          trailingSpeed={3}
        />
        <Providers>
        {pathname !== '/gallery' &&  <Nav />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
