// Types
import { ThemeProps } from './theme'

/** Generic arrow function type */
export type Action<P = undefined, R = void> = P extends undefined
  ? () => R
  : (param: P) => R

/** Used to define the action property to components */
export interface Actionable<P = undefined, R = void> {
  /** The action to perform */
  action?: Action<P, R>
}

/** Props for basic input components */
export interface InputProps extends ThemeProps, Actionable {}

/** Layouts for MouseEvent to get the mouse position */
export type MousePositionLayout = 'screen' | 'offset' |'client'
