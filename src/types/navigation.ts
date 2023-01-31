// Types
import { Actionable } from './input'
import { ThemeProps } from './theme'

/** The CallToAction component props */
export interface CallToActionProps extends ThemeProps {
  /** Set button width to 100% and height large */
  large?: boolean
}

/** Link component props */
export interface LinkProps {
  /** Link text */
  children: string
  /** Reference to redirect */
  href: string
}

/** Nav component props */
export interface NavProps extends ThemeProps {
  /**
   * Set the CallToAction component instead of the contact link,
   * is commonly used for the navbar
   */
  primary?: boolean
}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
