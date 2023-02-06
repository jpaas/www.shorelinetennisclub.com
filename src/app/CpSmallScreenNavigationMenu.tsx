"use client"

import CpButton from "@/components/common/CpButton"
import useScreenLayout from "@/hooks/useScreenLayout"
import useToggle from "@/hooks/useToggle"
import CpNavLinks from "./CpNavLinks"
import CpNavMenuIcon from "./CpNavMenuIcon"
import styles from "./nav.module.css"

export default function CpSmallScreenNavigationMenu() {
  const { isExtraSmallScreen } = useScreenLayout()
  const [isMenuOpen, toggleIsMenuOpen] = useToggle()

  return isExtraSmallScreen ? (
    <>
      <CpButton className="fixed left-6 top-6 z-50" onClick={toggleIsMenuOpen}>
        <CpNavMenuIcon isOpen={isMenuOpen} />
      </CpButton>
      {isMenuOpen && (
        <nav className={`${styles.smallScreenNav} ${isMenuOpen ? styles.smallScreenNavOpen : ""}`}>
          <div className="pt-40">
            <CpNavLinks isSmallScreen={true} onNavigate={toggleIsMenuOpen} />
          </div>
        </nav>
      )}
    </>
  ) : null
}
