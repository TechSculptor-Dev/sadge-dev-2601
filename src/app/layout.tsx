"use client"

import "./globals.css";
import { MouseEvent, useRef } from "react";
import { Inter, Noto_Sans, Roboto } from 'next/font/google';

const inter = Inter({})
const noto_sans = Noto_Sans({})
const roboto = Roboto({
  weight: "400"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    if (divRef.current) {
      divRef.current.style.background = `radial-gradient(500px at ${clientX}px ${clientY}px, rgba(29,78,216,0.15),transparent 80%)`
    }
  }

  return (
    <html lang="en" className={`${inter.className} ${noto_sans.className} ${roboto.className} scroll-smooth `}>

      <body  className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      >

        <div onMouseMove={handleMouseMove} className=" group/spotlight">

          <div ref={divRef} className="pointer-events-none fixed inset-0 z-30 transition duration-300 "></div>
          {children}
        </div>
      </body>
    </html>
  );
}
