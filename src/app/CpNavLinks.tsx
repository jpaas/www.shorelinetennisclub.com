import Link from "next/link"

import styles from "./nav.module.css"

const footerStyle = "inline-block px-2"
const headerStyle = `inline-block ${styles.headerNavLink} p-4`
const menuStyle = `${styles.headerNavLink} p-4 text-lg`

interface CpNavLinksProps {
  isFooter?: boolean
  isSmallScreen?: boolean
  onNavigate?: () => void
}

export default function CpNavLinks({ isFooter, isSmallScreen, onNavigate }: CpNavLinksProps) {
  const className = isFooter ? footerStyle : isSmallScreen ? menuStyle : headerStyle
  return (
    <ul>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Home
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Register Online
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Court Schedule
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Club Events
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Little Aces Tennis
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Rules of Play
        </Link>
      </li>
      <li className={className}>
        <Link href="/" onClick={onNavigate}>
          Tennis Links
        </Link>
      </li>
      <li className={className}>
        <Link href="mailto:info@shorelintennisclub.com" onClick={onNavigate}>
          Contact Us
        </Link>
      </li>
    </ul>
  )
}
