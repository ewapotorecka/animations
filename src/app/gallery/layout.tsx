import type { Metadata } from "next";
import { Inter, Gluten, Fira_Sans_Condensed } from "next/font/google";



const fira = Fira_Sans_Condensed({ subsets: ["latin"], weight: ['100', '700']});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className={fira.className}>

     
  
          {children}
    
      </div>
  
  );
}
