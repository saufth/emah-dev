// Types
import { HeroProps } from '../../types/sections'
// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
 * The hero section of the application
 * @see {@link HeroProps} for props definitions
 * @param {HeroProps} HeroProps The child elements
 * @returns The Hero section component
 */
const Hero = (
  {
    children,
    label,
    space,
    text = 'lg',
    height
  }: HeroProps
) => {
  const spaceStyle = space ? styles.space : ''
  const heightStyle = height ? styles.sectionHeight : ''
  const sectionStyle = `${styles.section} ${heightStyle} ${spaceStyle}`
  const sizeStyle = text === 'lg' ? styles.textLarge : styles.textMedium
  const headingStyle = `${styles.heading} ${sizeStyle}`

  return (
    <section className={sectionStyle}>
      <header className={styles.header}>
        {label
          ? (
            <div className={styles.label}>
              {label}
            </div>
            )
          : null}
        <h1 className={headingStyle}>
          {children}
        </h1>
      </header>
    </section>
  )
}

export default Hero
