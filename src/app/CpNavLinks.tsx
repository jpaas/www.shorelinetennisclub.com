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
    <p className="text-center">
      <Link className={className} href="/" onClick={onNavigate}>
        Home
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Register Online
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Court Schedule
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Club Events
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Little Aces Tennis
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Rules of Play
      </Link>

      <Link className={className} href="/" onClick={onNavigate}>
        Tennis Links
      </Link>

      <Link className={className} href="mailto:info@shorelintennisclub.com" onClick={onNavigate}>
        Contact Us
      </Link>
    </p>
  )
}
