// Types
import { ThemeProps } from './theme'

/** Showcase component props */
export interface ShowcaseProps extends ThemeProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  descriptions: string[]
  /** Image to use on the showcase */
  image: 'marketing'
    | 'branding'
    | 'development'
    | 'design'
    | 'team'
    | 'innovate'
    | 'oportunity'
    | 'assume'
    | 'strategy'
    | 'prevent'
    | 'progress'
  /** Set the demo width to large */
  large?: boolean
  /** Set a CallToAction button */
  action?: boolean
  /** Set a Link from the specific route */
  link?: string
  /** Invert the order of content */
  reverse?: boolean
}
