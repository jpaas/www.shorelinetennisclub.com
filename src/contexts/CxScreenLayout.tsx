"use client"

import { createContext, useEffect, useState } from "react"

export interface ScreenLayoutContextValue {
  height: number
  isExtraSmallScreen: boolean
  isLandscape: boolean
  isLargeScreen: boolean
  isMediumScreen: boolean
  isSmallScreen: boolean
  width: number
}

export const initialScreenContextValue = {
  height: 0,
  isExtraSmallScreen: false,
  isLandscape: false,
  isLargeScreen: false,
  isMediumScreen: false,
  isSmallScreen: false,
  width: 0,
}

const mediaBreaks = {
  "2xlarge": 1536,
  large: 1024,
  medium: 768,
  small: 640,
  xlarge: 1280,
}

export const ScreenLayoutContext = createContext<ScreenLayoutContextValue>(initialScreenContextValue)

/**
 * A container that sets up screen layout context and listens for screen size changes
 */
export default function CxScreenLayout({ children }: { children: React.ReactNode }) {
  const [screenLayoutContext, setScreenLayoutContext] = useState<ScreenLayoutContextValue>(initialScreenContextValue)

  useEffect(() => {
    function handleResize() {
      const height = window.innerHeight
      const width = window.innerWidth
      console.log({ height, width })
      setScreenLayoutContext({
        height,
        isExtraSmallScreen: width < mediaBreaks.small,
        isLandscape: width > height,
        isLargeScreen: width >= mediaBreaks.large,
        isMediumScreen: width >= mediaBreaks.medium && width < mediaBreaks.large,
        isSmallScreen: width < mediaBreaks.medium,
        width,
      })
    }

    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return <ScreenLayoutContext.Provider value={screenLayoutContext}>{children}</ScreenLayoutContext.Provider>
}
