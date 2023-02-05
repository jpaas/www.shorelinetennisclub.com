import { useContext } from "react"

import { ScreenLayoutContext, ScreenLayoutContextValue } from "contexts/CxScreenLayout"

const useScreenLayout = (): ScreenLayoutContextValue => {
  return useContext<ScreenLayoutContextValue>(ScreenLayoutContext)
}

export default useScreenLayout
