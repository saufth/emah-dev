// Types
import { InputProps } from '../../types/input'
// Styles
import styles from '../../styles/input/MenuButton.module.css'

/**
* The main menu button of the application
* @see {@link InputProps} for props definition
* @param {InputProps} InputProps The basic input component props
* @returns The MenuButton component
*/
const MenuButton = ({ action, theme = 'light' }: InputProps) => {
  const menuStyle = `${styles.button} ${theme !== 'light' ? '' : styles.buttonDark}`

  return (
    <button className={menuStyle} onClick={action}>
      <span />
      <span />
    </button>
  )
}

export default MenuButton
