// Components
import Link from 'next/link'
// Hooks
import useRefMagnetic from '../../modules/animation/hooks/useRefMagnetic'
// Types
import { CallToActionProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/CallToAction.module.css'

/** Theme configuration for CallToAction */
const themeConfig = {
  light: styles.actionLight,
  dark: styles.actionDark
}

/**
 * The primary call to actions of the application
 * @see {@link CallToActionProps} for props definition
 * @param {CallToActionProps} CallToActionProps The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ large, theme = 'light' }: CallToActionProps) => {
  const fieldRef = useRefMagnetic({ transition: 6 })
  const textRef = useRefMagnetic({ fieldRef, transition: 4 })
  const actionStyle = `${styles.action} ${large ? styles.large : ''} ${themeConfig[theme]}`

  return (
    <div className={actionStyle} ref={fieldRef}>
      <Link href='/contact'>
        <div className={styles.content}>
          <span className={styles.text} ref={textRef}>
            Contáctanos
          </span>
        </div>
      </Link>
    </div>
  )
}

export default CallToAction
