import React, { ButtonHTMLAttributes } from "react"

import styles from "./CpButton.module.css"

interface CpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: string
  size?: number
}

/**
 * Wow a button component. Really only works for the small screen menu button right now.
 */
const CpButton: React.FC<CpButtonProps> = ({ ...props }) => {
  return <button className={styles.CpButton} {...props} />
}

export default CpButton
