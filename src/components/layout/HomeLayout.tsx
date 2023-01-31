// React
import { useRef } from 'react'
// Hooks
import usePhysics from '../../modules/animation/hooks/usePhysics'
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Types
import { ParentProps } from '../../types/layout'
// Styles
import styles from '../../styles/layout/HomeLayout.module.css'

/**
 * Create a scrolleable container with ease effect for Home page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The content of the scrollable container
 * @returns The HomeLayout component
*/
const HomeLayout = ({ children }: ParentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(scrollRef.current)
  // Scroll animation config
  const { scrollY } = useScroll()
  const physics = usePhysics()
  const containerTransform = useTransform(scrollY, [0, height], [0, -height])
  const containerSpring = useSpring(containerTransform, physics)

  return (
    <>
      <motion.div
        className={styles.scrollable}
        style={{ y: containerSpring }}
        ref={scrollRef}
      >
        {children}
      </motion.div>

      <div style={{ height }} />
    </>
  )
}

export default HomeLayout
