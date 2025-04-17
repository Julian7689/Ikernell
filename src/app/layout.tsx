import "../app/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FloatingChat from "./components/FloatingChat";
const poppinsFont = Poppins({weight:["400","600","700"],subsets:["latin"]})

export const metadata: Metadata = {
  title:  'Ikernell | Software development', 
  description : 'Ikernell is a software development company that specializes in building custom software solutions for businesses of all sizes.'
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        {children}
        <FloatingChat />
      </body>
    </html>
  )
}
