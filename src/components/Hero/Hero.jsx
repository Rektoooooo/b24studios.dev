import { motion } from 'framer-motion'
import Logo from './Logo'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Logo />
        <h1 className={styles.title}>B24 STUDIOS</h1>
      </motion.div>

    </section>
  )
}
