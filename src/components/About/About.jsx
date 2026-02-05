import { motion } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>ABOUT</h2>
        <p className={styles.text}>
          B24 Studios is a two-person iOS development studio focused on crafting
          polished, native applications. We believe in building software that
          feels invisible — tools that respect your time, your privacy, and the
          platform they run on. Every pixel is intentional, every interaction
          considered.
        </p>
      </motion.div>
    </section>
  )
}
