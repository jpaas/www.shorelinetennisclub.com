"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

import useScreenLayout from "@/hooks/useScreenLayout"
import CpNavLinks from "./CpNavLinks"
import styles from "./page.module.css"

export default function CpNavHeader() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const { isExtraSmallScreen } = useScreenLayout()

  const scrolledRef = useRef<HTMLDivElement>(null)

  // Could replace this with https://usehooks.com/useOnScreen/
  const intersectionCallback = useCallback<IntersectionObserverCallback>(([entry]: IntersectionObserverEntry[]) => {
    setHasScrolled(entry ? !entry.isIntersecting : false)
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback)
    const observedElement = scrolledRef.current
    if (observedElement) {
      observer.observe(observedElement)
    }

    return () => {
      if (observedElement) observer.unobserve(observedElement)
    }
  }, [intersectionCallback])

  return (
    <>
      <div ref={scrolledRef} />
      <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ""}`}>
        <div className={`${styles.headerTitle} ${isExtraSmallScreen ? "pt-12" : ""}`}>
          <Link href="/">Shoreline Tennis Club</Link>
          <div>2023 Season</div>
        </div>
        {!isExtraSmallScreen && (
          <nav className={styles.headerNav}>
            <CpNavLinks />
          </nav>
        )}
      </header>
    </>
  )
}
