// Types
import { ParentProps } from './layout'
import { ShowcaseProps } from './data-display'

/** The Hero component props */
export interface HeroProps extends ParentProps {
  /** Heading label */
  label?: string
  /** Heading text sizes */
  text?: 'md' | 'lg'
  /** Define the space in X axis */
  space?: boolean
  /** Define the container height */
  height?: boolean
}

/** About component props */
export interface AboutProps {
  /** Section heading */
  heading?: string
  /** Section description */
  description?: string
  /** Section showcases */
  showcases: ShowcaseProps[]
}
