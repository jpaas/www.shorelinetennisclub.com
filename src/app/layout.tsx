import CxScreenLayout from "@/contexts/CxScreenLayout"
import CpNavHeader from "./CpNavHeader"
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
        </CxScreenLayout>
        <footer className="container mx-auto flex flex-col items-center p-4 opacity-70">
          <ul>
            <li className="inline-block px-2">
              <a href="/">Home</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Register Online</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Court Schedule</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Club Events</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Little Aces Tennis</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Rules of Play</a>
            </li>
            <li className="inline-block px-2">
              <a href="/">Tennis Links</a>
            </li>
            <li className="inline-block px-2">
              <a href="mailto:info@shorelintennisclub.com">Contact Us</a>
            </li>
          </ul>
          <p className="px-2 pt-8 text-sm"> Copyright © Shoreline Tennis Club. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  )
}
