"use client"

import { CpButton } from "@/components/ui/CpButton"
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
      <CpButton className="fixed left-2 top-4 z-50" onClick={toggleIsMenuOpen} size="none" variant="link">
        <CpNavMenuIcon className={styles.dropShadow} isOpen={isMenuOpen} />
      </CpButton>
      {isMenuOpen && (
        <nav className={`${styles.smallScreenNav} ${isMenuOpen ? styles.smallScreenNavOpen : ""}`}>
          <div className="flex flex-1 flex-col overflow-auto px-8 pt-48">
            <CpNavLinks onNavigate={toggleIsMenuOpen} type="menu" />
          </div>
        </nav>
      )}
    </>
  ) : null
}
