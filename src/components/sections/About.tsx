// Components
import Showcase from '../data-display/Showcase'
// Types
import { AboutProps } from '../../types/sections'
// Styles
import styles from '../../styles/sections/About.module.css'

/**
 * A section using for show cases about something
 * @see {@link AboutProps} for props specifications
 * @param {AboutProps} AboutProps About section component props
 * @returns About section component
 */
const About = ({ heading, description, showcases }: AboutProps) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.description}>
          {description}
        </p>
      </header>
      <div className={styles.showcase}>
        {showcases.map((about, key) => (
          <Showcase
            heading={about.heading}
            descriptions={about.descriptions}
            image={about.image}
            theme='dark'
            large
            reverse={key % 2 !== 0}
            key={key}
          />
        ))}
      </div>
    </section>
  )
}

export default About
