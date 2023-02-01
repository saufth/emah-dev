// Types
import { ShowcaseProps } from './data-display'

/** Header component props */
export interface HeaderProps {
  /** Heading label */
  heading?: string
  /** Header description */
  description: string
}

/** About component props */
export interface AboutProps {
  /** Section heading */
  heading?: string
  /** Section description */
  description?: string
  /** Section showcases */
  showcases: ShowcaseProps[]
  /** Set a callToAction on each Showcase */
  action?: boolean
  /** Set a Link on each Showcase */
  link?: string
}
