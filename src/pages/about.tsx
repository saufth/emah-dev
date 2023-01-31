// Components
import About from '../components/sections/About'
import AboutLayout from '../components/layout/AboutLayout'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
// Styles
import styles from '../styles/pages/About.module.css'

/**
 * About us page
 * @returns About page component
 */
const AboutPage = () => {
  return (
    <AboutLayout>
      <main>
        <Hero theme='dark' text='md' space height>
          <span className={styles.hero}>
            Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad
          </span>
        </Hero>
        <About />
        <Footer />
      </main>
    </AboutLayout>
  )
}

export default AboutPage
