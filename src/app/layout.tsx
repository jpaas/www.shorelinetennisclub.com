import { Merriweather_Sans, Roboto } from "@next/font/google"

import CxScreenLayout from "@/contexts/CxScreenLayout"
import CpNavHeader from "./CpNavHeader"
import CpNavLinks from "./CpNavLinks"
import CpSmallScreenNavigationMenu from "./CpSmallScreenNavigationMenu"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700", "900"],
})
const merriweather_sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
  weight: ["400", "700", "800"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${roboto.variable} ${merriweather_sans.variable}`} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CxScreenLayout>
          <CpNavHeader />
          {children}
          <footer className="flex flex-col items-center bg-white/70 p-4">
            <CpNavLinks isFooter={true} />
            <p className="px-2 pt-8 text-center text-sm opacity-60">
              Copyright © Shoreline Tennis Club. All Rights Reserved.
            </p>
          </footer>
          <CpSmallScreenNavigationMenu />
        </CxScreenLayout>
      </body>
    </html>
  )
}
