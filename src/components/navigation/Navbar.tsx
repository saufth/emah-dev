// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '../input/MenuButton'
import Nav from './Nav'
// Animation
import { useCycle } from 'framer-motion'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
// Types
import { Theme } from '../../types/theme'
import Menu from './Menu'

/** Theme configuration for Navbar */
const themeConfig = {
  light: {
    logo: '/images/logotype/logomark-white.svg'
  },
  dark: {
    logo: '/images/logotype/logomark.svg'
  }
}
/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  const theme: Theme = 'dark'
  // Animation
  const [isOpen, toggle] = useCycle(false, true)

  const handleToggle = () => toggle()

  return (
    <>
      <header className={styles.navbar}>
        <div>
          <Link href='/'>
            <div className={styles.logo}>
              <Image
                alt='emah logomark'
                src={themeConfig[theme].logo}
                width={64}
                height={48}
                priority
                className={styles.logomark}
              />
            </div>
          </Link>
        </div>

        <div className={styles.options}>
          <div className={styles.nav}>
            {isOpen
              ? <CallToAction theme={theme} />
              : <Nav primary theme={theme} />}
          </div>
          {isOpen
            ? <div className={styles.close} onClick={handleToggle}>X</div>
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}

export default Navbar
