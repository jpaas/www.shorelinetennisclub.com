import CxScreenLayout from "@/contexts/CxScreenLayout"
import CpNavHeader from "./CpNavHeader"
import CpNavLinks from "./CpNavLinks"
import CpSmallScreenNavigationMenu from "./CpSmallScreenNavigationMenu"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CxScreenLayout>
          <CpNavHeader />
          {children}
          <footer className="container mx-auto flex flex-col items-center p-4">
            <CpNavLinks isFooter={true} />
            <p className="px-2 pt-8 text-sm opacity-60"> Copyright © Shoreline Tennis Club. All Rights Reserved.</p>
          </footer>
          <CpSmallScreenNavigationMenu />
        </CxScreenLayout>
      </body>
    </html>
  )
}
