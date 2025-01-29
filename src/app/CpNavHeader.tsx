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
        <div className={`container mx-auto px-8 ${styles.headerTitle} ${isExtraSmallScreen ? "pl-12" : ""}`}>
          <Link href="/">
            <svg
              className="mr-4 inline-block"
              fill="#000"
              height="48px"
              version="1.1"
              viewBox="0 0 512 512"
              width="48px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>racquet</title>
              <g fill="none" fill-rule="evenodd" id="racquet" stroke="none" stroke-width="1">
                <g className="darkMode" fill="#fff" transform="translate(0.060000, 0.251000)">
                  <path
                    d="M219.721087,199.108073 C219.220691,206.237144 218.426037,213.901229 217.225401,221.981524 C211.373285,261.389289 194.342509,318.417134 146.45004,366.309602 L133.598673,353.458235 C177.801114,309.255794 193.646203,256.449058 199.15528,219.932733 C200.968036,207.918506 201.811471,196.830327 202.108876,187.174886 L204.948388,184.335374 L219.721087,199.108073"
                    id="Fill-2"
                  ></path>
                  <path
                    d="M17.314806,508.819416 L3.13376981,494.63838 C-1.1077951,490.396815 -1.1077951,483.45736 3.13376981,479.216582 L135.26902,347.080545 C139.510585,342.839767 146.45004,342.839767 150.690818,347.080545 L164.872641,361.261581 C169.113419,365.503146 169.113419,372.442601 164.872641,376.683379 L32.7366041,508.819416 C28.495826,513.060195 21.5555841,513.060195 17.314806,508.819416"
                    id="Fill-4"
                  ></path>
                  <path
                    d="M466.336104,45.6170825 C420.95427,0.234462315 334.945153,12.4005388 274.608873,72.737606 C214.271805,133.074673 202.105729,219.083004 247.487562,264.465624 C292.870183,309.847457 378.878513,297.681381 439.21558,237.344314 C499.552647,177.008033 511.718724,90.9989159 466.336104,45.6170825 Z M234.636195,277.316991 C208.890187,251.570983 197.741425,214.532232 203.244209,173.023747 C208.628187,132.415346 229.408,92.2357439 261.757505,59.8862387 C294.106224,27.5367335 334.285826,6.75692068 374.895014,1.37294208 C416.402712,-4.12984125 453.441463,7.01892052 479.187471,32.7649284 C504.934266,58.511723 516.082241,95.5496878 510.580244,137.058172 C505.197052,177.66736 484.416453,217.846962 452.066948,250.195681 C419.717442,282.545186 379.538627,303.325786 338.929439,308.708977 C297.420954,314.211761 260.382203,303.062999 234.636195,277.316991 L234.636195,277.316991 Z"
                    id="Fill-5"
                  ></path>
                  <path
                    d="M312.845113,292.232099 C305.716042,292.732495 298.05117,293.527149 289.970875,294.726998 C250.563897,300.579901 193.536053,317.609891 145.643584,365.502359 L158.494952,378.354513 C202.696606,334.152073 255.504128,318.306197 292.019667,312.797906 C304.03468,310.98515 315.122073,310.141715 324.778301,309.843523 L327.617812,307.004798 L312.845113,292.232099"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </svg>
            Shoreline Tennis Club
          </Link>
          <div>2025 Season</div>
        </div>
        {!isExtraSmallScreen && (
          <nav className={`container mx-auto ${styles.headerNav}`}>
            <CpNavLinks type="header" />
          </nav>
        )}
      </header>
    </>
  )
}
