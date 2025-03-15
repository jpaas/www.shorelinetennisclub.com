import Link from "next/link"

import styles from "./nav.module.css"

const localStyles = {
  footer: "inline-block px-2",
  header: `inline-block ${styles.headerNavLink} p-4`,
  menu: `block ${styles.headerNavLink} p-4 text-lg`,
}

interface CpNavLinksProps {
  onNavigate?: () => void
  type: "footer" | "header" | "menu"
}

export default function CpNavLinks({ onNavigate, type }: CpNavLinksProps) {
  const className = localStyles[type]

  return (
    <p>
      <Link className={className} href="/" onClick={onNavigate}>
        Home
      </Link>

      <Link
        className={className}
        href="https://docs.google.com/forms/d/e/1FAIpQLSc5xPouzYKYwHEPBPnGJ9esZDmIsR9d87cd0W_HNzfYACCFwA/viewform"
        onClick={onNavigate}
        rel="noreferrer"
        target="_blank"
      >
        Register
      </Link>

      <a className={className} href="/#book_court" onClick={onNavigate}>
        Court Booking Rules & Programs
      </a>

      <Link className={className} href="/rules_of_play" onClick={onNavigate}>
        Rules of Play
      </Link>

      <Link className={className} href="mailto:info@shorelinetennisclub.com" onClick={onNavigate}>
        Contact Us
      </Link>
    </p>
  )
}
