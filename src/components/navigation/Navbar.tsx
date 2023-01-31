// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../input/Menu'
import Nav from './Nav'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion, useCycle } from 'framer-motion'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
// Types
import { Theme } from '../../types/theme'

/** Theme configuration for Navbar */
const themeConfig = {
  light: {
    logo: '/images/logotype/logomark-white.svg'
  },
  dark: {
    logo: '/images/logotype/logomark.svg'
  }
}

/** Sidebar animation variants */
const sidebarVariants = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/** Sidebar content animation variants */
const sidebarContentVariants = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  const theme: Theme = 'dark'
  // Animation
  const { width } = useDimensions()
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
          <Menu theme={theme} action={handleToggle} />
        </div>
      </header>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={width}
      >
        <motion.div
          className={styles.sidebarBackground}
          variants={sidebarVariants}
        />

        <motion.nav
          aria-label='Directorio emah'
          className={styles.sidebarContent}
          variants={sidebarContentVariants}
        >
          <div>
            Menu
          </div>
          <div className={styles.sidebarItem} onClick={handleToggle}>
            <Link href='/'>
              Inicio
            </Link>
          </div>
          <div className={styles.sidebarItem} onClick={handleToggle}>
            <Link href='/about'>
              Nosotros
            </Link>
          </div>
          <div className={styles.sidebarItem} onClick={handleToggle}>
            <Link href='/contact' className={styles.sidebarNavContact}>
              Contacto
            </Link>
            <div className={styles.sidebarNavAction} onClick={handleToggle}>
              <CallToAction large theme='dark' />
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  )
}

export default Navbar
