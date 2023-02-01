// Types
import { HeaderProps } from '../../types/sections'
// Styles
import styles from '../../styles/sections/Header.module.css'

/**
 * Header section component
 * @see {@link HeaderProps} for props definitions
 * @param {HeaderProps} HeaderProps The header component props
 * @returns Header section component
 */
const Hero = (
  {
    heading,
    description
  }: HeaderProps
) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        {heading
          ? (
            <h1 className={styles.heading}>
              {heading}
            </h1>
            )
          : null}
        <p className={styles.description}>
          {description}
        </p>
      </header>
    </section>
  )
}

export default Hero
